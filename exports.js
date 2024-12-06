const { 
'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os')
const { Youtube } = require('ytdownloader')
const { x2 } = require('x2download')

// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

// Funções:
const webp_mp4 = require("./arquivos/js/webp_mp4.js");
const { sendVideoAsSticker, sendImageAsSticker } = require('./arquivos/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('./arquivos/sticker/rename2.js');
const aluguel = JSON.parse(fs.readFileSync("./database/func/aluguel/aluguel.json"))
const grupos = JSON.parse(fs.readFileSync("./database/func/aluguel/grupos.json"))
const chaves = JSON.parse(fs.readFileSync("./database/func/aluguel/chaves.json"))
const { arcloud } = require('./arquivos/js/arcc.js') 
const { addLimit, getLimit } = require('./arquivos/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./arquivos/js/banned.js");
const { validmove, setGame } = require('./arquivos/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('./arquivos/js/addcmd.js');
const { palavrasANA, quizanimais } = require('./arquivos/games/jogos.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('./arquivos/funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { addVote, delVote } = require('./arquivos/js/vote');

const contar = (frase, letraProcurada) => {
  total = 0
  for(i = 0; i < frase.length; i++) {
    if(letraProcurada == frase[i]) total += 1
  }
  return total
}

const alerandom = (nmr) => {
return Math.floor(Math.random()*nmr)
}

const contarm = (base_a) => {
  if(contar(String(base_a), `:`) != 1) return `É necessário o uso dos : no horário, seguindo apenas horas e minutos`
  var [a, b] = base_a.split(':')
  return Number(Number(a) * 60) + Number(b)
}

const converterMin = (base_b) => {
  if(Number(base_b) === 0) return `00:00`
  if(!Number(base_b)) return `Precisa ser um número`
  nmr = Number(base_b)
  b = nmr % 60
  a = (nmr - b) / 60
  return `${a < 10 ? `0` + a : a}:${b < 10 ? `0` + b : b}`
}

const sendHours = (formato) => {moment.locale("pt")
return moment.tz('America/Sao_Paulo').format(formato)}

// [JSON] - Funções Abaixo >>> :

const { sendButton, sendListB } = require(`./arquivos/funcoes/button.js`)
const packname = JSON.parse(fs.readFileSync('./package.json'));
const voting = JSON.parse(fs.readFileSync('./arquivos/funcoes/voting.json'));
const sotoy = JSON.parse(fs.readFileSync('./arquivos/funcoes/sotoy.json'));
const rg_aluguel = JSON.parse(fs.readFileSync("./settings/media/rg_aluguel.json"));
const comandos = JSON.parse(fs.readFileSync('./settings/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./settings/nescessario.json'));
const premium = JSON.parse(fs.readFileSync('./settings/media/premium.json'));
const ban = JSON.parse(fs.readFileSync('./database/usuarios/banned.json'));
const music = JSON.parse(fs.readFileSync("./arquivos/music.json"));
const muted = JSON.parse(fs.readFileSync('./database/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./database/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha.json'));
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./database/usuarios/joguinhodavelha2.json'));
const patentes = JSON.parse(fs.readFileSync("./settings/media/patentes.json"));
const antispam = JSON.parse(fs.readFileSync('./settings/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./database/func/tabela/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./settings/settings.json'));
const logoslink = JSON.parse(fs.readFileSync('./settings/logos.json'));
const black_ = JSON.parse(fs.readFileSync("./database/grupos/avisos.json"));

// Arquivos - JS - Menus / Informações:
const { menu, adms, menudono, menulogos, menuprem, brincadeiras, efeitos, alteradores } = require('./settings/lib/menus.js');

const { linguagem, mess, getInfo } = require('./settings/lib');
const { infodono } = require('./settings/lib/menus.js');
const { destrava, destrava2 } = require('./arquivos/funcoes/destrava.js');
const { tabela } = require('./arquivos/js/tabela.js');
const { conselhob } = require('./arquivos/js/conselhob.js');
const { palavrasc } = require('./arquivos/js/conselhos.js');

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// Template - Definição para o uso do botões:
if(!nescessario.botoes_) {
var EnvBotao = async (id, MR, miwa, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
miwa.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {miwa.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, miwa, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
miwa.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}


// [INICIO] - Similaridade de Comandos:
function fuzzySimilarity(word1, word2) {
      function generateNGrams(word, n) {
          const nGrams = [];
          for (let i = 0; i < word.length - n + 1; i++) {
              nGrams.push(word.slice(i, i + n));
          }
          return nGrams;
      }
  
      const nGrams1 = generateNGrams(word1, 2);
      const nGrams2 = generateNGrams(word2, 2);
      const commonNGrams = nGrams1.filter(nGram => nGrams2.includes(nGram));
      const similarity = Math.round((2 * commonNGrams.length) / (nGrams1.length + nGrams2.length) * 100);
      
      return similarity;
  }

const listCommands = (targetWord) => {
      const fileContent = fs.readFileSync("index.js", "utf8");
      const commandsRegex = /case\s+['"](.+?)['"]/g;
      let mostSimilarCommand = "";
      let highestSimilarity = -1;
      let match;
  
      while ((match = commandsRegex.exec(fileContent)) !== null) {
          const extractedCommand = match[1];
          const similarity = fuzzySimilarity(targetWord, extractedCommand);
          if (similarity > highestSimilarity) {
              highestSimilarity = similarity;
              mostSimilarCommand = extractedCommand;
          }
      }
  
      return {
          command: mostSimilarCommand, 
          similarity: highestSimilarity
      };
  };

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (miwa, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
miwa.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const RSM_FUNC = async(miwa, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case "02:00:00": case "04:00:00":
case "07:00:00": case "10:00:00":  
case "13:00:00": case "15:00:00":
case "18:00:00": case "22:00:00":
exec("cd settings/SAB_QR-CODE && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("./connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
if(JSON.stringify(rg_aluguel).includes(upsert?.messages[0]?.key?.remoteJid)) {
dat_rg = moment.tz('America/Sao_Paulo').format('DD/MM');
for (var i of rg_aluguel) {
var rg_alg_ofc = i;
}

if(dat_rg == rg_alg_ofc.data.split("/")[0]-1+"/"+rg_alg_ofc.data.split("/")[1]) {
rg_alg_ofc.cobrou = false;
fs.writeFileSync("./settings/media/rg_aluguel.json", JSON.stringify(rg_aluguel));
}

if(dat_rg >= rg_alg_ofc.data) {
if(rg_alg_ofc.cobrou == false) {
txt = `Olá proprietário vim avisar que o grupo: ${rg_alg_ofc.nome_do_gp} encerrou o aluguel hoje, corre logo pra cobrar o indivíduo, texto detalhando sobre o dono: ${rg_alg_ofc.texto}`;
horadd = parseInt(dat_rg.split("/")[1])+1;
miwa.sendMessage(nmrdn_dono2, {text: txt});
rg_alg_ofc.cobrou = true;
rg_alg_ofc.data = parseInt(rg_alg_ofc.data.split("/")[0])+"/"+horadd;
fs.writeFileSync("./settings/media/rg_aluguel.json", JSON.stringify(rg_aluguel))
}}}}

const comand = (miwa, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {
}
}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

// Simih:
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

module.exports = {  P, fs, util, Boom, contar, alerandom, contarm, converterMin, sendHours, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, yts, execSync, limitefll, moment, time, hora, date, infoSystem, RSM_FUNC, comand, addVote, delVote, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, addLimit, getLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, webp_mp4, simih, patentes, antispam, anotar, rg_aluguel, voting, packname, sendButton, sotoy, addVote, delVote, comandos, daily, muted, nescessario, premium, ban, music, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, menu, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, recognize, colors, cheerio, NodeCache, kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, aluguel, grupos, chaves, listCommands, fuzzySimilarity, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, EnvBotao, Youtube, x2, arcloud, linguagem, mess, getInfo }