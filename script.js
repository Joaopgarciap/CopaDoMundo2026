// =============================================
//  COPA DO MUNDO 2026
//  ⚙️  CONFIG — adicione sua chave Anthropic
//     para ativar notícias com IA
// =============================================
const ANTHROPIC_API_KEY = ""; // Ex: "sk-ant-..."

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

// =============================================
//  CORES DE CADA SELEÇÃO
// =============================================
const teamColors={
  "Brasil":{primary:"#009c3b",secondary:"#ffdf00",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#007a2f,#009c3b)"},
  "Argentina":{primary:"#74acdf",secondary:"#ffffff",accent:"#2d6db5",text:"#003087",gradient:"linear-gradient(135deg,#5a96cf,#74acdf)"},
  "França":{primary:"#002395",secondary:"#ED2939",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#001a6e,#002395)"},
  "Portugal":{primary:"#006600",secondary:"#FF0000",accent:"#ffffff",text:"#fff",gradient:"linear-gradient(135deg,#004d00,#006600)"},
  "Espanha":{primary:"#c60b1e",secondary:"#ffc400",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#a0091a,#c60b1e)"},
  "Alemanha":{primary:"#1c1c1c",secondary:"#DD0000",accent:"#FFCC00",text:"#fff",gradient:"linear-gradient(135deg,#111,#1c1c1c)"},
  "Inglaterra":{primary:"#003090",secondary:"#CF081F",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#00257a,#003090)"},
  "Holanda":{primary:"#e77c15",secondary:"#003DA5",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#d06a08,#e77c15)"},
  "Bélgica":{primary:"#000000",secondary:"#EF3340",accent:"#FFD700",text:"#fff",gradient:"linear-gradient(135deg,#111,#1a1a1a)"},
  "Croácia":{primary:"#FF0000",secondary:"#FFFFFF",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#cc0000,#FF0000)"},
  "Uruguai":{primary:"#5EB6E4",secondary:"#FFFFFF",accent:"#003DA5",text:"#fff",gradient:"linear-gradient(135deg,#4aa3d4,#5EB6E4)"},
  "México":{primary:"#006847",secondary:"#CE1126",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#004f35,#006847)"},
  "Estados Unidos":{primary:"#003087",secondary:"#BF0A30",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#00246a,#003087)"},
  "Canadá":{primary:"#FF0000",secondary:"#FFFFFF",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#cc0000,#FF0000)"},
  "Japão":{primary:"#BC002D",secondary:"#FFFFFF",accent:"#000",text:"#fff",gradient:"linear-gradient(135deg,#960024,#BC002D)"},
  "Coreia do Sul":{primary:"#CE1126",secondary:"#003478",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#aa0e1f,#CE1126)"},
  "Marrocos":{primary:"#C1272D",secondary:"#006233",accent:"#FFFFFF",text:"#fff",gradient:"linear-gradient(135deg,#a01f24,#C1272D)"},
  "Senegal":{primary:"#00853F",secondary:"#FDEF42",accent:"#E31B23",text:"#fff",gradient:"linear-gradient(135deg,#006530,#00853F)"},
  "Austrália":{primary:"#00843D",secondary:"#FFCD00",accent:"#003087",text:"#fff",gradient:"linear-gradient(135deg,#006030,#00843D)"},
  "Colômbia":{primary:"#FCD116",secondary:"#003087",accent:"#CE1126",text:"#003087",gradient:"linear-gradient(135deg,#e0bb10,#FCD116)"},
  "Equador":{primary:"#FFD100",secondary:"#003087",accent:"#CE1126",text:"#003087",gradient:"linear-gradient(135deg,#e0bb10,#FFD100)"},
};

const defaultColors={primary:"#2563eb",secondary:"#1d4ed8",accent:"#3b82f6",text:"#fff",gradient:"linear-gradient(135deg,#1e40af,#2563eb)"};

function getColors(team){return teamColors[team]||defaultColors;}

// =============================================
//  DADOS DOS TIMES — ESCALAÇÕES
// =============================================
const teamData={
  "Brasil":{
    coach:"Carlo Ancelotti",coachNat:"🇮🇹 Italiano",
    formation:"4-3-3",ranking:5,titulo:"⭐⭐⭐⭐⭐ 5x Campeão",
    grupo:"C",pontosFifaRanking:"1732",
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
    coach:"Lionel Scaloni",coachNat:"🇦🇷 Argentino",
    formation:"4-2-3-1",ranking:1,titulo:"🏆 Atual Campeão",
    grupo:"J",
    titulares:[
      {num:1,pos:"GK",nome:"E. Martínez",club:"Aston Villa"},
      {num:26,pos:"RB",nome:"Montiel",club:"Nottm Forest"},
      {num:13,pos:"CB",nome:"Romero",club:"Spurs"},
      {num:19,pos:"CB",nome:"Otamendi",club:"Benfica"},
      {num:3,pos:"LB",nome:"Tagliafico",club:"Lyon"},
      {num:5,pos:"CDM",nome:"De Paul",club:"Atlético"},
      {num:14,pos:"CDM",nome:"Enzo Fernández",club:"Chelsea"},
      {num:11,pos:"RAM",nome:"Di María",club:"Benfica"},
      {num:22,pos:"CAM",nome:"L. Martínez",club:"Inter"},
      {num:23,pos:"LAM",nome:"Mac Allister",club:"Liverpool"},
      {num:10,pos:"ST",nome:"L. Messi",club:"Inter Miami"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Rulli",club:"Ajax"},
      {num:6,pos:"CB",nome:"Lisandro M.",club:"Man. United"},
      {num:4,pos:"MF",nome:"Lo Celso",club:"Villarreal"},
      {num:9,pos:"FW",nome:"Julián Álvarez",club:"Atlético"},
      {num:7,pos:"FW",nome:"Correa",club:"Inter"},
      {num:20,pos:"FW",nome:"Dybala",club:"Roma"},
    ],
  },
  "França":{
    coach:"Didier Deschamps",coachNat:"🇫🇷 Francês",
    formation:"4-3-3",ranking:2,titulo:"🏆 Bicampeão",
    grupo:"I",
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
      {num:21,pos:"RB",nome:"Clauss",club:"Marseille"},
      {num:17,pos:"MF",nome:"Kanté",club:"Al-Ittihad"},
      {num:9,pos:"FW",nome:"Giroud",club:"LA Galaxy"},
      {num:25,pos:"FW",nome:"Coman",club:"Bayern"},
    ],
  },
  "Portugal":{
    coach:"Roberto Martínez",coachNat:"🇪🇸 Espanhol",
    formation:"4-3-3",ranking:6,titulo:"🇪🇺 Campeão Euro 2016",
    grupo:"K",
    titulares:[
      {num:1,pos:"GK",nome:"Diogo Costa",club:"Porto"},
      {num:2,pos:"RB",nome:"João Cancelo",club:"Barcelona"},
      {num:3,pos:"CB",nome:"Rúben Dias",club:"Man. City"},
      {num:4,pos:"CB",nome:"Danilo Pereira",club:"Al-Qadsiah"},
      {num:22,pos:"LB",nome:"Nuno Mendes",club:"PSG"},
      {num:8,pos:"CDM",nome:"J. Palhinha",club:"Bayern"},
      {num:16,pos:"CM",nome:"Vitinha",club:"PSG"},
      {num:20,pos:"CM",nome:"B. Fernandes",club:"Man. United"},
      {num:11,pos:"RW",nome:"B. Silva",club:"Man. City"},
      {num:7,pos:"FW",nome:"Cr. Ronaldo",club:"Al-Nassr"},
      {num:17,pos:"LW",nome:"Rafael Leão",club:"Milan"},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Rui Patrício",club:"Roma"},
      {num:5,pos:"CB",nome:"Pepe",club:"FC Porto"},
      {num:14,pos:"MF",nome:"Renato Sanches",club:"PSG"},
      {num:9,pos:"FW",nome:"André Silva",club:"Leipzig"},
      {num:23,pos:"FW",nome:"Gonçalo Ramos",club:"PSG"},
    ],
  },
  "Espanha":{
    coach:"Luis de la Fuente",coachNat:"🇪🇸 Espanhol",
    formation:"4-3-3",ranking:3,titulo:"🏆 3x Campeão",
    grupo:"H",
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
      {num:13,pos:"GK",nome:"David Raya",club:"Arsenal"},
      {num:24,pos:"CB",nome:"Nacho",club:"Al-Qadsiah"},
      {num:22,pos:"MF",nome:"Zubimendi",club:"Arsenal"},
      {num:7,pos:"FW",nome:"Ferran Torres",club:"Barcelona"},
      {num:21,pos:"FW",nome:"Nico Williams",club:"Athletic"},
    ],
  },
  "Alemanha":{
    coach:"Julian Nagelsmann",coachNat:"🇩🇪 Alemão",
    formation:"4-2-3-1",ranking:16,titulo:"🏆 4x Campeão",
    grupo:"E",
    titulares:[
      {num:1,pos:"GK",nome:"Neuer",club:"Bayern"},
      {num:2,pos:"RB",nome:"Kimmich",club:"Bayern"},
      {num:21,pos:"CB",nome:"Schlotterbeck",club:"Dortmund"},
      {num:5,pos:"CB",nome:"Tah",club:"Bayer Lev."},
      {num:3,pos:"LB",nome:"Raum",club:"Leipzig"},
      {num:6,pos:"CDM",nome:"Andrich",club:"Bayer Lev."},
      {num:23,pos:"CDM",nome:"Kroos",club:"Real Madrid"},
      {num:10,pos:"CAM",nome:"Musiala",club:"Bayern"},
      {num:13,pos:"RAM",nome:"Sané",club:"Bayern"},
      {num:9,pos:"ST",nome:"Füllkrug",club:"West Ham"},
      {num:17,pos:"LAM",nome:"Wirtz",club:"Bayer Lev."},
    ],
    reservas:[
      {num:12,pos:"GK",nome:"Trapp",club:"Eintracht"},
      {num:4,pos:"CB",nome:"Rüdiger",club:"Real Madrid"},
      {num:8,pos:"MF",nome:"Can",club:"Dortmund"},
      {num:11,pos:"FW",nome:"Gnabry",club:"Bayern"},
      {num:14,pos:"FW",nome:"Havertz",club:"Arsenal"},
    ],
  },
  "Inglaterra":{
    coach:"Gareth Southgate",coachNat:"🇬🇧 Inglês",
    formation:"4-3-3",ranking:4,titulo:"🏆 Campeão 1966",
    grupo:"L",
    titulares:[
      {num:1,pos:"GK",nome:"Pickford",club:"Everton"},
      {num:2,pos:"RB",nome:"Alexander-Arnold",club:"Liverpool"},
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
      {num:16,pos:"MF",nome:"Henderson",club:"Ajax"},
      {num:7,pos:"FW",nome:"Sterling",club:"Chelsea"},
      {num:23,pos:"FW",nome:"Grealish",club:"Man. City"},
    ],
  },
};

// =============================================
//  ARTILHEIROS
// =============================================
const jogadores=[
  {nome:"Vinicius Jr.",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Erling Haaland",selecao:"Noruega",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Kylian Mbappé",selecao:"França",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Harry Kane",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Lionel Messi",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Cristiano Ronaldo",selecao:"Portugal",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Lamine Yamal",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Jude Bellingham",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Florian Wirtz",selecao:"Alemanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Raphinha",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Julian Alvarez",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Cody Gakpo",selecao:"Holanda",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Darwin Núñez",selecao:"Uruguai",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Sadio Mané",selecao:"Senegal",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Pedri",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0},
];

// =============================================
//  ESTÁDIOS
// =============================================
const estadiosData=[
  {nome:"Estádio Azteca",cidade:"Cidade do México",pais:"México",bandeira:"mx",capacidade:"87.523",jogos:5,gramado:"Natural (Bermuda)",inaugurado:"1966",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/EstadioAzteca.jpg/800px-EstadioAzteca.jpg",fato:"O único estádio a sediar a abertura da Copa do Mundo três vezes (1970, 1986 e 2026). Palco do 'Gol do Século' de Maradona.",destaque:"🎤 Abertura da Copa"},
  {nome:"MetLife Stadium",cidade:"East Rutherford, Nova Jersey",pais:"EUA",bandeira:"us",capacidade:"82.500",jogos:6,gramado:"FieldTurf (sintético)",inaugurado:"2010",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/MetLife_Stadium_Sep_13_2018.jpg/800px-MetLife_Stadium_Sep_13_2018.jpg",fato:"Sediará a Final em 19/07. Palco da estreia do Brasil vs Marrocos (13/06). Fica a poucos km de Manhattan.",destaque:"🏆 Final da Copa"},
  {nome:"AT&T Stadium",cidade:"Arlington, Texas",pais:"EUA",bandeira:"us",capacidade:"92.100",jogos:9,gramado:"Natural (Bermuda Latitude 36)",inaugurado:"2009",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cowboys_Stadium_Sep_2009.jpg/800px-Cowboys_Stadium_Sep_2009.jpg",fato:"Maior estádio da Copa. Teto retrátil e telão de 2.300 m². Maior número de jogos: 9 partidas.",destaque:"📺 Maior telão do mundo"},
  {nome:"SoFi Stadium",cidade:"Inglewood, Califórnia",pais:"EUA",bandeira:"us",capacidade:"70.240",jogos:7,gramado:"Natural (Kentucky Bluegrass)",inaugurado:"2020",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SoFi_Stadium_2020.jpg/800px-SoFi_Stadium_2020.jpg",fato:"Arena mais moderna da Copa. Telão oval flutuante de 6.500 m². Inaugurada em 2020.",destaque:"✨ Arena mais moderna"},
  {nome:"Mercedes-Benz Stadium",cidade:"Atlanta, Geórgia",pais:"EUA",bandeira:"us",capacidade:"71.000",jogos:8,gramado:"Natural (Bermuda Tifway 419)",inaugurado:"2017",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mercedes-Benz_Stadium_interior_panoramic.jpg/800px-Mercedes-Benz_Stadium_interior_panoramic.jpg",fato:"Sedia uma das semifinais. Teto retrátil em pétalas. Primeiro estádio na América com certificação LEED Platina.",destaque:"🌿 LEED Platinum"},
  {nome:"Hard Rock Stadium",cidade:"Miami, Flórida",pais:"EUA",bandeira:"us",capacidade:"65.326",jogos:6,gramado:"Natural (Bermuda Celebration)",inaugurado:"1987",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hard_Rock_Stadium_Aerial_2018.jpg/800px-Hard_Rock_Stadium_Aerial_2018.jpg",fato:"Disputa pelo 3º lugar (18 jul). Jogos do Grupo C (Brasil). Final da Copa América 2024.",destaque:"🥉 Disputa pelo 3º Lugar"},
  {nome:"Gillette Stadium",cidade:"Foxborough, Massachusetts",pais:"EUA",bandeira:"us",capacidade:"65.878",jogos:7,gramado:"Natural",inaugurado:"2002",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gillette_Stadium_aerial_photo.jpg/800px-Gillette_Stadium_aerial_photo.jpg",fato:"Reforma de US$250 mi em 2023. Torre de 22 andares com mirante panorâmico. Jogos do Grupo C (Brasil).",destaque:"🗼 Torre panorâmica"},
  {nome:"Lincoln Financial Field",cidade:"Filadélfia, Pensilvânia",pais:"EUA",bandeira:"us",capacidade:"69.176",jogos:6,gramado:"Natural (FieldTurf)",inaugurado:"2003",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lincoln_Financial_Field_09-06-2015.jpg/800px-Lincoln_Financial_Field_09-06-2015.jpg",fato:"Brasil x Haiti aqui. Em 4 de julho (250 anos dos EUA), jogo eliminatório especial.",destaque:"🇧🇷 Brasil x Haiti"},
  {nome:"BC Place",cidade:"Vancouver, Canadá",pais:"Canadá",bandeira:"ca",capacidade:"54.500",jogos:7,gramado:"FieldTurf (sintético)",inaugurado:"1983",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/BCPlace-1.jpg/800px-BCPlace-1.jpg",fato:"Maior teto pneumático retrátil do mundo. Cerimônias das Olimpíadas de Inverno 2010.",destaque:"🍁 Copa Feminina 2015"},
  {nome:"Estádio Akron",cidade:"Guadalajara, México",pais:"México",bandeira:"mx",capacidade:"46.232",jogos:4,gramado:"Natural (Bermuda)",inaugurado:"2010",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Estadio_Akron_2023.jpg/800px-Estadio_Akron_2023.jpg",fato:"Casa do Guadalajara (Chivas). Design futurista com fachada de pétalas de vidro.",destaque:"🌺 Design futurista"},
  {nome:"Estádio BBVA",cidade:"Monterrey, México",pais:"México",bandeira:"mx",capacidade:"53.500",jogos:4,gramado:"Natural (Bermuda híbrida)",inaugurado:"2015",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/BBVA_Bancomer_Stadium_%282%29.jpg/800px-BBVA_Bancomer_Stadium_%282%29.jpg",fato:"'El Gigante de Aço'. Estádio mais sustentável das Américas. Serra Madre ao fundo.",destaque:"🏔️ Gigante de Aço"},
  {nome:"BMO Field",cidade:"Toronto, Canadá",pais:"Canadá",bandeira:"ca",capacidade:"45.000",jogos:5,gramado:"Natural (híbrido)",inaugurado:"2007",foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/BMO_Field_from_above.jpg/800px-BMO_Field_from_above.jpg",fato:"Principal estádio de futebol do Canadá. Casa do Toronto FC. Estreia do Canadá anfitrião.",destaque:"🍁 Estreia do Canadá"},
];

const fatosCopa=[
  {num:"48",label:"Seleções",desc:"Maior número de times na história da Copa",cor:"var(--green)"},
  {num:"104",label:"Partidas",desc:"40 a mais que a edição anterior (Qatar 2022)",cor:"var(--gold)"},
  {num:"3",label:"Países-sede",desc:"Canadá, EUA e México — inédito na história",cor:"var(--accent)"},
  {num:"16",label:"Cidades",desc:"11 nos EUA, 3 no México, 2 no Canadá",cor:"#c084fc"},
  {num:"39",label:"Dias",desc:"De 11 de junho a 19 de julho de 2026",cor:"var(--red)"},
  {num:"8",label:"Jogos até o título",desc:"Um a mais que nas edições anteriores",cor:"var(--gold)"},
];

// =============================================
//  JOGOS (horário BRT)
// =============================================
const jogos=[
  {data:"2026-06-11 16:00",fase:"Fase de Grupos",grupo:"A",casa:"México",fora:"África do Sul",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-11 22:00",fase:"Fase de Grupos",grupo:"B",casa:"Canadá",fora:"Bósnia e Herzegovina",golsCasa:null,golsFora:null,estadio:"BMO Field, Toronto"},
  {data:"2026-06-12 19:00",fase:"Fase de Grupos",grupo:"A",casa:"Coreia do Sul",fora:"República Tcheca",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-06-12 16:00",fase:"Fase de Grupos",grupo:"D",casa:"Estados Unidos",fora:"Paraguai",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
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
  {data:"2026-06-17 00:00",fase:"Fase de Grupos",grupo:"J",casa:"Jordânia",fora:"Argélia",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-17 14:00",fase:"Fase de Grupos",grupo:"K",casa:"Portugal",fora:"Uzbequistão",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-17 17:00",fase:"Fase de Grupos",grupo:"L",casa:"Inglaterra",fora:"Gana",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-17 20:00",fase:"Fase de Grupos",grupo:"L",casa:"Panamá",fora:"Croácia",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-06-17 23:00",fase:"Fase de Grupos",grupo:"K",casa:"Colômbia",fora:"RD do Congo",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-06-19 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Marrocos",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-06-19 22:00",fase:"Fase de Grupos",grupo:"C",casa:"Brasil",fora:"Haiti",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  {data:"2026-06-24 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Brasil",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-06-24 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Marrocos",fora:"Haiti",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-07-01 17:00",fase:"16 avos de Final",casa:"1º Grupo A",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-10 17:00",fase:"Oitavas de Final",casa:"Vencedor J1",fora:"Vencedor J2",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-16 19:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (TX)"},
  {data:"2026-07-14 19:00",fase:"Semifinal",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-07-18 17:00",fase:"Terceiro Lugar",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-07-19 16:00",fase:"Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
];

// =============================================
//  POSIÇÕES NO CAMPO (% left, % top)
//  Origem: top-left. Atacante no topo, GK embaixo
// =============================================
const formationPositions={
  "4-3-3":[
    {l:50,t:90},{l:15,t:72},{l:37,t:72},{l:63,t:72},{l:85,t:72},
    {l:25,t:52},{l:50,t:52},{l:75,t:52},
    {l:20,t:22},{l:50,t:15},{l:80,t:22},
  ],
  "4-2-3-1":[
    {l:50,t:90},{l:15,t:72},{l:37,t:72},{l:63,t:72},{l:85,t:72},
    {l:35,t:55},{l:65,t:55},
    {l:18,t:35},{l:50,t:35},{l:82,t:35},
    {l:50,t:16},
  ],
  "4-4-2":[
    {l:50,t:90},{l:15,t:72},{l:37,t:72},{l:63,t:72},{l:85,t:72},
    {l:15,t:50},{l:37,t:50},{l:63,t:50},{l:85,t:50},
    {l:33,t:18},{l:67,t:18},
  ],
  "3-5-2":[
    {l:50,t:90},{l:25,t:72},{l:50,t:72},{l:75,t:72},
    {l:10,t:52},{l:28,t:50},{l:50,t:50},{l:72,t:50},{l:90,t:52},
    {l:33,t:20},{l:67,t:20},
  ],
};

// =============================================
//  UTILS
// =============================================
function flag(time,size=24){
  const code=isoCodes[time];
  if(!code)return`<span style="font-size:${size}px;line-height:1">🏳️</span>`;
  return`<img src="https://flagcdn.com/w40/${code}.png" alt="${time}" class="flag-img" style="width:${size}px;height:${Math.round(size*.67)}px;object-fit:cover;border-radius:3px">`;
}
function jogoTemPlacar(j){return Number.isFinite(j.golsCasa)&&Number.isFinite(j.golsFora);}
function formatarData(t){const d=new Date(t.replace(" ","T"));return new Intl.DateTimeFormat("pt-BR",{dateStyle:"short",timeStyle:"short"}).format(d);}
function formatarDia(t){const d=new Date(t.split(" ")[0]+"T12:00:00");return{dia:d.getDate().toString().padStart(2,"0"),mes:d.toLocaleString("pt-BR",{month:"short"}).replace(".","").toUpperCase()};}
function phaseBadgeClass(f){
  if(f==="Fase de Grupos")return"grupos";
  if(f.includes("16 avos"))return"avos";
  if(f.includes("Oitavas"))return"oitavas";
  if(f.includes("Quartas"))return"quartas";
  if(f.includes("Semi"))return"semi";
  if(f==="Final"||f.includes("Terceiro"))return"final";
  return"";
}

// =============================================
//  CLASSIFICAÇÃO
// =============================================
function calcularClassificacaoGrupo(grupo){
  const times=grupos[grupo]||[];
  const tabela={};
  times.forEach(t=>{tabela[t]={time:t,jogos:0,vitorias:0,empates:0,derrotas:0,golsPro:0,golsContra:0,saldo:0,pontos:0};});
  jogos.filter(j=>j.fase==="Fase de Grupos"&&j.grupo===grupo).forEach(j=>{
    if(!jogoTemPlacar(j))return;
    const ca=tabela[j.casa],fo=tabela[j.fora];
    if(!ca||!fo)return;
    ca.jogos++;fo.jogos++;ca.golsPro+=j.golsCasa;ca.golsContra+=j.golsFora;fo.golsPro+=j.golsFora;fo.golsContra+=j.golsCasa;
    if(j.golsCasa>j.golsFora){ca.vitorias++;ca.pontos+=3;fo.derrotas++;}
    else if(j.golsCasa<j.golsFora){fo.vitorias++;fo.pontos+=3;ca.derrotas++;}
    else{ca.empates++;fo.empates++;ca.pontos++;fo.pontos++;}
  });
  return Object.values(tabela).map(l=>({...l,saldo:l.golsPro-l.golsContra})).sort((a,b)=>b.pontos-a.pontos||b.saldo-a.saldo||b.golsPro-a.golsPro||a.time.localeCompare(b.time));
}

// =============================================
//  RENDER: GRUPOS
// =============================================
function renderGrupos(){
  const grid=document.getElementById("groups-grid");
  grid.innerHTML=Object.keys(grupos).map(g=>{
    const cl=calcularClassificacaoGrupo(g);
    return`<div class="group-card" data-grupo="${g}">
      <div class="group-header"><span class="group-label">Grupo ${g}</span><span class="group-expand">Ver tabela →</span></div>
      <div class="group-teams">${cl.map(l=>`<div class="team-row"><span class="team-flag">${flag(l.time,26)}</span><span class="team-name-card">${l.time}</span><span class="team-pts">${l.pontos}</span></div>`).join("")}</div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".group-card").forEach(c=>c.addEventListener("click",()=>abrirModalGrupo(c.dataset.grupo)));
}

function abrirModalGrupo(grupo){
  const overlay=document.getElementById("modal-overlay"),content=document.getElementById("modal-content");
  const cl=calcularClassificacaoGrupo(grupo);
  const jg=jogos.filter(j=>j.fase==="Fase de Grupos"&&j.grupo===grupo);
  content.innerHTML=`<div class="modal-title">⚽ Grupo ${grupo}</div>
    <table><thead><tr><th>#</th><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th></tr></thead>
    <tbody>${cl.map((l,i)=>`<tr><td>${i+1}</td><td style="display:flex;align-items:center;gap:.5rem">${flag(l.time,20)} ${l.time}</td><td>${l.jogos}</td><td>${l.vitorias}</td><td>${l.empates}</td><td>${l.derrotas}</td><td>${l.golsPro}</td><td>${l.golsContra}</td><td>${l.saldo>=0?"+":""}${l.saldo}</td><td class="pts-cell">${l.pontos}</td></tr>`).join("")}</tbody></table>
    <div class="modal-jogos"><h4>Jogos do grupo</h4>${jg.map(j=>{const sc=jogoTemPlacar(j)?`${j.golsCasa}–${j.golsFora}`:null;return`<div class="modal-match"><div class="match-teams">${flag(j.casa,18)} ${j.casa} <span style="color:var(--muted);font-weight:400">vs</span> ${flag(j.fora,18)} ${j.fora}</div><span class="match-score-badge ${sc?"":"pending"}">${sc||formatarData(j.data)}</span></div>`;}).join("")}</div>`;
  overlay.classList.add("open");
}

// =============================================
//  RENDER: SELEÇÕES TAB
// =============================================
let selGroupFilter="Todas";

function renderSelecoes(){
  // pills
  const pills=document.getElementById("sel-group-pills");
  const allGrupos=["Todas",...Object.keys(grupos)];
  pills.innerHTML=allGrupos.map(g=>`<button class="sel-pill ${g===selGroupFilter?"active":""}" data-g="${g}">Grupo ${g==="Todas"?"Todos":g}</button>`).join("");
  pills.querySelectorAll(".sel-pill").forEach(p=>p.addEventListener("click",()=>{selGroupFilter=p.dataset.g;renderSelecoes();}));

  const search=document.getElementById("sel-search").value.trim().toLowerCase();
  const allTeams=Object.entries(grupos).flatMap(([g,ts])=>ts.map(t=>({name:t,grupo:g})));
  const filtered=allTeams.filter(t=>{
    const grpOk=selGroupFilter==="Todas"||t.grupo===selGroupFilter;
    const srchOk=!search||t.name.toLowerCase().includes(search);
    return grpOk&&srchOk;
  });

  const hasDetail=!!teamData;
  const grid=document.getElementById("sel-grid");
  grid.innerHTML=filtered.map(t=>{
    const c=getColors(t.name);
    const hasData=!!teamData[t.name];
    return`<div class="sel-card" data-team="${t.name}" style="--team-primary:${c.primary};border-top:3px solid ${c.primary}">
      <img src="https://flagcdn.com/w80/${isoCodes[t.name]||"un"}.png" alt="${t.name}" class="sel-card-flag" style="width:64px;height:43px;border-radius:6px;object-fit:cover;box-shadow:0 2px 8px rgba(0,0,0,.4)">
      <div class="sel-card-name">${t.name}</div>
      <div class="sel-card-group">Grupo ${t.grupo}</div>
      ${hasData?`<span class="sel-card-badge" style="color:${c.primary};border-color:${c.primary};background:${c.primary}22">Ver detalhes →</span>`:`<span class="sel-card-badge" style="color:var(--muted)">Em breve</span>`}
    </div>`;
  }).join("");

  grid.querySelectorAll(".sel-card").forEach(c=>{
    c.addEventListener("click",()=>{
      const team=c.dataset.team;
      if(teamData[team]) abrirDetalheSelecao(team);
    });
  });
}

// =============================================
//  RENDER: CAMPO TÁTICO
// =============================================
function renderPitch(formation, titulares, colors){
  const positions=formationPositions[formation]||formationPositions["4-3-3"];
  const shirtBg=colors.primary;
  const shirtText=colors.text||"#fff";

  const playersHTML=titulares.map((p,i)=>{
    if(!positions[i])return"";
    const{l,t}=positions[i];
    return`<div class="player-node" style="left:${l}%;top:${t}%">
      <div class="player-shirt" style="background:${shirtBg};color:${shirtText}">
        ${p.num}
        <span style="position:absolute;bottom:2px;right:3px;font-size:.5rem;font-weight:900">${p.num}</span>
      </div>
      <div class="player-name-tag">${p.nome}</div>
    </div>`;
  }).join("");

  // SVG lines overlay
  const linesHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none">
    <!-- Contorno -->
    <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,.25)" stroke-width=".8"/>
    <!-- Meio -->
    <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
    <!-- Círculo central -->
    <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
    <!-- Área grande GK -->
    <rect x="22" y="82" width="56" height="16" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
    <!-- Área pequena GK -->
    <rect x="35" y="90" width="30" height="8" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
    <!-- Área grande ataque -->
    <rect x="22" y="2" width="56" height="16" fill="none" stroke="rgba(255,255,255,.2)" stroke-width=".7"/>
    <!-- Ponto central -->
    <circle cx="50" cy="50" r=".8" fill="rgba(255,255,255,.4)"/>
  </svg>`;

  return`<div class="pitch">
    ${linesHTML}
    <div class="pitch-label" style="top:4%">ATAQUE</div>
    <div class="pitch-label" style="bottom:4%">DEFESA</div>
    ${playersHTML}
  </div>`;
}

// =============================================
//  ABRIR DETALHE DE UMA SELEÇÃO
// =============================================
let newsAbortController=null;

async function abrirDetalheSelecao(teamName){
  document.getElementById("selecoes-list-view").classList.add("hidden");
  const detail=document.getElementById("selecao-detail");
  detail.classList.remove("hidden");

  const data=teamData[teamName];
  const colors=getColors(teamName);
  const isoCode=isoCodes[teamName]||"un";
  const grupo=Object.entries(grupos).find(([,ts])=>ts.includes(teamName))?.[0]||"?";

  // Build pitch
  const pitchHTML=renderPitch(data.formation,data.titulares,colors);

  // Build bench HTML
  const posOrder=["GK","RB","CB","LB","CDM","CM","CAM","RAM","LAM","MF","RW","LW","FW","ST"];
  const grouped={};
  (data.reservas||[]).forEach(p=>{if(!grouped[p.pos])grouped[p.pos]=[];grouped[p.pos].push(p);});
  const benchHTML=(data.reservas||[]).map(p=>`
    <div class="bench-player">
      <div class="bench-shirt" style="background:${colors.primary};color:${colors.text||"#fff"}">${p.num}</div>
      <div class="bench-info">
        <div class="bench-name">${p.nome}</div>
        <div class="bench-club">${p.club}</div>
      </div>
      <span class="bench-pos">${p.pos}</span>
    </div>`).join("");

  document.getElementById("sel-detail-content").innerHTML=`
    <!-- HEADER -->
    <div class="team-detail-header">
      <div class="tdh-bg" style="background:${colors.gradient};color:${colors.text||"#fff"}">
        <div class="tdh-pattern" style="color:${colors.text||"#fff"}"></div>
        <div class="tdh-top">
          <img src="https://flagcdn.com/w160/${isoCode}.png" alt="${teamName}" class="tdh-flag" style="width:100px;height:67px;object-fit:cover;border-radius:10px">
          <div class="tdh-info">
            <div class="tdh-name">${teamName}</div>
            <div class="tdh-meta">${data.titulo} &nbsp;·&nbsp; FIFA Ranking #${data.ranking||"?"}</div>
            <div class="tdh-chips">
              <span class="tdh-chip">Grupo ${grupo}</span>
              <span class="tdh-chip">${data.formation}</span>
              ${data.ranking<=10?`<span class="tdh-chip" style="background:rgba(245,200,66,.25);border-color:rgba(245,200,66,.5)">⭐ Top 10 FIFA</span>`:""}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COACH -->
    <div class="coach-card">
      <div class="coach-icon" style="border-color:${colors.primary}22;background:${colors.primary}18">🧑‍💼</div>
      <div class="coach-info">
        <div class="coach-label">Técnico</div>
        <div class="coach-name">${data.coach}</div>
        <div class="coach-detail">${data.coachNat||""}</div>
      </div>
    </div>

    <!-- PITCH + RESERVAS -->
    <div class="detail-grid" style="margin-top:1rem">
      <div>
        <div class="pitch-wrap">
          <div class="pitch-title">⚽ Provável Escalação — ${data.formation}</div>
          ${pitchHTML}
        </div>
      </div>
      <div>
        <div class="bench-section">
          <div class="bench-title">🪑 Reservas / Banco</div>
          <div class="bench-list">${benchHTML||"<div style='padding:1rem;color:var(--muted);font-size:.85rem'>Sem reservas cadastrados</div>"}</div>
        </div>
      </div>
    </div>

    <!-- NOTÍCIAS -->
    <div class="news-section">
      <div class="news-header-row">
        <div class="news-title">📰 Notícias — ${teamName} na Copa 2026</div>
        <button class="news-refresh" id="news-refresh-btn" onclick="fetchNews('${teamName}')">🔄 Atualizar</button>
      </div>
      <div class="news-body" id="news-body">
        <div class="news-loading"><div class="spinner"></div><span>Buscando notícias recentes...</span></div>
      </div>
      <div class="news-api-note">Notícias geradas via IA com base em dados recentes da Copa 2026</div>
    </div>
  `;

  // Trigger news fetch
  fetchNews(teamName);
}

// =============================================
//  FETCH NOTÍCIAS VIA CLAUDE API
// =============================================
async function fetchNews(teamName){
  const body=document.getElementById("news-body");
  const btn=document.getElementById("news-refresh-btn");
  if(!body)return;

  if(newsAbortController)newsAbortController.abort();
  newsAbortController=new AbortController();

  body.innerHTML=`<div class="news-loading"><div class="spinner"></div><span>Buscando notícias de ${teamName}...</span></div>`;
  if(btn){btn.disabled=true;btn.textContent="⏳ Buscando...";}

  try{
    const apiKey = ANTHROPIC_API_KEY || window.ANTHROPIC_API_KEY || "";
    if(!apiKey){
      // Fallback com notícias estáticas contextuais
      showStaticNews(teamName,body);
      if(btn){btn.disabled=false;btn.textContent="🔄 Atualizar";}
      return;
    }

    const resp=await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01","anthropic-beta":"messages-2023-06-01"},
      signal:newsAbortController.signal,
      body:JSON.stringify({
        model:"claude-sonnet-4-20250514",
        max_tokens:1000,
        tools:[{type:"web_search_20250305",name:"web_search"}],
        messages:[{
          role:"user",
          content:`Busca as 4 notícias mais recentes e relevantes sobre a seleção de ${teamName} na Copa do Mundo 2026. 
          Foco em: convocação, preparação, jogos, lesões, declarações do técnico.
          Responda SOMENTE em JSON válido neste formato exato, sem texto antes ou depois:
          {"noticias":[{"titulo":"...","resumo":"...","tag":"..."},{"titulo":"...","resumo":"...","tag":"..."},{"titulo":"...","resumo":"...","tag":"..."},{"titulo":"...","resumo":"...","tag":"..."}]}
          Cada resumo deve ter 1-2 frases. tag deve ser algo como "Convocação", "Preparação", "Lesão", "Técnico", "Jogo", "Copa 2026", etc.`
        }]
      })
    });

    const json=await resp.json();
    const textBlocks=json.content?.filter(b=>b.type==="text").map(b=>b.text).join("") || "";
    const cleaned=textBlocks.replace(/```json|```/g,"").trim();
    const data=JSON.parse(cleaned);

    if(data.noticias&&data.noticias.length){
      body.innerHTML=data.noticias.map(n=>`
        <div class="news-item">
          <div class="news-item-title">${n.titulo}</div>
          <div class="news-item-body">${n.resumo}</div>
          <span class="news-item-tag">${n.tag}</span>
        </div>`).join("");
    }else{
      showStaticNews(teamName,body);
    }
  }catch(e){
    if(e.name==="AbortError")return;
    showStaticNews(teamName,body);
  }finally{
    if(btn){btn.disabled=false;btn.textContent="🔄 Atualizar";}
  }
}

function showStaticNews(teamName,body){
  const newsMap={
    "Brasil":[
      {t:"Ancelotti define 24 dos 26 convocados para a Copa",r:"Carlo Ancelotti praticamente fechou a lista, com disputas apenas entre Endrick, Igor Thiago e Lucas Paquetá pelas últimas vagas.",tag:"Convocação"},
      {t:"Convocação oficial do Brasil será no dia 18 de maio",r:"A CBF confirmou que Ancelotti anunciará os 26 convocados na sede da confederação, no Rio de Janeiro.",tag:"Convocação"},
      {t:"Vinicius Jr. e Raphinha são titulares garantidos",r:"A dupla liderou os amistosos contra França e Croácia em março, com destaque para o camisa 7 do Barcelona.",tag:"Preparação"},
      {t:"Brasil enfrenta Marrocos, Haiti e Escócia no Grupo C",r:"Estreia marcada para 13/06 no MetLife Stadium (Nova Jersey) contra Marrocos, às 19h de Brasília.",tag:"Copa 2026"},
    ],
    "Argentina":[
      {t:"Argentina chega como atual campeã para defender o título",r:"A equipe de Scaloni busca o tricampeonato com Messi liderando o ataque.",tag:"Copa 2026"},
      {t:"Scaloni mantém base da Copa 2022 e Copa América",r:"Emiliano Martínez, Romero, De Paul e Mac Allister seguem como pilares do sistema.",tag:"Preparação"},
      {t:"Messi: 'Este pode ser meu último Mundial'",r:"Aos 38 anos, a lenda argentina admite que a Copa 2026 será provavelmente sua despedida.",tag:"Declaração"},
      {t:"Argentina no Grupo J com Argélia, Áustria e Jordânia",r:"A seleção campeã estreia com favoritismo no grupo considerado mais acessível.",tag:"Copa 2026"},
    ],
    "França":[
      {t:"Mbappé liderará a França na busca pelo tricampeonato",r:"O craque do Real Madrid é o principal nome da delegação francesa para o torneio.",tag:"Copa 2026"},
      {t:"Deschamps mantém base campeã de 2018",r:"Com vasta experiência, a seleção conta com Maignan, Camavinga e Tchouaméni.",tag:"Preparação"},
      {t:"França no Grupo I ao lado de Senegal, Iraque e Noruega",r:"Haaland e Noruega são o adversário mais perigoso do grupo para os franceses.",tag:"Copa 2026"},
      {t:"Griezmann deve se aposentar após o torneio",r:"O veterano do Atlético de Madrid vê a Copa 2026 como despedida da seleção.",tag:"Declaração"},
    ],
  };
  const news=newsMap[teamName]||[
    {t:`${teamName} se prepara para a Copa do Mundo 2026`,r:`A seleção de ${teamName} finalizou sua preparação e está pronta para o torneio nos EUA, México e Canadá.`,tag:"Copa 2026"},
    {t:"Copa 2026: 48 seleções, 104 jogos, 3 países",r:"A maior Copa da história acontece de 11 de junho a 19 de julho em 16 cidades da América do Norte.",tag:"Copa 2026"},
    {t:"Trionda: a bola oficial do torneio",r:"A Adidas apresentou a Trionda Pro, com tecnologia de chip IMU 500Hz integrado ao VAR.",tag:"Copa 2026"},
    {t:"Sorteio definiu grupos no Kennedy Center em dezembro",r:"O sorteio histórico foi realizado em Washington D.C., definindo todos os 12 grupos do torneio.",tag:"Copa 2026"},
  ];
  body.innerHTML=news.map(n=>`
    <div class="news-item">
      <div class="news-item-title">${n.t}</div>
      <div class="news-item-body">${n.r}</div>
      <span class="news-item-tag">${n.tag}</span>
    </div>`).join("")+`<div style="padding:.75rem 0;font-size:.76rem;color:var(--muted);text-align:center">
      💡 Para notícias ao vivo, adicione sua chave Anthropic API em <code>script.js</code>
    </div>`;
}

// =============================================
//  RENDER: JOGOS
// =============================================
function renderJogos(){
  const fase=document.getElementById("fase-select").value;
  const termo=document.getElementById("search-time").value.trim().toLowerCase();
  const filtrados=jogos.filter(j=>{
    const faseOk=fase==="Todas"||j.fase===fase;
    const buscaOk=!termo||j.casa.toLowerCase().includes(termo)||j.fora.toLowerCase().includes(termo);
    return faseOk&&buscaOk;
  });
  const list=document.getElementById("matches-list");
  if(!filtrados.length){list.innerHTML='<li style="color:var(--muted);padding:1.5rem;text-align:center">Nenhum jogo encontrado.</li>';return;}
  list.innerHTML=filtrados.map(j=>{
    const{dia,mes}=formatarDia(j.data);
    const hora=j.data.split(" ")[1];
    const temPlacar=jogoTemPlacar(j);
    const placar=temPlacar?`<span class="score-inline">${j.golsCasa}–${j.golsFora}</span>`:"";
    const phaseClass=phaseBadgeClass(j.fase);
    const grupo=j.grupo?` · Grupo ${j.grupo}`:"";
    return`<li class="match-item">
      <div class="match-date-block"><div class="match-day">${dia}</div><div class="match-mon">${mes}</div></div>
      <div class="match-center">
        <div class="match-teams-row">${flag(j.casa,22)} ${j.casa} ${placar||'<span style="color:var(--muted);font-size:.85rem">vs</span>'} ${flag(j.fora,22)} ${j.fora}</div>
        <div class="match-info">🕐 ${hora} (BRT) &nbsp;·&nbsp; 📍 ${j.estadio||"A definir"}</div>
      </div>
      <div class="match-right"><span class="phase-badge ${phaseClass}">${j.fase}${grupo}</span><span class="status-dot ${temPlacar?"done":""}"></span></div>
    </li>`;
  }).join("");
}

// =============================================
//  RENDER: ARTILHEIROS
// =============================================
function renderArtilheiros(){
  const makeList=(id,campo,icone,cor)=>{
    const el=document.getElementById(id);
    const top=[...jogadores].sort((a,b)=>b[campo]-a[campo]).slice(0,10);
    if(top.every(j=>j[campo]===0)){el.innerHTML=`<li class="art-empty">A Copa ainda não começou.<br>Edite <code>script.js</code> para adicionar dados.</li>`;return;}
    el.innerHTML=top.map(j=>`<li class="art-item"><span class="art-rank"></span><span class="art-flag">${flag(j.selecao,22)}</span><div class="art-info"><span class="art-nome">${j.nome}</span><span class="art-selecao">${j.selecao}</span></div><span class="art-val" style="color:${cor}">${icone} ${j[campo]}</span></li>`).join("");
  };
  makeList("list-gols","gols","⚽","var(--green)");
  makeList("list-assists","assists","🎯","var(--accent)");
  makeList("list-amarelos","amarelos","🟨","#f5c842");
  makeList("list-vermelhos","vermelhos","🟥","var(--red)");
}

// =============================================
//  RENDER: COPA 2026
// =============================================
let currentSlide=0;
function renderEstadios(){
  const track=document.getElementById("stadium-track"),dots=document.getElementById("carousel-dots");
  track.innerHTML=estadiosData.map(e=>`<div class="stadium-slide"><div class="stadium-card">
    <div class="stadium-photo-wrap">
      <img class="stadium-photo" src="${e.foto}" alt="${e.nome}" loading="lazy" onerror="this.style.display='none'">
      <div class="stadium-photo-overlay"></div>
      <div class="stadium-country-badge">${flag(e.pais,18)} ${e.pais}</div>
    </div>
    <div class="stadium-body">
      <div class="stadium-name">${e.nome}</div>
      <div class="stadium-city">📍 ${e.cidade}</div>
      <div class="stadium-details-grid">
        <div class="stadium-detail"><div class="sd-label">Capacidade</div><div class="sd-val highlight">${e.capacidade}</div></div>
        <div class="stadium-detail"><div class="sd-label">Jogos na Copa</div><div class="sd-val">${e.jogos}</div></div>
        <div class="stadium-detail"><div class="sd-label">Gramado</div><div class="sd-val">${e.gramado}</div></div>
        <div class="stadium-detail"><div class="sd-label">Inaugurado</div><div class="sd-val">${e.inaugurado}</div></div>
      </div>
      <div style="margin-bottom:.5rem"><span style="background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.3);color:var(--gold);border-radius:999px;padding:.2rem .75rem;font-size:.78rem;font-weight:700">${e.destaque}</span></div>
      <div class="stadium-fact">${e.fato}</div>
    </div>
  </div></div>`).join("");
  dots.innerHTML=estadiosData.map((_,i)=>`<button class="carousel-dot ${i===0?"active":""}" data-idx="${i}"></button>`).join("");
  dots.querySelectorAll(".carousel-dot").forEach(d=>d.addEventListener("click",()=>goToSlide(Number(d.dataset.idx))));
  document.getElementById("prev-stadium").addEventListener("click",()=>goToSlide((currentSlide-1+estadiosData.length)%estadiosData.length));
  document.getElementById("next-stadium").addEventListener("click",()=>goToSlide((currentSlide+1)%estadiosData.length));
}
function goToSlide(idx){
  currentSlide=idx;
  document.getElementById("stadium-track").style.transform=`translateX(-${idx*100}%)`;
  document.querySelectorAll(".carousel-dot").forEach((d,i)=>d.classList.toggle("active",i===idx));
}
function renderFatos(){
  document.getElementById("facts-grid").innerHTML=fatosCopa.map(f=>`<div class="fact-card"><div class="fact-num" style="color:${f.cor}">${f.num}</div><div class="fact-label">${f.label}</div><div class="fact-desc">${f.desc}</div></div>`).join("");
}

// =============================================
//  RENDER: ESTATÍSTICAS
// =============================================
function calcularEstatisticasTimes(){
  const mapa={};
  Object.entries(grupos).forEach(([g,ts])=>ts.forEach(t=>{if(!mapa[t])mapa[t]={time:t,grupo:g,jogos:0,vitorias:0,empates:0,derrotas:0,golsPro:0,golsContra:0};}));
  jogos.forEach(j=>{
    if(!jogoTemPlacar(j))return;
    [j.casa,j.fora].forEach(t=>{if(!mapa[t])mapa[t]={time:t,grupo:"?",jogos:0,vitorias:0,empates:0,derrotas:0,golsPro:0,golsContra:0};});
    mapa[j.casa].jogos++;mapa[j.fora].jogos++;
    mapa[j.casa].golsPro+=j.golsCasa;mapa[j.casa].golsContra+=j.golsFora;
    mapa[j.fora].golsPro+=j.golsFora;mapa[j.fora].golsContra+=j.golsCasa;
    if(j.golsCasa>j.golsFora){mapa[j.casa].vitorias++;mapa[j.fora].derrotas++;}
    else if(j.golsCasa<j.golsFora){mapa[j.fora].vitorias++;mapa[j.casa].derrotas++;}
    else{mapa[j.casa].empates++;mapa[j.fora].empates++;}
  });
  return Object.values(mapa).sort((a,b)=>b.golsPro-a.golsPro||(b.golsPro-b.golsContra)-(a.golsPro-a.golsContra));
}
function renderEstatisticas(){
  const stats=calcularEstatisticasTimes();
  document.getElementById("team-stats").innerHTML=stats.map(t=>`<article class="team-card"><div class="team-card-header"><span class="team-card-flag">${flag(t.time,32)}</span><div><div class="team-card-name">${t.time}</div><div class="team-card-group">Grupo ${t.grupo}</div></div></div><div class="team-card-stats"><div class="stat-row"><span class="stat-label">Jogos</span><span class="stat-value">${t.jogos}</span></div><div class="stat-row"><span class="stat-label">Campanha</span><span class="stat-value">${t.vitorias}V ${t.empates}E ${t.derrotas}D</span></div><div class="stat-row"><span class="stat-label">Gols pró</span><span class="stat-value highlight">${t.golsPro}</span></div><div class="stat-row"><span class="stat-label">Gols contra</span><span class="stat-value">${t.golsContra}</span></div><div class="stat-row"><span class="stat-label">Saldo</span><span class="stat-value" style="color:${(t.golsPro-t.golsContra)>=0?"var(--green)":"var(--red)"}">${t.golsPro-t.golsContra>=0?"+":""}${t.golsPro-t.golsContra}</span></div></div></article>`).join("");
}

// =============================================
//  TABS & INICIALIZAR
// =============================================
function iniciarTabs(){
  document.querySelectorAll(".tab").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

function inicializar(){
  // Fase select
  const faseSelect=document.getElementById("fase-select");
  [...new Set(jogos.map(j=>j.fase))].forEach(f=>{const o=document.createElement("option");o.value=f;o.textContent=f;faseSelect.appendChild(o);});
  faseSelect.addEventListener("change",renderJogos);
  document.getElementById("search-time").addEventListener("input",renderJogos);

  // Seleções search
  document.getElementById("sel-search").addEventListener("input",renderSelecoes);

  // Back button
  document.getElementById("back-to-selecoes").addEventListener("click",()=>{
    document.getElementById("selecao-detail").classList.add("hidden");
    document.getElementById("selecoes-list-view").classList.remove("hidden");
    if(newsAbortController)newsAbortController.abort();
  });

  // Modal
  document.getElementById("modal-close").addEventListener("click",()=>document.getElementById("modal-overlay").classList.remove("open"));
  document.getElementById("modal-overlay").addEventListener("click",e=>{if(e.target===document.getElementById("modal-overlay"))document.getElementById("modal-overlay").classList.remove("open");});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.getElementById("modal-overlay").classList.remove("open");}});

  iniciarTabs();
  renderGrupos();
  renderSelecoes();
  renderJogos();
  renderArtilheiros();
  renderEstadios();
  renderFatos();
  renderEstatisticas();
}

inicializar();