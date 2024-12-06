const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

// Função para gerar User-Agent aleatório
function userAgent() {
  const oos = [
    'Macintosh; Intel Mac OS X 10_15_7',
    'Macintosh; Intel Mac OS X 10_15_5',
    'Macintosh; Intel Mac OS X 10_11_6',
    'Windows NT 10.0; Win64; x64',
    'Windows NT 10.0; WOW64',
    'Windows NT 10.0'
  ];

  return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

class ScrapperData {
  // Faz uma requisição HTTP e retorna o corpo da resposta
  static getHTML(url, config = {}) {
    return new Promise((resolve, reject) => {
      request(
        {
          url,
          ...config
        },
        (error, res, body) => {
          if (error) return reject(error);

          try {
            body = JSON.parse(body); // Tenta parsear como JSON
          } catch {
            // Se não for JSON, deixa como está
          }

          resolve(body);
        }
      );
    });
  }

  // Obtém perguntas do psycatgames
  static psycatgames(idUrl, reload) {
    const user = userAgent();
    const psycatgames = './arquivos/vab.json';

    return new Promise((resolve, reject) => {
      // Verifica se existe um cache local e se deve recarregar
      if (fs.existsSync(psycatgames) && !reload) {
        try {
          return resolve(JSON.parse(fs.readFileSync(psycatgames, 'utf-8')));
        } catch (error) {
          console.error("Erro ao carregar cache:", error);
        }
      }

      // Faz a requisição ao site
      this.getHTML(`https://psycatgames.com/pt/app/would-you-rather/${idUrl}`, {
        method: 'GET',
        headers: {
          referer: 'https://psycatgames.com/pt/app/would-you-rather/',
          'User-agent': user
        }
      })
        .then(html => {
          try {
            const htmlBlocks =
              html.split('\nconst TK=')[0]?.split(/{id:/g) || [];
            if (htmlBlocks.length === 0) {
              console.error('Nenhum bloco correspondente encontrado no HTML');
              return reject('Erro: Nenhum dado encontrado.');
            }

            // Processa os blocos encontrados
            const data = htmlBlocks
              .filter(v => !/data=/.test(v)) // Remove blocos com "data="
              .map(i => {
                try {
                  const array = i.split(/nsfw:(true|false),questions:/g);
                  if (array.length < 3) {
                    console.warn('Bloco incompleto encontrado:', i);
                    return null;
                  }

                  const nsfw = array[1] !== 'false';
                  const id = array[0]
                    ?.replaceAll('"', '')
                    ?.replace(',', '');
                  const questionsRaw = array[2]
                    ?.replaceAll('},', '')
                    ?.replaceAll('}]', '');

                  // Valida e parseia as perguntas
                  const questions = JSON.parse(questionsRaw).map(v => {
                    const g = v
                      .replaceAll('Você prefere ', '')
                      .split(' ou ')
                      .map(y =>
                        y
                          .replaceAll(' / ', '/')
                          .replace('?', '')
                      );
                    return { pergunta1: g[0], pergunta2: g[1] };
                  });

                  return { id, nsfw, questions };
                } catch (error) {
                  console.error('Erro ao processar bloco:', i, error);
                  return null;
                }
              })
              .filter(item => item !== null); // Remove blocos inválidos

            // Salva no cache local
            fs.writeFileSync(psycatgames, JSON.stringify(data, null, 2));
            resolve(data);
          } catch (error) {
            console.error('Erro ao processar HTML:', error);
            reject(error);
          }
        })
        .catch(error => {
          console.error('Erro ao buscar HTML:', error);
          reject(error);
        });
    });
  }
}

// Exporta o módulo
module.exports = {
  credits: 'Ethern ©',
  psycatgames: (reload, url = 't.8627388fc85dd6bb72683bd2fa08e575.js') =>
    ScrapperData.psycatgames(url, reload)
};
