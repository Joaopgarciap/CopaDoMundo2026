// =============================================
//  COPA DO MUNDO 2026 — script.js
//  Adicione sua chave para notícias IA:
const ANTHROPIC_API_KEY = "";
// =============================================

// ═══ ISO CODES ═══
const isoCodes={
  "México":"mx","África do Sul":"za","Coreia do Sul":"kr","República Tcheca":"cz",
  "Canadá":"ca","Bósnia e Herzegovina":"ba","Catar":"qa","Suíça":"ch",
  "Brasil":"br","Marrocos":"ma","Haiti":"ht","Escócia":"gb-sct",
  "Estados Unidos":"us","Paraguai":"py","Austrália":"au","Turquia":"tr",
  "Alemanha":"de","Curaçao":"cw","Costa do Marfim":"ci","Equador":"ec",
  "Holanda":"nl","Japão":"jp","Suécia":"se","Tunísia":"tn",
  "Bélgica":"be","Egito":"eg","Irã":"ir","Nova Zelândia":"nz",
  "Espanha":"es","Cabo Verde":"cv","Arábia Saudita":"sa","Uruguai":"uy",
  "França":"fr","Senegal":"sn","Iraque":"iq","Noruega":"no",
  "Argentina":"ar","Argélia":"dz","Áustria":"at","Jordânia":"jo",
  "Portugal":"pt","RD do Congo":"cd","Uzbequistão":"uz","Colômbia":"co",
  "Inglaterra":"gb-eng","Croácia":"hr","Gana":"gh","Panamá":"pa",
};

// ═══ GRUPOS ═══
const grupos={
  A:["México","África do Sul","Coreia do Sul","República Tcheca"],
  B:["Canadá","Bósnia e Herzegovina","Catar","Suíça"],
  C:["Brasil","Marrocos","Haiti","Escócia"],
  D:["Estados Unidos","Paraguai","Austrália","Turquia"],
  E:["Alemanha","Curaçao","Costa do Marfim","Equador"],
  F:["Holanda","Japão","Suécia","Tunísia"],
  G:["Bélgica","Egito","Irã","Nova Zelândia"],
  H:["Espanha","Cabo Verde","Arábia Saudita","Uruguai"],
  I:["França","Senegal","Iraque","Noruega"],
  J:["Argentina","Argélia","Áustria","Jordânia"],
  K:["Portugal","RD do Congo","Uzbequistão","Colômbia"],
  L:["Inglaterra","Croácia","Gana","Panamá"],
};

// ═══ CORES ═══
const teamColors={
  "Brasil":{primary:"#009c3b",secondary:"#ffdf00",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#007a2f,#009c3b)"},
  "Argentina":{primary:"#74acdf",secondary:"#fff",accent:"#2d6db5",text:"#003087",gradient:"linear-gradient(135deg,#5a96cf,#74acdf)"},
  "França":{primary:"#002395",secondary:"#ED2939",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#001a6e,#002395)"},
  "Portugal":{primary:"#006600",secondary:"#FF0000",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#004d00,#006600)"},
  "Espanha":{primary:"#c60b1e",secondary:"#ffc400",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#a0091a,#c60b1e)"},
  "Alemanha":{primary:"#1c1c1c",secondary:"#DD0000",accent:"#FFCC00",text:"#fff",gradient:"linear-gradient(135deg,#111,#2a2a2a)"},
  "Inglaterra":{primary:"#003090",secondary:"#CF081F",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#00257a,#003090)"},
  "Holanda":{primary:"#e77c15",secondary:"#003DA5",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#d06a08,#e77c15)"},
  "Bélgica":{primary:"#1a1a1a",secondary:"#EF3340",accent:"#FFD700",text:"#fff",gradient:"linear-gradient(135deg,#0d0d0d,#1a1a1a)"},
  "Croácia":{primary:"#CC0000",secondary:"#fff",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#aa0000,#CC0000)"},
  "Uruguai":{primary:"#5EB6E4",secondary:"#fff",accent:"#003DA5",text:"#fff",gradient:"linear-gradient(135deg,#4aa3d4,#5EB6E4)"},
  "México":{primary:"#006847",secondary:"#CE1126",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#004f35,#006847)"},
  "Estados Unidos":{primary:"#003087",secondary:"#BF0A30",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#00246a,#003087)"},
  "Canadá":{primary:"#CC0000",secondary:"#fff",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#aa0000,#CC0000)"},
  "Japão":{primary:"#BC002D",secondary:"#fff",accent:"#000",text:"#fff",gradient:"linear-gradient(135deg,#960024,#BC002D)"},
  "Marrocos":{primary:"#C1272D",secondary:"#006233",accent:"#fff",text:"#fff",gradient:"linear-gradient(135deg,#a01f24,#C1272D)"},
  "Senegal":{primary:"#00853F",secondary:"#FDEF42",accent:"#E31B23",text:"#fff",gradient:"linear-gradient(135deg,#006530,#00853F)"},
  "Colômbia":{primary:"#FCD116",secondary:"#003087",accent:"#CE1126",text:"#003087",gradient:"linear-gradient(135deg,#e0bb10,#FCD116)"},
};
const defaultColors={primary:"#2563eb",secondary:"#1d4ed8",accent:"#3b82f6",text:"#fff",gradient:"linear-gradient(135deg,#1e40af,#2563eb)"};
function getColors(t){return teamColors[t]||defaultColors;}

// ═══ HISTÓRICO DAS SELEÇÕES ═══
const teamHistory={
  "Brasil":{best:"🏆 Pentacampeão",ranking:5,titulo:"⭐⭐⭐⭐⭐ 5x Campeão",historia:[
    {ano:"2022",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"2018",result:"Quartas de final",fase:"QF",badge:"gray"},
    {ano:"2014",result:"4º Lugar",fase:"4th",badge:"gray"},{ano:"2010",result:"Quartas de final",fase:"QF",badge:"gray"},
    {ano:"2006",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"2002",result:"🏆 Campeão",fase:"W",badge:"gold"},
    {ano:"1998",result:"Vice-campeão",fase:"RU",badge:"silver"},{ano:"1994",result:"🏆 Campeão",fase:"W",badge:"gold"},
    {ano:"1990",result:"Oitavas de final",fase:"R16",badge:"gray"},{ano:"1986",result:"Quartas de final",fase:"QF",badge:"gray"},
  ]},
  "Argentina":{best:"🏆 Tricampeã",ranking:1,titulo:"🏆 Atual Campeã (Qatar 2022)",historia:[
    {ano:"2022",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"2018",result:"Oitavas de final",fase:"R16",badge:"gray"},
    {ano:"2014",result:"Vice-campeão",fase:"RU",badge:"silver"},{ano:"2010",result:"Quartas de final",fase:"QF",badge:"gray"},
    {ano:"2006",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"1990",result:"Vice-campeão",fase:"RU",badge:"silver"},
    {ano:"1986",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"1982",result:"Segunda fase",fase:"R2",badge:"gray"},
    {ano:"1978",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"1974",result:"Segunda fase",fase:"R2",badge:"gray"},
  ]},
  "França":{best:"🏆 Bicampeã",ranking:2,titulo:"🏆 Bicampeã (1998, 2018)",historia:[
    {ano:"2022",result:"Vice-campeão",fase:"RU",badge:"silver"},{ano:"2018",result:"🏆 Campeão",fase:"W",badge:"gold"},
    {ano:"2014",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"2010",result:"Fase de Grupos",fase:"GS",badge:"gray"},
    {ano:"2006",result:"Vice-campeão",fase:"RU",badge:"silver"},{ano:"2002",result:"Fase de Grupos",fase:"GS",badge:"gray"},
    {ano:"1998",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"1986",result:"3º Lugar",fase:"3rd",badge:"bronze"},
  ]},
  "Alemanha":{best:"🏆 Tetracampeã",ranking:16,titulo:"🏆 4x Campeã (1954,1974,1990,2014)",historia:[
    {ano:"2022",result:"Fase de Grupos",fase:"GS",badge:"gray"},{ano:"2018",result:"Fase de Grupos",fase:"GS",badge:"gray"},
    {ano:"2014",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"2010",result:"3º Lugar",fase:"3rd",badge:"bronze"},
    {ano:"2006",result:"3º Lugar",fase:"3rd",badge:"bronze"},{ano:"2002",result:"Vice-campeão",fase:"RU",badge:"silver"},
    {ano:"1990",result:"🏆 Campeão",fase:"W",badge:"gold"},{ano:"1986",result:"Vice-campeão",fase:"RU",badge:"silver"},
  ]},
  "Espanha":{best:"🏆 Tricampeã",ranking:3,titulo:"🏆 3x Campeã (Euro 2008,2010,Euro 2012)",historia:[
    {ano:"2022",result:"Oitavas de final",fase:"R16",badge:"gray"},{ano:"2018",result:"Oitavas de final",fase:"R16",badge:"gray"},
    {ano:"2014",result:"Fase de Grupos",fase:"GS",badge:"gray"},{ano:"2010",result:"🏆 Campeão",fase:"W",badge:"gold"},
    {ano:"2006",result:"Oitavas de final",fase:"R16",badge:"gray"},{ano:"2002",result:"Quartas de final",fase:"QF",badge:"gray"},
  ]},
  "Portugal":{best:"🏆 Euro 2016",ranking:6,titulo:"🇪🇺 Campeão Euro 2016",historia:[
    {ano:"2022",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"2018",result:"Oitavas de final",fase:"R16",badge:"gray"},
    {ano:"2014",result:"Fase de Grupos",fase:"GS",badge:"gray"},{ano:"2010",result:"Oitavas de final",fase:"R16",badge:"gray"},
    {ano:"2006",result:"4º Lugar",fase:"4th",badge:"gray"},{ano:"2002",result:"Fase de Grupos",fase:"GS",badge:"gray"},
  ]},
  "Inglaterra":{best:"🏆 Campeã 1966",ranking:4,titulo:"🏆 Campeã da Copa 1966",historia:[
    {ano:"2022",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"2018",result:"4º Lugar",fase:"4th",badge:"gray"},
    {ano:"2014",result:"Fase de Grupos",fase:"GS",badge:"gray"},{ano:"2010",result:"Oitavas de final",fase:"R16",badge:"gray"},
    {ano:"2006",result:"Quartas de final",fase:"QF",badge:"gray"},{ano:"1966",result:"🏆 Campeão",fase:"W",badge:"gold"},
  ]},
};

// ═══ ESCALAÇÕES ═══
const teamData={
  "Brasil":{
    coach:"Carlo Ancelotti",coachNat:"🇮🇹 Italiano",formation:"4-3-3",grupo:"C",
    titulares:[
      {num:1,pos:"GK",nome:"Alisson",club:"Liverpool"},
      {num:2,pos:"RB",nome:"Danilo",club:"Flamengo"},
      {num:4,pos:"CB",nome:"Marquinhos",club:"PSG"},
      {num:3,pos:"CB",nome:"G. Magalhães",club:"Arsenal"},
      {num:6,pos:"LB",nome:"Alex Sandro",club:"Flamengo"},
      {num:5,pos:"CDM",nome:"Casemiro",club:"Man. United"},
      {num:18,pos:"CM",nome:"B. Guimarães",club:"Newcastle"},
      {num:8,pos:"CM",nome:"Andrey Santos",club:"Chelsea"},
      {num:11,pos:"RW",nome:"Estêvão",club:"Chelsea"},
      {num:9,pos:"FW",nome:"Vinicius Jr.",club:"Real Madrid"},
      {num:10,pos:"LW",nome:"Raphinha",club:"Barcelona"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Ederson",club:"Fenerbahçe"},
      {num:22,pos:"GK",nome:"Bento",club:"Al-Nassr"},
      {num:16,pos:"RB",nome:"Wesley",club:"Roma"},
      {num:14,pos:"CB",nome:"Éder Militão",club:"Real Madrid"},
      {num:13,pos:"CB",nome:"Bremer",club:"Juventus"},
      {num:23,pos:"CB",nome:"Léo Pereira",club:"Flamengo"},
      {num:15,pos:"LB",nome:"Douglas Santos",club:"Zenit"},
      {num:7,pos:"MF",nome:"Fabinho",club:"Al-Ittihad"},
      {num:20,pos:"MF",nome:"Danilo Santos",club:"Botafogo"},
      {num:17,pos:"FW",nome:"G. Martinelli",club:"Arsenal"},
      {num:21,pos:"FW",nome:"Luiz Henrique",club:"Zenit"},
      {num:19,pos:"FW",nome:"Matheus Cunha",club:"Wolves"},
      {num:26,pos:"FW",nome:"João Pedro",club:"Brighton"},
      {num:24,pos:"FW",nome:"Igor Thiago",club:"Brentford"},
      {num:25,pos:"FW",nome:"Endrick",club:"Lyon"},
    ],
  },
  "Argentina":{
    coach:"Lionel Scaloni",coachNat:"🇦🇷 Argentino",formation:"4-2-3-1",grupo:"J",
    titulares:[
      {num:1,pos:"GK",nome:"E. Martínez",club:"Aston Villa"},
      {num:26,pos:"RB",nome:"Montiel",club:"Nottm Forest"},
      {num:13,pos:"CB",nome:"Romero",club:"Spurs"},
      {num:19,pos:"CB",nome:"Otamendi",club:"Benfica"},
      {num:3,pos:"LB",nome:"Tagliafico",club:"Lyon"},
      {num:5,pos:"CDM",nome:"De Paul",club:"Atlético"},
      {num:14,pos:"CDM",nome:"Enzo F.",club:"Chelsea"},
      {num:11,pos:"RAM",nome:"Di María",club:"Benfica"},
      {num:22,pos:"CAM",nome:"L. Martínez",club:"Inter"},
      {num:23,pos:"LAM",nome:"Mac Allister",club:"Liverpool"},
      {num:10,pos:"ST",nome:"L. Messi",club:"Inter Miami"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Rulli",club:"Ajax"},
      {num:6,pos:"CB",nome:"L. Martínez",club:"Man. United"},
      {num:4,pos:"MF",nome:"Lo Celso",club:"Villarreal"},
      {num:9,pos:"FW",nome:"J. Álvarez",club:"Atlético"},
      {num:20,pos:"FW",nome:"Dybala",club:"Roma"},
    ],
  },
  "França":{
    coach:"Didier Deschamps",coachNat:"🇫🇷 Francês",formation:"4-3-3",grupo:"I",
    titulares:[
      {num:1,pos:"GK",nome:"Maignan",club:"Milan"},
      {num:2,pos:"RB",nome:"Pavard",club:"Inter"},
      {num:4,pos:"CB",nome:"Upamecano",club:"Bayern"},
      {num:5,pos:"CB",nome:"Konaté",club:"Liverpool"},
      {num:22,pos:"LB",nome:"T. Hernández",club:"Milan"},
      {num:13,pos:"CDM",nome:"Camavinga",club:"Real Madrid"},
      {num:8,pos:"CM",nome:"Tchouaméni",club:"Real Madrid"},
      {num:14,pos:"CM",nome:"Rabiot",club:"Juventus"},
      {num:11,pos:"RW",nome:"Dembelé",club:"PSG"},
      {num:10,pos:"FW",nome:"Mbappé",club:"Real Madrid"},
      {num:7,pos:"LW",nome:"Griezmann",club:"Atlético"},
    ],
    reservas:[
      {num:16,pos:"GK",nome:"Lloris",club:"Nice"},
      {num:17,pos:"MF",nome:"Kanté",club:"Al-Ittihad"},
      {num:9,pos:"FW",nome:"Giroud",club:"LA Galaxy"},
      {num:25,pos:"FW",nome:"Coman",club:"Bayern"},
    ],
  },
  "Espanha":{
    coach:"Luis de la Fuente",coachNat:"🇪🇸 Espanhol",formation:"4-3-3",grupo:"H",
    titulares:[
      {num:1,pos:"GK",nome:"Unai Simón",club:"Athletic"},
      {num:2,pos:"RB",nome:"Carvajal",club:"Real Madrid"},
      {num:12,pos:"CB",nome:"Laporte",club:"Al-Nassr"},
      {num:4,pos:"CB",nome:"L. Vivian",club:"Juventus"},
      {num:3,pos:"LB",nome:"Grimaldo",club:"Bayer Lev."},
      {num:16,pos:"CDM",nome:"Rodri",club:"Man. City"},
      {num:8,pos:"CM",nome:"Pedri",club:"Barcelona"},
      {num:6,pos:"CM",nome:"Gavi",club:"Barcelona"},
      {num:19,pos:"RW",nome:"L. Yamal",club:"Barcelona"},
      {num:9,pos:"FW",nome:"Morata",club:"Milan"},
      {num:11,pos:"LW",nome:"N. Williams",club:"Athletic"},
    ],
    reservas:[
      {num:13,pos:"GK",nome:"D. Raya",club:"Arsenal"},
      {num:22,pos:"MF",nome:"Zubimendi",club:"Arsenal"},
      {num:7,pos:"FW",nome:"Ferran Torres",club:"Barcelona"},
      {num:21,pos:"FW",nome:"Nico Williams",club:"Athletic"},
    ],
  },
  "Alemanha":{
    coach:"Julian Nagelsmann",coachNat:"🇩🇪 Alemão",formation:"4-2-3-1",grupo:"E",
    titulares:[
      {num:1,pos:"GK",nome:"Neuer",club:"Bayern"},
      {num:2,pos:"RB",nome:"Kimmich",club:"Bayern"},
      {num:21,pos:"CB",nome:"Schlotterbeck",club:"Dortmund"},
      {num:5,pos:"CB",nome:"Tah",club:"Bayer Lev."},
      {num:3,pos:"LB",nome:"Raum",club:"Leipzig"},
      {num:6,pos:"CDM",nome:"Andrich",club:"Bayer Lev."},
      {num:23,pos:"CDM",nome:"Kroos",club:"Real Madrid"},
      {num:13,pos:"RAM",nome:"Sané",club:"Bayern"},
      {num:10,pos:"CAM",nome:"Musiala",club:"Bayern"},
      {num:17,pos:"LAM",nome:"Wirtz",club:"Bayer Lev."},
      {num:9,pos:"ST",nome:"Füllkrug",club:"West Ham"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Trapp",club:"Eintracht"},
      {num:4,pos:"CB",nome:"Rüdiger",club:"Real Madrid"},
      {num:14,pos:"FW",nome:"Havertz",club:"Arsenal"},
      {num:11,pos:"FW",nome:"Gnabry",club:"Bayern"},
    ],
  },
  "Portugal":{
    coach:"Roberto Martínez",coachNat:"🇪🇸 Espanhol",formation:"4-3-3",grupo:"K",
    titulares:[
      {num:1,pos:"GK",nome:"Diogo Costa",club:"Porto"},
      {num:2,pos:"RB",nome:"Cancelo",club:"Barcelona"},
      {num:3,pos:"CB",nome:"Rúben Dias",club:"Man. City"},
      {num:4,pos:"CB",nome:"D. Pereira",club:"Al-Qadsiah"},
      {num:22,pos:"LB",nome:"Nuno Mendes",club:"PSG"},
      {num:8,pos:"CDM",nome:"Palhinha",club:"Bayern"},
      {num:16,pos:"CM",nome:"Vitinha",club:"PSG"},
      {num:20,pos:"CM",nome:"B. Fernandes",club:"Man. United"},
      {num:11,pos:"RW",nome:"B. Silva",club:"Man. City"},
      {num:7,pos:"FW",nome:"Cr. Ronaldo",club:"Al-Nassr"},
      {num:17,pos:"LW",nome:"R. Leão",club:"Milan"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Rui Patrício",club:"Roma"},
      {num:5,pos:"CB",nome:"Pepe",club:"FC Porto"},
      {num:9,pos:"FW",nome:"G. Ramos",club:"PSG"},
    ],
  },
  "Inglaterra":{
    coach:"Gareth Southgate",coachNat:"🇬🇧 Inglês",formation:"4-3-3",grupo:"L",
    titulares:[
      {num:1,pos:"GK",nome:"Pickford",club:"Everton"},
      {num:2,pos:"RB",nome:"Trent A-A",club:"Liverpool"},
      {num:6,pos:"CB",nome:"Maguire",club:"Man. United"},
      {num:5,pos:"CB",nome:"Stones",club:"Man. City"},
      {num:3,pos:"LB",nome:"Luke Shaw",club:"Man. United"},
      {num:4,pos:"CDM",nome:"Rice",club:"Arsenal"},
      {num:8,pos:"CM",nome:"Bellingham",club:"Real Madrid"},
      {num:22,pos:"CM",nome:"Gallagher",club:"Chelsea"},
      {num:11,pos:"RW",nome:"Foden",club:"Man. City"},
      {num:9,pos:"ST",nome:"Kane",club:"Bayern"},
      {num:20,pos:"LW",nome:"Saka",club:"Arsenal"},
    ],
    reservas:[
      {num:13,pos:"GK",nome:"Ramsdale",club:"Southampton"},
      {num:12,pos:"RB",nome:"Trippier",club:"Newcastle"},
      {num:7,pos:"FW",nome:"Sterling",club:"Chelsea"},
      {num:23,pos:"FW",nome:"Grealish",club:"Man. City"},
    ],
  },
};

// ═══ FORMAÇÕES ═══
const formationPositions={
  "4-3-3":[[50,90],[15,72],[37,72],[63,72],[85,72],[25,52],[50,52],[75,52],[20,22],[50,15],[80,22]],
  "4-2-3-1":[[50,90],[15,72],[37,72],[63,72],[85,72],[35,55],[65,55],[18,35],[50,35],[82,35],[50,16]],
  "4-4-2":[[50,90],[15,72],[37,72],[63,72],[85,72],[15,50],[37,50],[63,50],[85,50],[33,18],[67,18]],
};

// ═══ JOGADORES (artilheiros) ═══
const getJogadores=()=>JSON.parse(localStorage.getItem("copa_jogadores")||JSON.stringify([
  {nome:"Vinicius Jr.",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Erling Haaland",selecao:"Noruega",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Kylian Mbappé",selecao:"França",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Harry Kane",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Lionel Messi",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Cristiano Ronaldo",selecao:"Portugal",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Lamine Yamal",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Jude Bellingham",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Florian Wirtz",selecao:"Alemanha",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Raphinha",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Alisson",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"E. Martínez",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Julian Alvarez",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Cody Gakpo",selecao:"Holanda",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
  {nome:"Darwin Núñez",selecao:"Uruguai",gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0},
]));

// ═══ JOGOS ═══
const getJogos=()=>{
  const saved=localStorage.getItem("copa_scores");
  const scores=saved?JSON.parse(saved):{};
  return BASE_JOGOS.map((j,i)=>({...j,...(scores[i]||{}),_idx:i}));
};

const BASE_JOGOS=[
  {data:"2026-06-11 16:00",fase:"Fase de Grupos",grupo:"A",casa:"México",fora:"África do Sul",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-11 22:00",fase:"Fase de Grupos",grupo:"B",casa:"Canadá",fora:"Bósnia e Herzegovina",golsCasa:null,golsFora:null,estadio:"BMO Field, Toronto"},
  {data:"2026-06-12 16:00",fase:"Fase de Grupos",grupo:"D",casa:"Estados Unidos",fora:"Paraguai",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-06-12 19:00",fase:"Fase de Grupos",grupo:"A",casa:"Coreia do Sul",fora:"República Tcheca",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-06-13 16:00",fase:"Fase de Grupos",grupo:"B",casa:"Catar",fora:"Suíça",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  {data:"2026-06-13 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Brasil",fora:"Marrocos",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-13 22:00",fase:"Fase de Grupos",grupo:"C",casa:"Haiti",fora:"Escócia",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  {data:"2026-06-14 01:00",fase:"Fase de Grupos",grupo:"D",casa:"Austrália",fora:"Turquia",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},
  {data:"2026-06-14 14:00",fase:"Fase de Grupos",grupo:"E",casa:"Alemanha",fora:"Curaçao",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-14 17:00",fase:"Fase de Grupos",grupo:"F",casa:"Holanda",fora:"Japão",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-14 20:00",fase:"Fase de Grupos",grupo:"E",casa:"Costa do Marfim",fora:"Equador",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-06-14 23:00",fase:"Fase de Grupos",grupo:"F",casa:"Suécia",fora:"Tunísia",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-15 13:00",fase:"Fase de Grupos",grupo:"H",casa:"Espanha",fora:"Arábia Saudita",golsCasa:null,golsFora:null,estadio:"Estádio Akron, Guadalajara"},
  {data:"2026-06-15 16:00",fase:"Fase de Grupos",grupo:"G",casa:"Bélgica",fora:"Irã",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-06-15 19:00",fase:"Fase de Grupos",grupo:"H",casa:"Uruguai",fora:"Cabo Verde",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-06-15 23:00",fase:"Fase de Grupos",grupo:"G",casa:"Nova Zelândia",fora:"Egito",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-06-16 14:00",fase:"Fase de Grupos",grupo:"J",casa:"Argentina",fora:"Áustria",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-16 18:00",fase:"Fase de Grupos",grupo:"I",casa:"França",fora:"Iraque",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-16 21:00",fase:"Fase de Grupos",grupo:"I",casa:"Noruega",fora:"Senegal",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-06-17 14:00",fase:"Fase de Grupos",grupo:"K",casa:"Portugal",fora:"Uzbequistão",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-17 17:00",fase:"Fase de Grupos",grupo:"L",casa:"Inglaterra",fora:"Gana",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-19 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Marrocos",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-06-19 22:00",fase:"Fase de Grupos",grupo:"C",casa:"Brasil",fora:"Haiti",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  {data:"2026-06-24 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Brasil",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-07-01 17:00",fase:"16 avos de Final",casa:"1º Grupo A",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-10 17:00",fase:"Oitavas de Final",casa:"Vencedor J1",fora:"Vencedor J2",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-14 19:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-15 19:00",fase:"Semifinal",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-07-18 17:00",fase:"Terceiro Lugar",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-07-19 16:00",fase:"Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
];

// ═══ ESTÁDIOS ═══
const estadiosData=[
  {nome:"Estádio Azteca",cidade:"Cidade do México",pais:"México",capacidade:"87.523",jogos:5,gramado:"Natural (Bermuda)",inaugurado:"1966",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/EstadioAzteca.jpg/800px-EstadioAzteca.jpg",fato:"Único estádio a sediar a abertura da Copa 3 vezes (1970, 1986 e 2026). Palco do 'Gol do Século' de Maradona.",destaque:"🎤 Abertura da Copa"},
  {nome:"MetLife Stadium",cidade:"East Rutherford, NJ",pais:"EUA",capacidade:"82.500",jogos:6,gramado:"FieldTurf (sintético)",inaugurado:"2010",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/MetLife_Stadium_Sep_13_2018.jpg/800px-MetLife_Stadium_Sep_13_2018.jpg",fato:"Final em 19/07. Estreia do Brasil vs Marrocos (13/06). A poucos km de Manhattan.",destaque:"🏆 Final da Copa"},
  {nome:"AT&T Stadium",cidade:"Arlington, Texas",pais:"EUA",capacidade:"92.100",jogos:9,gramado:"Natural (Bermuda Latitude 36)",inaugurado:"2009",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cowboys_Stadium_Sep_2009.jpg/800px-Cowboys_Stadium_Sep_2009.jpg",fato:"Maior estádio da Copa. Teto retrátil e telão de 2.300 m². 9 partidas — recorde.",destaque:"📺 Maior telão do mundo"},
  {nome:"SoFi Stadium",cidade:"Inglewood, Califórnia",pais:"EUA",capacidade:"70.240",jogos:7,gramado:"Natural",inaugurado:"2020",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SoFi_Stadium_2020.jpg/800px-SoFi_Stadium_2020.jpg",fato:"Arena mais moderna da Copa. Telão oval de 6.500 m².",destaque:"✨ Arena mais moderna"},
  {nome:"Mercedes-Benz Stadium",cidade:"Atlanta, Geórgia",pais:"EUA",capacidade:"71.000",jogos:8,gramado:"Natural",inaugurado:"2017",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mercedes-Benz_Stadium_interior_panoramic.jpg/800px-Mercedes-Benz_Stadium_interior_panoramic.jpg",fato:"Sedia uma das semifinais. Teto retrátil em pétalas. Certificação LEED Platina.",destaque:"🌿 LEED Platinum"},
  {nome:"Hard Rock Stadium",cidade:"Miami, Flórida",pais:"EUA",capacidade:"65.326",jogos:6,gramado:"Natural",inaugurado:"1987",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hard_Rock_Stadium_Aerial_2018.jpg/800px-Hard_Rock_Stadium_Aerial_2018.jpg",fato:"Disputa pelo 3º lugar. Jogos do Brasil. Final da Copa América 2024.",destaque:"🥉 Disputa pelo 3º Lugar"},
  {nome:"BC Place",cidade:"Vancouver, Canadá",pais:"Canadá",capacidade:"54.500",jogos:7,gramado:"FieldTurf",inaugurado:"1983",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/BCPlace-1.jpg/800px-BCPlace-1.jpg",fato:"Maior teto pneumático retrátil do mundo. Olimpíadas de Inverno 2010.",destaque:"🍁 Copa Feminina 2015"},
  {nome:"Estádio BBVA",cidade:"Monterrey, México",pais:"México",capacidade:"53.500",jogos:4,gramado:"Natural híbrido",inaugurado:"2015",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/BBVA_Bancomer_Stadium_%282%29.jpg/800px-BBVA_Bancomer_Stadium_%282%29.jpg",fato:"'El Gigante de Aço'. Mais sustentável das Américas. Serra Madre ao fundo.",destaque:"🏔️ Gigante de Aço"},
];
const fatosCopa=[
  {num:"48",label:"Seleções",desc:"Maior número de times na história",cor:"var(--green)"},
  {num:"104",label:"Partidas",desc:"40 a mais que Qatar 2022",cor:"var(--gold)"},
  {num:"3",label:"Países-sede",desc:"Inédito na história da Copa",cor:"var(--accent)"},
  {num:"8",label:"Jogos até o título",desc:"Um a mais que edições anteriores",cor:"var(--purple)"},
];

// ═══════ FAVORITES ═══════
const getFavorites=()=>JSON.parse(localStorage.getItem("copa_favorites")||'{"games":[],"teams":[]}');
const saveFavorites=f=>localStorage.setItem("copa_favorites",JSON.stringify(f));
function toggleFavGame(idx){const f=getFavorites();const i=f.games.indexOf(idx);if(i>-1)f.games.splice(i,1);else f.games.push(idx);saveFavorites(f);renderFavoritos();renderJogos();}
function toggleFavTeam(team){const f=getFavorites();const i=f.teams.indexOf(team);if(i>-1)f.teams.splice(i,1);else f.teams.push(team);saveFavorites(f);renderFavoritos();renderSelecoes();}
function isFavGame(idx){return getFavorites().games.includes(idx);}
function isFavTeam(t){return getFavorites().teams.includes(t);}

// ═══════ UTILS ═══════
function flag(t,s=24){const c=isoCodes[t];if(!c)return`<span style="font-size:${s}px;line-height:1">🏳️</span>`;return`<img src="https://flagcdn.com/w40/${c}.png" alt="${t}" class="flag-img" style="width:${s}px;height:${Math.round(s*.67)}px;object-fit:cover;border-radius:3px">`;}
function jogoTemPlacar(j){return Number.isFinite(j.golsCasa)&&Number.isFinite(j.golsFora);}
function formatarData(t){const d=new Date(t.replace(" ","T"));return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(d);}
function formatarDia(t){const d=new Date(t.split(" ")[0]+"T12:00:00");return{dia:d.getDate().toString().padStart(2,"0"),mes:d.toLocaleString("pt-BR",{month:"short"}).replace(".","").toUpperCase()};}
function phaseBadgeClass(f){if(f==="Fase de Grupos")return"grupos";if(f.includes("16 avos"))return"avos";if(f.includes("Oitavas"))return"oitavas";if(f.includes("Quartas"))return"quartas";if(f.includes("Semi"))return"semi";if(f==="Final"||f.includes("Terceiro"))return"final";return"";}
function calcularClassificacaoGrupo(g){
  const ts=grupos[g]||[];const tab={};
  ts.forEach(t=>{tab[t]={time:t,jogos:0,vitorias:0,empates:0,derrotas:0,golsPro:0,golsContra:0,saldo:0,pontos:0};});
  getJogos().filter(j=>j.fase==="Fase de Grupos"&&j.grupo===g).forEach(j=>{
    if(!jogoTemPlacar(j))return;
    const ca=tab[j.casa],fo=tab[j.fora];if(!ca||!fo)return;
    ca.jogos++;fo.jogos++;ca.golsPro+=j.golsCasa;ca.golsContra+=j.golsFora;fo.golsPro+=j.golsFora;fo.golsContra+=j.golsCasa;
    if(j.golsCasa>j.golsFora){ca.vitorias++;ca.pontos+=3;fo.derrotas++;}else if(j.golsCasa<j.golsFora){fo.vitorias++;fo.pontos+=3;ca.derrotas++;}else{ca.empates++;fo.empates++;ca.pontos++;fo.pontos++;}
  });
  return Object.values(tab).map(l=>({...l,saldo:l.golsPro-l.golsContra})).sort((a,b)=>b.pontos-a.pontos||b.saldo-a.saldo||b.golsPro-a.golsPro);
}

// ═══════ COUNTDOWN ═══════
function updateCountdown(){
  const copaStart=new Date("2026-06-11T19:00:00-03:00");// 16h BRT = 19h UTC
  const now=new Date();const diff=copaStart-now;
  if(diff<=0){
    document.getElementById("cd-label").textContent="A COPA ESTÁ ACONTECENDO! 🏆";
    document.getElementById("countdown").innerHTML=`<div class="cd-unit"><span class="cd-num" style="color:var(--green)">⚽</span><span class="cd-text">Em campo!</span></div>`;
    return;
  }
  const days=Math.floor(diff/(1000*60*60*24));
  const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const mins=Math.floor((diff%(1000*60*60))/(1000*60));
  const secs=Math.floor((diff%(1000*60))/1000);
  document.getElementById("cd-days").textContent=String(days).padStart(2,"0");
  document.getElementById("cd-hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("cd-mins").textContent=String(mins).padStart(2,"0");
  document.getElementById("cd-secs").textContent=String(secs).padStart(2,"0");
}

// ═══════ PARTICLES ═══════
function spawnParticles(){
  const c=document.getElementById("hero-particles");if(!c)return;
  for(let i=0;i<20;i++){
    const p=document.createElement("div");p.className="particle";
    const sz=Math.random()*6+2;
    const colors=["#f5c842","#00d166","#3b7fff","#ffffff"];
    p.style.cssText=`width:${sz}px;height:${sz}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}%;animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*10}s;`;
    c.appendChild(p);
  }
}

// ═══════ THEME ═══════
function initTheme(){
  const saved=localStorage.getItem("copa_theme")||"dark";
  document.documentElement.setAttribute("data-theme",saved);
  document.getElementById("theme-toggle").textContent=saved==="dark"?"🌙":"☀️";
}
function toggleTheme(){
  const curr=document.documentElement.getAttribute("data-theme");
  const next=curr==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  localStorage.setItem("copa_theme",next);
  document.getElementById("theme-toggle").textContent=next==="dark"?"🌙":"☀️";
}

// ═══════ HOJE TAB ═══════
function renderHoje(){
  const hoje=new Date();const ds=hoje.toISOString().split("T")[0];
  document.getElementById("hoje-date").textContent=hoje.toLocaleDateString("pt-BR",{weekday:"long",year:"numeric",month:"long",day:"numeric"});
  const jogosHoje=getJogos().filter(j=>j.data.startsWith(ds));
  const hojeContent=document.getElementById("hoje-content");
  if(jogosHoje.length===0){
    hojeContent.innerHTML=`<div class="hoje-empty"><div class="hoje-empty-icon">⚽</div><div class="hoje-empty-title">Nenhum jogo hoje</div><div class="hoje-empty-sub">A Copa começa em <strong>11 de junho de 2026</strong>. Confira os próximos jogos abaixo ou a aba de Timeline.</div></div>`;
    document.getElementById("alert-count").textContent="0";
  }else{
    document.getElementById("alert-count").textContent=jogosHoje.length;
    hojeContent.innerHTML=`<div class="hoje-jogos">${jogosHoje.map(j=>buildMatchCard(j,true)).join("")}</div>`;
    attachMatchFavListeners();
  }
  // PRÓXIMOS
  const proximos=getJogos().filter(j=>{const d=new Date(j.data.replace(" ","T"));return d>hoje&&!jogoTemPlacar(j);}).slice(0,8);
  document.getElementById("proximos-content").innerHTML=proximos.map(j=>{
    const{dia,mes}=formatarDia(j.data);const hora=j.data.split(" ")[1];
    return`<div class="prox-card">
      <div class="prox-date-badge"><div class="prox-day-num">${dia}</div><div class="prox-mon">${mes}</div></div>
      <div class="prox-teams">${flag(j.casa,18)} ${j.casa} <span style="color:var(--muted)">vs</span> ${flag(j.fora,18)} ${j.fora}</div>
      <div class="prox-time">🕐 ${hora}</div>
      <span class="prox-phase">${j.fase}${j.grupo?" · G"+j.grupo:""}</span>
    </div>`;
  }).join("")||`<div style="color:var(--muted);font-size:.9rem;text-align:center;padding:2rem">Os próximos jogos aparecerão aqui conforme a Copa avança.</div>`;
}

// ═══════ GRUPOS ═══════
function renderGrupos(){
  const grid=document.getElementById("groups-grid");
  grid.innerHTML=Object.keys(grupos).map(g=>{
    const cl=calcularClassificacaoGrupo(g);
    return`<div class="group-card" data-grupo="${g}"><div class="group-header"><span class="group-label">Grupo ${g}</span><span class="group-expand">Ver tabela →</span></div>
    <div class="group-teams">${cl.map(l=>`<div class="team-row"><span class="team-flag">${flag(l.time,26)}</span><span class="team-name-card">${l.time}</span><span class="team-pts">${l.pontos}</span></div>`).join("")}</div></div>`;
  }).join("");
  grid.querySelectorAll(".group-card").forEach(c=>c.addEventListener("click",()=>abrirModalGrupo(c.dataset.grupo)));
}

function abrirModalGrupo(g){
  const overlay=document.getElementById("modal-overlay"),content=document.getElementById("modal-content");
  const cl=calcularClassificacaoGrupo(g);
  const jg=getJogos().filter(j=>j.fase==="Fase de Grupos"&&j.grupo===g);
  content.innerHTML=`<div class="modal-title">⚽ Grupo ${g}</div>
    <table><thead><tr><th>#</th><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th></tr></thead>
    <tbody>${cl.map((l,i)=>`<tr><td>${i+1}</td><td style="display:flex;align-items:center;gap:.4rem">${flag(l.time,18)} ${l.time}</td><td>${l.jogos}</td><td>${l.vitorias}</td><td>${l.empates}</td><td>${l.derrotas}</td><td>${l.golsPro}</td><td>${l.golsContra}</td><td>${l.saldo>=0?"+":""}${l.saldo}</td><td class="pts-cell">${l.pontos}</td></tr>`).join("")}</tbody></table>
    <div class="modal-jogos"><h4>Jogos do grupo</h4>${jg.map(j=>{const sc=jogoTemPlacar(j)?`${j.golsCasa}–${j.golsFora}`:null;return`<div class="modal-match"><div style="display:flex;align-items:center;gap:.4rem;font-size:.85rem;font-weight:600">${flag(j.casa,16)} ${j.casa} <span style="color:var(--muted)">vs</span> ${flag(j.fora,16)} ${j.fora}</div><span class="match-score-badge ${sc?"":"pending"}">${sc||formatarData(j.data)}</span></div>`;}).join("")}</div>`;
  overlay.classList.add("open");
}

// ═══════ SELEÇÕES ═══════
let selGroupFilter="Todas",newsAbortController=null;
function renderSelecoes(){
  const pills=document.getElementById("sel-group-pills");
  const all=["Todas",...Object.keys(grupos)];
  pills.innerHTML=all.map(g=>`<button class="sel-pill ${g===selGroupFilter?"active":""}" data-g="${g}">Gp ${g==="Todas"?"Todos":g}</button>`).join("");
  pills.querySelectorAll(".sel-pill").forEach(p=>p.addEventListener("click",()=>{selGroupFilter=p.dataset.g;renderSelecoes();}));
  const search=document.getElementById("sel-search").value.trim().toLowerCase();
  const all2=Object.entries(grupos).flatMap(([g,ts])=>ts.map(t=>({name:t,grupo:g})));
  const filtered=all2.filter(t=>(selGroupFilter==="Todas"||t.grupo===selGroupFilter)&&(!search||t.name.toLowerCase().includes(search)));
  const grid=document.getElementById("sel-grid");
  grid.innerHTML=filtered.map(t=>{
    const c=getColors(t.name);const fav=isFavTeam(t.name);const hasData=!!teamData[t.name];
    return`<div class="sel-card" data-team="${t.name}" style="border-top:3px solid ${c.primary}">
      <button class="sel-fav-btn ${fav?"active":""}" onclick="event.stopPropagation();toggleFavTeam('${t.name}')">⭐</button>
      <img src="https://flagcdn.com/w80/${isoCodes[t.name]||"un"}.png" alt="${t.name}" style="width:64px;height:43px;border-radius:6px;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,.4)">
      <div class="sel-card-name">${t.name}</div>
      <div class="sel-card-group">Grupo ${t.grupo}</div>
      ${hasData?`<span class="sel-card-badge" style="color:${c.primary};border-color:${c.primary}33;background:${c.primary}18">Ver detalhe →</span>`:`<span class="sel-card-badge">Em breve</span>`}
    </div>`;
  }).join("");
  grid.querySelectorAll(".sel-card").forEach(c=>c.addEventListener("click",()=>{if(teamData[c.dataset.team])abrirDetalheSelecao(c.dataset.team);}));
}

function renderPitch(formation,titulares,colors){
  const pos=(formationPositions[formation]||formationPositions["4-3-3"]);
  return`<div class="pitch">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none">
      <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
      <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,.18)" stroke-width=".7"/>
      <circle cx="50" cy="50" r="11" fill="none" stroke="rgba(255,255,255,.18)" stroke-width=".7"/>
      <rect x="23" y="82" width="54" height="16" fill="none" stroke="rgba(255,255,255,.18)" stroke-width=".7"/>
      <rect x="36" y="90" width="28" height="8" fill="none" stroke="rgba(255,255,255,.18)" stroke-width=".7"/>
      <rect x="23" y="2" width="54" height="16" fill="none" stroke="rgba(255,255,255,.18)" stroke-width=".7"/>
      <circle cx="50" cy="50" r=".8" fill="rgba(255,255,255,.35)"/>
      <circle cx="50" cy="89" r=".8" fill="rgba(255,255,255,.25)"/>
    </svg>
    <div class="pitch-label" style="top:3%">ATAQUE</div>
    <div class="pitch-label" style="bottom:3%">DEFESA</div>
    ${titulares.map((p,i)=>{if(!pos[i])return"";const[l,t]=pos[i];return`<div class="player-node" style="left:${l}%;top:${t}%"><div class="player-shirt" style="background:${colors.primary};color:${colors.text||"#fff"}">${p.num}</div><div class="player-name-tag">${p.nome}</div></div>`;}).join("")}
  </div>`;
}

async function abrirDetalheSelecao(teamName){
  document.getElementById("selecoes-list-view").classList.add("hidden");
  const detail=document.getElementById("selecao-detail");detail.classList.remove("hidden");
  const data=teamData[teamName];const colors=getColors(teamName);const isoCode=isoCodes[teamName]||"un";
  const hist=teamHistory[teamName];
  const grupo=Object.entries(grupos).find(([,ts])=>ts.includes(teamName))?.[0]||"?";
  const pitchHTML=renderPitch(data.formation,data.titulares,colors);
  const benchHTML=(data.reservas||[]).map(p=>`<div class="bench-player"><div class="bench-shirt" style="background:${colors.primary};color:${colors.text||"#fff"}">${p.num}</div><div class="bench-info"><div class="bench-name">${p.nome}</div><div class="bench-club">${p.club}</div></div><span class="bench-pos">${p.pos}</span></div>`).join("");
  const histHTML=hist?`<div class="hist-section"><div class="hist-title">📜 Histórico em Copas</div><div class="hist-list">${hist.historia.map(h=>`<div class="hist-row"><span class="hist-year">${h.ano}</span><span class="hist-result">${h.result}</span><span class="hist-badge badge-${h.badge}">${h.fase}</span></div>`).join("")}</div></div>`:"";
  document.getElementById("sel-detail-content").innerHTML=`
    <div class="team-detail-header">
      <div class="tdh-bg" style="background:${colors.gradient};color:${colors.text||"#fff"}">
        <div class="tdh-pattern" style="color:${colors.text||"#fff"}"></div>
        <div class="tdh-top">
          <img src="https://flagcdn.com/w160/${isoCode}.png" alt="${teamName}" style="width:100px;height:67px;border-radius:10px;object-fit:cover;box-shadow:0 4px 20px rgba(0,0,0,.5);flex-shrink:0">
          <div><div class="tdh-name">${teamName}</div><div class="tdh-meta">${hist?.titulo||""} ${hist?.ranking?`· FIFA #${hist.ranking}`:""}</div>
          <div class="tdh-chips"><span class="tdh-chip">Grupo ${grupo}</span><span class="tdh-chip">${data.formation}</span>${hist?.ranking<=10?`<span class="tdh-chip" style="background:rgba(245,200,66,.2);border-color:rgba(245,200,66,.4)">⭐ Top 10</span>`:""}</div></div>
        </div>
      </div>
    </div>
    <div class="coach-card"><div class="coach-icon" style="border-color:${colors.primary}44">🧑‍💼</div><div><div class="coach-label">Técnico</div><div class="coach-name">${data.coach}</div><div class="coach-detail">${data.coachNat||""}</div></div></div>
    <div class="detail-grid" style="margin-top:1rem">
      <div><div class="pitch-wrap"><div class="pitch-title">⚽ Provável Escalação — ${data.formation}</div>${pitchHTML}</div></div>
      <div><div class="bench-section"><div class="bench-title">🪑 Reservas</div><div class="bench-list">${benchHTML}</div></div></div>
    </div>
    ${histHTML}
    <div class="news-section"><div class="news-header-row"><div class="news-title">📰 Notícias — ${teamName}</div><button class="news-refresh" id="news-refresh-btn" onclick="fetchNews('${teamName}')">🔄 Atualizar</button></div><div class="news-body" id="news-body"><div class="news-loading"><div class="spinner"></div><span>Buscando...</span></div></div></div>`;
  fetchNews(teamName);
}

async function fetchNews(teamName){
  const body=document.getElementById("news-body"),btn=document.getElementById("news-refresh-btn");
  if(!body)return;
  if(newsAbortController)newsAbortController.abort();
  newsAbortController=new AbortController();
  body.innerHTML=`<div class="news-loading"><div class="spinner"></div><span>Buscando notícias de ${teamName}...</span></div>`;
  if(btn){btn.disabled=true;btn.textContent="⏳";}
  try{
    const apiKey=ANTHROPIC_API_KEY||window.ANTHROPIC_API_KEY||"";
    if(!apiKey){showStaticNews(teamName,body);return;}
    const resp=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01"},signal:newsAbortController.signal,body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:`4 notícias mais recentes sobre ${teamName} na Copa do Mundo 2026. Responda SOMENTE em JSON válido: {"noticias":[{"titulo":"...","resumo":"...","tag":"..."}]}`}]})});
    const json=await resp.json();
    const txt=json.content?.filter(b=>b.type==="text").map(b=>b.text).join("")||"";
    const data=JSON.parse(txt.replace(/```json|```/g,"").trim());
    if(data.noticias?.length){body.innerHTML=data.noticias.map(n=>`<div class="news-item"><div class="news-item-title">${n.titulo}</div><div class="news-item-body">${n.resumo}</div><span class="news-item-tag">${n.tag}</span></div>`).join("");}
    else showStaticNews(teamName,body);
  }catch(e){if(e.name!=="AbortError")showStaticNews(teamName,body);}
  finally{if(btn){btn.disabled=false;btn.textContent="🔄 Atualizar";}}
}

function showStaticNews(teamName,body){
  const newsMap={"Brasil":[{t:"Ancelotti fecha lista com 24 dos 26 convocados",r:"Restam apenas 2 vagas disputadas por Endrick, Igor Thiago e Paquetá para a convocação de 18 de maio.",tag:"Convocação"},{t:"Brasil estreia vs Marrocos no MetLife, 13/06 às 19h BRT",r:"O Grupo C conta ainda com Haiti e Escócia. Próximo jogo: Haiti em 19/06 no Lincoln Financial Field.",tag:"Copa 2026"},{t:"Vinicius Jr. e Raphinha são titulares confirmados",r:"A dupla liderou amistosos de março contra França (1-0) e Croácia (3-1).",tag:"Preparação"},{t:"Alisson tem lesão tratada; Ederson e Bento como reservas",r:"CBF confirmou recuperação a tempo da convocação oficial em maio.",tag:"Lesão"}],"Argentina":[{t:"Argentina busca inédito tricampeonato mundial",r:"Scaloni mantém base campeã com Messi, E. Martínez, Mac Allister e Julián Álvarez.",tag:"Copa 2026"},{t:"Messi: 'Esta é provavelmente minha última Copa'",r:"Aos 38 anos, o craque do Inter Miami admitiu que 2026 será sua despedida do Mundial.",tag:"Declaração"},{t:"Argentina no Grupo J com Argélia, Áustria e Jordânia",r:"Grupo considerado acessível; estreia na data a confirmar.",tag:"Copa 2026"},{t:"E. Martínez entre os favoritos ao prêmio de melhor goleiro",r:"Dibu esteve impecável nos amistosos preparatórios.",tag:"Preparação"}]};
  const news=newsMap[teamName]||[{t:`${teamName} na Copa do Mundo 2026`,r:`A seleção de ${teamName} está confirmada no torneio que começa em 11/06 em EUA, México e Canadá.`,tag:"Copa 2026"},{t:"Copa 2026: maior torneio da história",r:"48 seleções, 104 jogos, 3 países e 39 dias de competição.",tag:"Copa 2026"},{t:"Trionda: bola oficial do torneio",r:"Adidas apresentou a Trionda Pro com chip IMU 500Hz integrado ao VAR.",tag:"Copa 2026"},{t:"Sorteio realizado em dezembro no Kennedy Center",r:"Grupos definidos em Washington D.C. com 48 seleções.",tag:"Copa 2026"}];
  body.innerHTML=news.map(n=>`<div class="news-item"><div class="news-item-title">${n.t}</div><div class="news-item-body">${n.r}</div><span class="news-item-tag">${n.tag}</span></div>`).join("")+`<p style="font-size:.73rem;color:var(--muted);padding:.75rem 0;text-align:center">💡 Configure ANTHROPIC_API_KEY em script.js para notícias ao vivo</p>`;
}

// ═══════ JOGOS ═══════
function buildMatchCard(j,big=false){
  const{dia,mes}=formatarDia(j.data);const hora=j.data.split(" ")[1];
  const temPlacar=jogoTemPlacar(j);const placar=temPlacar?`<span class="score-inline">${j.golsCasa}–${j.golsFora}</span>`:"";
  const phaseClass=phaseBadgeClass(j.fase);const grupo=j.grupo?` · G${j.grupo}`:"";const fav=isFavGame(j._idx);
  return`<li class="match-item" style="${big?"border-left:3px solid var(--gold)":""}">
    <button class="match-fav-btn ${fav?"active":""}" onclick="toggleFavGame(${j._idx})">⭐</button>
    <div class="match-date-block"><div class="match-day">${dia}</div><div class="match-mon">${mes}</div></div>
    <div class="match-center">
      <div class="match-teams-row">${flag(j.casa,20)} ${j.casa} ${placar||'<span style="color:var(--muted);font-size:.82rem">vs</span>'} ${flag(j.fora,20)} ${j.fora}</div>
      <div class="match-info">🕐 ${hora} (BRT) · 📍 ${j.estadio||"A definir"}</div>
    </div>
    <div class="match-right">
      <span class="phase-badge ${phaseClass}">${j.fase}${grupo}</span>
      <span class="status-dot ${temPlacar?"done":""}"></span>
      <button class="edit-score-btn" onclick="abrirEditarPlacar(${j._idx})">${temPlacar?"✏️ Editar":"+ Placar"}</button>
    </div>
  </li>`;
}

function attachMatchFavListeners(){}

function renderJogos(){
  const fase=document.getElementById("fase-select").value;
  const termo=document.getElementById("search-time").value.trim().toLowerCase();
  const filtrados=getJogos().filter(j=>(fase==="Todas"||j.fase===fase)&&(!termo||j.casa.toLowerCase().includes(termo)||j.fora.toLowerCase().includes(termo)));
  const list=document.getElementById("matches-list");
  if(!filtrados.length){list.innerHTML='<li style="color:var(--muted);padding:1.5rem;text-align:center">Nenhum jogo encontrado.</li>';return;}
  list.innerHTML=filtrados.map(j=>buildMatchCard(j)).join("");
}

// ═══════ PLACAR INLINE ═══════
function abrirEditarPlacar(idx){
  const jogo=getJogos()[idx];
  const overlay=document.getElementById("score-modal-overlay");
  document.getElementById("score-modal-body").innerHTML=`
    <div class="modal-title">✏️ Placar</div>
    <div style="display:flex;align-items:center;gap:1rem;justify-content:center;margin:1.25rem 0;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:.5rem">${flag(jogo.casa,28)}<span style="font-size:1rem;font-weight:700">${jogo.casa}</span></div>
      <input id="sc-casa" type="number" min="0" max="20" value="${jogo.golsCasa??""}" placeholder="0" style="width:60px;text-align:center;font-family:'Bebas Neue';font-size:1.8rem;background:var(--panel2);border:1px solid var(--border);border-radius:8px;color:var(--gold);padding:.4rem">
      <span style="font-family:'Bebas Neue';font-size:1.5rem;color:var(--muted)">×</span>
      <input id="sc-fora" type="number" min="0" max="20" value="${jogo.golsFora??""}" placeholder="0" style="width:60px;text-align:center;font-family:'Bebas Neue';font-size:1.8rem;background:var(--panel2);border:1px solid var(--border);border-radius:8px;color:var(--gold);padding:.4rem">
      <div style="display:flex;align-items:center;gap:.5rem">${flag(jogo.fora,28)}<span style="font-size:1rem;font-weight:700">${jogo.fora}</span></div>
    </div>
    <div style="display:flex;gap:.75rem;justify-content:center">
      <button onclick="salvarPlacar(${idx})" style="background:var(--green);border:none;color:#fff;padding:.6rem 1.5rem;border-radius:10px;cursor:pointer;font-weight:700;font-size:.9rem">💾 Salvar</button>
      <button onclick="limparPlacar(${idx})" style="background:var(--panel2);border:1px solid var(--border);color:var(--muted);padding:.6rem 1rem;border-radius:10px;cursor:pointer;font-size:.88rem">🗑 Limpar</button>
    </div>`;
  overlay.classList.add("open");
}

function salvarPlacar(idx){
  const gc=parseInt(document.getElementById("sc-casa").value);const gf=parseInt(document.getElementById("sc-fora").value);
  if(isNaN(gc)||isNaN(gf))return;
  const scores=JSON.parse(localStorage.getItem("copa_scores")||"{}");
  scores[idx]={golsCasa:gc,golsFora:gf};
  localStorage.setItem("copa_scores",JSON.stringify(scores));
  document.getElementById("score-modal-overlay").classList.remove("open");
  renderJogos();renderGrupos();renderHoje();
}

function limparPlacar(idx){
  const scores=JSON.parse(localStorage.getItem("copa_scores")||"{}");
  delete scores[idx];
  localStorage.setItem("copa_scores",JSON.stringify(scores));
  document.getElementById("score-modal-overlay").classList.remove("open");
  renderJogos();renderGrupos();renderHoje();
}

// ═══════ TIMELINE ═══════
function renderTimeline(){
  const fases=[
    {nome:"Fase de Grupos",icon:"🏟️",datas:"11 Jun – 29 Jun",cor:"var(--accent)",filter:j=>j.fase==="Fase de Grupos"},
    {nome:"16 avos de Final",icon:"⚡",datas:"1 Jul – 8 Jul",cor:"var(--green)",filter:j=>j.fase.includes("16 avos")},
    {nome:"Oitavas de Final",icon:"🎯",datas:"10 Jul – 13 Jul",cor:"var(--green)",filter:j=>j.fase.includes("Oitavas")},
    {nome:"Quartas de Final",icon:"🔥",datas:"14 Jul – 15 Jul",cor:"var(--gold)",filter:j=>j.fase.includes("Quartas")},
    {nome:"Semifinais",icon:"⭐",datas:"15 Jul – 16 Jul",cor:"var(--purple)",filter:j=>j.fase.includes("Semi")},
    {nome:"Final",icon:"🏆",datas:"19 Jul",cor:"var(--red)",filter:j=>j.fase==="Final"||j.fase.includes("Terceiro")},
  ];
  const keyDates=[
    {icon:"📋",date:"18 Mai 2026",label:"Convocação do Brasil",sub:"Ancelotti anuncia os 26"},
    {icon:"🎉",date:"11 Jun 2026",label:"Abertura da Copa",sub:"México × África do Sul no Azteca (16h BRT)"},
    {icon:"🇧🇷",date:"13 Jun 2026",label:"Estreia do Brasil",sub:"Brasil × Marrocos – 19h BRT – MetLife Stadium"},
    {icon:"🏆",date:"19 Jul 2026",label:"Grande Final",sub:"MetLife Stadium, Nova Jersey (16h BRT)"},
  ];
  const jgs=getJogos();
  let html=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem;margin-bottom:1.5rem">${keyDates.map(kd=>`<div class="tl-keydate"><div class="tl-kd-icon">${kd.icon}</div><div><div class="tl-kd-date">${kd.date}</div><div class="tl-kd-label">${kd.label}</div><div class="tl-kd-sub">${kd.sub}</div></div></div>`).join("")}</div>
  <div class="timeline-phases">`;
  fases.forEach((fase,fi)=>{
    const gamesInPhase=jgs.filter(fase.filter);
    html+=`<div class="tl-phase">
      <div class="tl-phase-header" id="tl-ph-${fi}" onclick="toggleTlPhase(${fi})">
        <span class="tl-phase-icon">${fase.icon}</span>
        <div class="tl-phase-info"><div class="tl-phase-name" style="color:${fase.cor}">${fase.nome}</div><div class="tl-phase-dates">${fase.datas}</div></div>
        <span class="tl-phase-count">${gamesInPhase.length} jogos</span>
        <span class="tl-phase-chevron">▼</span>
      </div>
      <div class="tl-games" id="tl-games-${fi}">
        ${gamesInPhase.map(j=>{const temPlacar=jogoTemPlacar(j);const fav=isFavGame(j._idx);
          return`<div class="tl-game-row">
            <div class="tl-game-date">${formatarData(j.data)}</div>
            <div class="tl-game-teams">${flag(j.casa,16)} ${j.casa} <span style="color:var(--muted)">vs</span> ${flag(j.fora,16)} ${j.fora}</div>
            <div class="tl-game-score" style="color:${temPlacar?"var(--green)":"var(--muted)"}">${temPlacar?`${j.golsCasa}–${j.golsFora}`:"– –"}</div>
            <div class="tl-game-stadium">${(j.estadio||"").split(",")[0]}</div>
            <button class="tl-fav-btn ${fav?"active":""}" onclick="toggleFavGame(${j._idx});renderTimeline()" title="Favoritar">⭐</button>
            <button class="edit-score-btn" onclick="abrirEditarPlacar(${j._idx})">${temPlacar?"✏️":"+"}</button>
          </div>`;}).join("")}
      </div>
    </div>`;
  });
  html+="</div>";
  document.getElementById("timeline-content").innerHTML=html;
}

function toggleTlPhase(fi){
  const h=document.getElementById(`tl-ph-${fi}`),g=document.getElementById(`tl-games-${fi}`);
  h.classList.toggle("open");g.classList.toggle("open");
}

// ═══════ ARTILHEIROS ═══════
function renderArtilheiros(){
  const jogs=getJogares();
  const makeList=(id,campo,icone,cor)=>{
    const el=document.getElementById(id);if(!el)return;
    const top=[...jogs].filter(j=>j[campo]>0).sort((a,b)=>b[campo]-a[campo]).slice(0,8);
    if(!top.length){el.innerHTML=`<li class="art-empty">Nenhum dado registrado.<br>Use "+ Registrar Dado" para adicionar.</li>`;return;}
    el.innerHTML=top.map(j=>`<li class="art-item"><span class="art-rank"></span><span style="display:flex;align-items:center">${flag(j.selecao,20)}</span><div class="art-info"><span class="art-nome">${j.nome}</span><span class="art-selecao">${j.selecao}</span></div><span class="art-val" style="color:${cor}">${icone}${j[campo]}</span></li>`).join("");
  };
  makeList("list-gols","gols","⚽","var(--green)");
  makeList("list-assists","assists","🎯","var(--accent)");
  makeList("list-clean","cleanSheets","🧤","var(--purple)");
  makeList("list-amarelos","amarelos","🟨","var(--gold)");
  makeList("list-vermelhos","vermelhos","🟥","var(--red)");
  makeList("list-jogos-disputados","jogos","🎮","var(--muted)");
}

function getJogares(){return JSON.parse(localStorage.getItem("copa_jogadores")||JSON.stringify(getJogadores()));}

// ═══════ STAT MODAL ═══════
function abrirStatModal(){
  const jogs=getJogares();
  const allPlayers=Object.values(grupos).flat().reduce((acc,team)=>{
    const d=teamData[team];if(!d)return acc;
    return acc.concat(d.titulares.map(p=>({...p,selecao:team})),d.reservas.map(p=>({...p,selecao:team})));
  },[]);
  const options=allPlayers.map(p=>`<option value="${p.nome}|${p.selecao}">${flag(p.selecao,16)} ${p.nome} (${p.selecao})</option>`).join("");
  document.getElementById("stat-modal-body").innerHTML=`
    <div class="stat-form">
      <div class="stat-form-row">
        <div class="stat-field"><label>Jogador</label><select id="sf-player"><option value="">Selecionar...</option>${options}</select></div>
        <div class="stat-field"><label>Estatística</label><select id="sf-stat"><option value="gols">⚽ Gol</option><option value="assists">🎯 Assistência</option><option value="amarelos">🟨 Cartão Amarelo</option><option value="vermelhos">🟥 Cartão Vermelho</option><option value="cleanSheets">🧤 Clean Sheet</option><option value="jogos">🎮 Jogo disputado</option></select></div>
      </div>
      <div class="stat-form-row">
        <div class="stat-field"><label>Quantidade</label><input id="sf-qty" type="number" min="1" max="10" value="1"></div>
        <div class="stat-field"><label>Ação</label><select id="sf-action"><option value="add">+ Adicionar</option><option value="set">= Definir valor</option><option value="sub">− Subtrair</option></select></div>
      </div>
      <button class="stat-submit" onclick="aplicarStat()">✅ Registrar</button>
    </div>
    <div class="stat-list-preview"><h4>Registros recentes</h4><div id="stat-recent">${getRecentStats()}</div></div>`;
  document.getElementById("stat-modal-overlay").classList.add("open");
}

function getRecentStats(){
  const rec=JSON.parse(localStorage.getItem("copa_recent_stats")||"[]");
  if(!rec.length)return`<div style="color:var(--muted);font-size:.83rem">Nenhum registro ainda.</div>`;
  return rec.slice(-6).reverse().map((r,i)=>`<div class="stat-entry">${flag(r.selecao,16)} <strong>${r.nome}</strong> — ${r.stat} +${r.qty} <button class="stat-entry-del" onclick="deleteRecentStat(${rec.length-1-i})">✕</button></div>`).join("");
}

function deleteRecentStat(i){
  const rec=JSON.parse(localStorage.getItem("copa_recent_stats")||"[]");rec.splice(i,1);
  localStorage.setItem("copa_recent_stats",JSON.stringify(rec));
  document.getElementById("stat-recent").innerHTML=getRecentStats();
}

function aplicarStat(){
  const sel=document.getElementById("sf-player").value;if(!sel)return alert("Selecione um jogador");
  const[nome,selecao]=sel.split("|");const stat=document.getElementById("sf-stat").value;
  const qty=parseInt(document.getElementById("sf-qty").value)||1;const action=document.getElementById("sf-action").value;
  let jogs=getJogares();let jog=jogs.find(j=>j.nome===nome&&j.selecao===selecao);
  if(!jog){jog={nome,selecao,gols:0,assists:0,amarelos:0,vermelhos:0,jogos:0,cleanSheets:0};jogs.push(jog);}
  if(action==="add")jog[stat]=(jog[stat]||0)+qty;
  else if(action==="set")jog[stat]=qty;
  else jog[stat]=Math.max(0,(jog[stat]||0)-qty);
  localStorage.setItem("copa_jogadores",JSON.stringify(jogs));
  const rec=JSON.parse(localStorage.getItem("copa_recent_stats")||"[]");
  rec.push({nome,selecao,stat,qty});localStorage.setItem("copa_recent_stats",JSON.stringify(rec));
  document.getElementById("stat-recent").innerHTML=getRecentStats();
  renderArtilheiros();
}

// ═══════ FAVORITOS ═══════
function renderFavoritos(){
  const f=getFavorites();const jgs=getJogos();
  let html=`<div class="fav-header"><h2>⭐ Favoritos</h2><p>Jogos e seleções marcados para acompanhar</p></div><div class="fav-sections">`;
  // TIMES
  html+=`<div><div class="fav-section-title">🌍 Seleções Favoritas</div>`;
  if(f.teams.length===0){html+=`<div class="fav-empty"><div class="fav-empty-icon">🌍</div><p>Marque seleções com ⭐ na aba Seleções</p></div>`;}
  else{html+=`<div class="sel-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">${f.teams.map(t=>{const c=getColors(t);return`<div class="sel-card" style="border-top:3px solid ${c.primary}"><img src="https://flagcdn.com/w80/${isoCodes[t]||"un"}.png" style="width:60px;height:40px;border-radius:5px;object-fit:cover"><div class="sel-card-name">${t}</div><button class="sel-fav-btn active" style="position:static;opacity:1" onclick="toggleFavTeam('${t}')">⭐</button></div>`;}).join("")}</div>`;}
  html+=`</div>`;
  // JOGOS
  html+=`<div style="margin-top:1.5rem"><div class="fav-section-title">📅 Jogos Favoritos</div>`;
  const favJogos=jgs.filter(j=>f.games.includes(j._idx));
  if(favJogos.length===0){html+=`<div class="fav-empty"><div class="fav-empty-icon">📅</div><p>Marque jogos com ⭐ na aba Jogos ou Timeline</p></div>`;}
  else{html+=`<ul class="match-list">${favJogos.map(j=>buildMatchCard(j)).join("")}</ul>`;}
  html+=`</div></div>`;
  document.getElementById("favoritos-content").innerHTML=html;
}

// ═══════ COPA 2026 ═══════
let currentSlide=0;
function renderEstadios(){
  const track=document.getElementById("stadium-track"),dots=document.getElementById("carousel-dots");
  if(!track)return;
  track.innerHTML=estadiosData.map(e=>`<div class="stadium-slide"><div class="stadium-card">
    <div class="stadium-photo-wrap"><img class="stadium-photo" src="${e.foto}" alt="${e.nome}" loading="lazy" onerror="this.style.display='none'"><div class="stadium-photo-overlay"></div><div class="stadium-country-badge">${flag(e.pais,16)} ${e.pais}</div></div>
    <div class="stadium-body"><div class="stadium-name">${e.nome}</div><div class="stadium-city">📍 ${e.cidade}</div>
    <div class="stadium-details-grid"><div class="stadium-detail"><div class="sd-label">Capacidade</div><div class="sd-val highlight">${e.capacidade}</div></div><div class="stadium-detail"><div class="sd-label">Jogos</div><div class="sd-val">${e.jogos}</div></div><div class="stadium-detail"><div class="sd-label">Gramado</div><div class="sd-val">${e.gramado}</div></div><div class="stadium-detail"><div class="sd-label">Inaugurado</div><div class="sd-val">${e.inaugurado}</div></div></div>
    <div style="margin-bottom:.5rem"><span style="background:rgba(245,200,66,.1);border:1px solid rgba(245,200,66,.25);color:var(--gold);border-radius:999px;padding:.2rem .75rem;font-size:.76rem;font-weight:700">${e.destaque}</span></div>
    <div class="stadium-fact">${e.fato}</div></div>
  </div></div>`).join("");
  dots.innerHTML=estadiosData.map((_,i)=>`<button class="carousel-dot ${i===0?"active":""}" data-idx="${i}"></button>`).join("");
  dots.querySelectorAll(".carousel-dot").forEach(d=>d.addEventListener("click",()=>goToSlide(+d.dataset.idx)));
  document.getElementById("prev-stadium").addEventListener("click",()=>goToSlide((currentSlide-1+estadiosData.length)%estadiosData.length));
  document.getElementById("next-stadium").addEventListener("click",()=>goToSlide((currentSlide+1)%estadiosData.length));
  document.getElementById("facts-grid").innerHTML=fatosCopa.map(f=>`<div class="fact-card"><div class="fact-num" style="color:${f.cor}">${f.num}</div><div class="fact-label">${f.label}</div><div class="fact-desc">${f.desc}</div></div>`).join("");
}
function goToSlide(i){currentSlide=i;document.getElementById("stadium-track").style.transform=`translateX(-${i*100}%)`;document.querySelectorAll(".carousel-dot").forEach((d,j)=>d.classList.toggle("active",j===i));}

// ═══════ TABS ═══════
function initTabs(){
  document.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
      if(btn.dataset.tab==="timeline")renderTimeline();
      if(btn.dataset.tab==="favoritos")renderFavoritos();
    });
  });
}

// ═══════ MODALS ═══════
function initModals(){
  document.getElementById("modal-close").addEventListener("click",()=>document.getElementById("modal-overlay").classList.remove("open"));
  document.getElementById("modal-overlay").addEventListener("click",e=>{if(e.target.id==="modal-overlay")document.getElementById("modal-overlay").classList.remove("open");});
  document.getElementById("stat-modal-close").addEventListener("click",()=>document.getElementById("stat-modal-overlay").classList.remove("open"));
  document.getElementById("stat-modal-overlay").addEventListener("click",e=>{if(e.target.id==="stat-modal-overlay")document.getElementById("stat-modal-overlay").classList.remove("open");});
  document.getElementById("score-modal-close").addEventListener("click",()=>document.getElementById("score-modal-overlay").classList.remove("open"));
  document.getElementById("score-modal-overlay").addEventListener("click",e=>{if(e.target.id==="score-modal-overlay")document.getElementById("score-modal-overlay").classList.remove("open");});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.querySelectorAll(".modal-overlay").forEach(o=>o.classList.remove("open"));}});
  document.getElementById("btn-open-stat-modal").addEventListener("click",abrirStatModal);
  document.getElementById("theme-toggle").addEventListener("click",toggleTheme);
  document.getElementById("sel-search").addEventListener("input",renderSelecoes);
  document.getElementById("back-to-selecoes").addEventListener("click",()=>{
    document.getElementById("selecao-detail").classList.add("hidden");
    document.getElementById("selecoes-list-view").classList.remove("hidden");
    if(newsAbortController)newsAbortController.abort();
  });
  const faseSelect=document.getElementById("fase-select");
  [...new Set(BASE_JOGOS.map(j=>j.fase))].forEach(f=>{const o=document.createElement("option");o.value=f;o.textContent=f;faseSelect.appendChild(o);});
  faseSelect.addEventListener("change",renderJogos);
  document.getElementById("search-time").addEventListener("input",renderJogos);
}

// ═══════ INIT ═══════
function inicializar(){
  initTheme();
  spawnParticles();
  updateCountdown();
  setInterval(updateCountdown,1000);
  initTabs();
  initModals();
  renderHoje();
  renderGrupos();
  renderSelecoes();
  renderJogos();
  renderArtilheiros();
  renderEstadios();
  renderFavoritos();
}

inicializar();