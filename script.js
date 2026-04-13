// =============================================
//  COPA DO MUNDO 2026 — DADOS E LÓGICA
//  Horários no fuso de Brasília (BRT = UTC-3)
// =============================================

const isoCodes = {
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
  "Itália":"it","Dinamarca":"dk",
};

const grupos = {
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

// ——— JOGADORES ———
const jogadores = [
  {nome:"Vinicius Jr.",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Erling Haaland",selecao:"Noruega",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Kylian Mbappé",selecao:"França",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Harry Kane",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Lionel Messi",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Cristiano Ronaldo",selecao:"Portugal",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Lamine Yamal",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Jude Bellingham",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Florian Wirtz",selecao:"Alemanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Jamal Musiala",selecao:"Alemanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Raphinha",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Rodrygo",selecao:"Brasil",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Julian Alvarez",selecao:"Argentina",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Cody Gakpo",selecao:"Holanda",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Darwin Núñez",selecao:"Uruguai",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Sadio Mané",selecao:"Senegal",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Sofiane Boufal",selecao:"Marrocos",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Pedri",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Rodri",selecao:"Espanha",gols:0,assists:0,amarelos:0,vermelhos:0},
  {nome:"Phil Foden",selecao:"Inglaterra",gols:0,assists:0,amarelos:0,vermelhos:0},
];

// ——— ESTÁDIOS ———
const estadiosData = [
  {
    nome:"Estádio Azteca",cidade:"Cidade do México",pais:"México",bandeira:"mx",
    capacidade:"87.523",jogos:5,gramado:"Natural (Bermuda)",inaugurado:"1966",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/EstadioAzteca.jpg/800px-EstadioAzteca.jpg",
    fato:"O único estádio a sediar a abertura da Copa do Mundo três vezes (1970, 1986 e 2026). Palco do 'Gol do Século' de Maradona e do histórico México 0 × 0 União Soviética em 1970.",
    destaque:"🎤 Abertura da Copa"
  },
  {
    nome:"MetLife Stadium",cidade:"East Rutherford, Nova Jersey",pais:"EUA",bandeira:"us",
    capacidade:"82.500",jogos:6,gramado:"FieldTurf (sintético)",inaugurado:"2010",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/MetLife_Stadium_Sep_13_2018.jpg/800px-MetLife_Stadium_Sep_13_2018.jpg",
    fato:"Sediará a grande Final em 19 de julho. Localizado a poucos km de Manhattan, já recebeu Super Bowls e a final do Mundial de Clubes 2025. O grupo C (Brasil) estreia aqui.",
    destaque:"🏆 Final da Copa"
  },
  {
    nome:"AT&T Stadium",cidade:"Arlington, Texas",pais:"EUA",bandeira:"us",
    capacidade:"92.100",jogos:9,gramado:"Natural (Bermuda Latitude 36)",inaugurado:"2009",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cowboys_Stadium_Sep_2009.jpg/800px-Cowboys_Stadium_Sep_2009.jpg",
    fato:"O maior estádio da Copa 2026 em capacidade. Possui teto retrátil e o maior telão interno do mundo — mais de 2.300 m² de telas 4K suspensas sobre o campo. Maior número de jogos: 9 partidas.",
    destaque:"📺 Maior telão do mundo"
  },
  {
    nome:"SoFi Stadium",cidade:"Inglewood, Califórnia",pais:"EUA",bandeira:"us",
    capacidade:"70.240",jogos:7,gramado:"Natural (Kentucky Bluegrass)",inaugurado:"2020",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SoFi_Stadium_2020.jpg/800px-SoFi_Stadium_2020.jpg",
    fato:"A arena mais moderna da Copa. Inaugurada em 2020, possui telão oval flutuante de 6.500 m². Sediará os 16-avos de final e as oitavas. Está em Los Angeles, cidade com maior torcida latina dos EUA.",
    destaque:"✨ Arena mais moderna"
  },
  {
    nome:"Mercedes-Benz Stadium",cidade:"Atlanta, Geórgia",pais:"EUA",bandeira:"us",
    capacidade:"71.000",jogos:8,gramado:"Natural (Bermuda Tifway 419)",inaugurado:"2017",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mercedes-Benz_Stadium_interior_panoramic.jpg/800px-Mercedes-Benz_Stadium_interior_panoramic.jpg",
    fato:"Sediará uma das semifinais. O teto retráctil em pétalas é uma maravilha de engenharia. Possui o maior painel de LED circular da América do Norte. Primeiro estádio na América com certificação LEED Platina.",
    destaque:"🌿 LEED Platinum"
  },
  {
    nome:"Hard Rock Stadium",cidade:"Miami, Flórida",pais:"EUA",bandeira:"us",
    capacidade:"65.326",jogos:6,gramado:"Natural (Bermuda Celebration)",inaugurado:"1987",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hard_Rock_Stadium_Aerial_2018.jpg/800px-Hard_Rock_Stadium_Aerial_2018.jpg",
    fato:"Sediará a disputa pelo 3º lugar (18 jul) e jogos do Grupo C (Brasil). Em 2024 foi palco da Final da Copa América, com Argentina campeã. Reformado em 2016 com cobertura suspensa.",
    destaque:"🥉 Disputa pelo 3º Lugar"
  },
  {
    nome:"Levi's Stadium",cidade:"Santa Clara, Califórnia",pais:"EUA",bandeira:"us",
    capacidade:"68.500",jogos:6,gramado:"Natural (Kentucky Bluegrass)",inaugurado:"2014",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Levi%27s_Stadium%2C_2014.jpg/800px-Levi%27s_Stadium%2C_2014.jpg",
    fato:"Casa do San Francisco 49ers, no coração do Vale do Silício. Primeiro estádio dos EUA a ter energia 100% renovável. Sediará grupos e fase eliminatória.",
    destaque:"♻️ Energia renovável"
  },
  {
    nome:"Gillette Stadium",cidade:"Foxborough, Massachusetts",pais:"EUA",bandeira:"us",
    capacidade:"65.878",jogos:7,gramado:"Natural (FieldTurf Revolution 360)",inaugurado:"2002",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gillette_Stadium_aerial_photo.jpg/800px-Gillette_Stadium_aerial_photo.jpg",
    fato:"Passou por reforma de US$250 mi em 2023, adicionando uma torre de 22 andares com mirante panorâmico e o maior telão curvo externo dos EUA. Jogos do Grupo C (Brasil) e uma quartas de final.",
    destaque:"🗼 Torre panorâmica"
  },
  {
    nome:"Lincoln Financial Field",cidade:"Filadélfia, Pensilvânia",pais:"EUA",bandeira:"us",
    capacidade:"69.176",jogos:6,gramado:"Natural (FieldTurf)",inaugurado:"2003",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lincoln_Financial_Field_09-06-2015.jpg/800px-Lincoln_Financial_Field_09-06-2015.jpg",
    fato:"Brasil joga aqui contra o Haiti. Em 4 de julho (250 anos de independência dos EUA), sediará um jogo eliminatório. Na inauguração em 2003, Ronaldinho Gaúcho deu assistência para Patric Kluivert.",
    destaque:"🇧🇷 Brasil x Haiti"
  },
  {
    nome:"NRG Stadium",cidade:"Houston, Texas",pais:"EUA",bandeira:"us",
    capacidade:"72.220",jogos:5,gramado:"Natural (Desso GrassMaster)",inaugurado:"2002",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/NRG_Stadium_Houston_Texas.jpg/800px-NRG_Stadium_Houston_Texas.jpg",
    fato:"Único estádio coberto da Copa, com teto retrátil que protege do calor extremo do Texas. Sede de 5 Super Bowls. Houston é a cidade com maior população hispânica dos EUA.",
    destaque:"☀️ Teto retrátil"
  },
  {
    nome:"Arrowhead Stadium",cidade:"Kansas City, Missouri",pais:"EUA",bandeira:"us",
    capacidade:"76.416",jogos:5,gramado:"Natural (Bermuda Tifway 419)",inaugurado:"1972",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Arrowhead_Stadium_%282016%29.jpg/800px-Arrowhead_Stadium_%282016%29.jpg",
    fato:"Considerado o estádio mais barulhento do mundo — recordes Guinness de decibéis. Casa do Kansas City Chiefs, campeões do Super Bowl. Uma das atmosferas mais vibrantes para a Copa.",
    destaque:"🔊 + barulhento do mundo"
  },
  {
    nome:"Lumen Field",cidade:"Seattle, Washington",pais:"EUA",bandeira:"us",
    capacidade:"69.000",jogos:5,gramado:"FieldTurf (sintético)",inaugurado:"2002",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lumen_Field_2021.jpg/800px-Lumen_Field_2021.jpg",
    fato:"Conhecida pela sua atmosfera única e pela 'Seahawks Nation', uma das torcidas mais ruidosas da NFL. Situa-se com vista para a baía de Elliott e para o Monte Rainier.",
    destaque:"🏔️ Vista panorâmica"
  },
  {
    nome:"BC Place",cidade:"Vancouver, Canadá",bandeira:"ca",pais:"Canadá",
    capacidade:"54.500",jogos:7,gramado:"FieldTurf (sintético)",inaugurado:"1983",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/BCPlace-1.jpg/800px-BCPlace-1.jpg",
    fato:"Sediou as cerimônias de abertura e encerramento das Olimpíadas de Inverno 2010 e a final da Copa do Mundo Feminina 2015. Possui o maior teto pneumático retrátil do mundo.",
    destaque:"🍁 Copa Feminina 2015"
  },
  {
    nome:"BMO Field",cidade:"Toronto, Canadá",bandeira:"ca",pais:"Canadá",
    capacidade:"45.000",jogos:5,gramado:"Natural (híbrido)",inaugurado:"2007",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/BMO_Field_from_above.jpg/800px-BMO_Field_from_above.jpg",
    fato:"Principal estádio de futebol do Canadá e casa do Toronto FC. Passa por ampliação especial para a Copa. Sediará a estreia do Canadá como anfitrião no dia 12 de junho.",
    destaque:"🍁 Estreia do Canadá"
  },
  {
    nome:"Estádio Akron",cidade:"Guadalajara, México",bandeira:"mx",pais:"México",
    capacidade:"46.232",jogos:4,gramado:"Natural (Bermuda)",inaugurado:"2010",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Estadio_Akron_2023.jpg/800px-Estadio_Akron_2023.jpg",
    fato:"Casa do Guadalajara (Chivas), o clube mais popular do México. Design futurista com fachada de pétalas de vidro. A segunda maior cidade do México recebe 4 jogos da fase de grupos.",
    destaque:"🌺 Design futurista"
  },
  {
    nome:"Estádio BBVA",cidade:"Monterrey, México",bandeira:"mx",pais:"México",
    capacidade:"53.500",jogos:4,gramado:"Natural (Bermuda híbrida)",inaugurado:"2015",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/BBVA_Bancomer_Stadium_%282%29.jpg/800px-BBVA_Bancomer_Stadium_%282%29.jpg",
    fato:"Apelidado de 'El Gigante de Acero', considerado o estádio mais sustentável das Américas. A Serra Madre Oriental serve de cenário natural ao fundo, criando uma vista cinematográfica única.",
    destaque:"🏔️ Gigante de Aço"
  },
];

function svgDataUri(svgMarkup) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgMarkup)}`;
}

const fallbackImagemEstadio = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#122547"/>
      <stop offset="100%" stop-color="#0a1328"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="700" fill="url(#g)"/>
  <circle cx="600" cy="350" r="170" fill="none" stroke="#f5c842" stroke-width="6" opacity="0.55"/>
  <rect x="120" y="520" width="960" height="110" rx="18" fill="#0f1d38" stroke="#2e4368"/>
  <text x="600" y="275" fill="#f5c842" font-family="Arial,sans-serif" font-size="54" font-weight="700" text-anchor="middle">ESTADIO DA COPA 2026</text>
  <text x="600" y="335" fill="#c8d3ea" font-family="Arial,sans-serif" font-size="24" text-anchor="middle">Imagem ilustrativa local</text>
</svg>`);

const fallbackImagemJogador = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
  <defs>
    <linearGradient id="p" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#13284b"/>
      <stop offset="100%" stop-color="#0a1428"/>
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#p)"/>
  <circle cx="400" cy="300" r="120" fill="#f5c842" opacity="0.8"/>
  <rect x="250" y="430" width="300" height="210" rx="130" fill="#f5c842" opacity="0.7"/>
  <text x="400" y="710" fill="#e7eefc" font-family="Arial,sans-serif" font-size="38" font-weight="700" text-anchor="middle">JOGADOR HISTORICO</text>
</svg>`);

const fallbackImagemBola = svgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900">
  <defs>
    <radialGradient id="b" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="70%" stop-color="#edf2ff"/>
      <stop offset="100%" stop-color="#c7d4f5"/>
    </radialGradient>
  </defs>
  <rect width="900" height="900" fill="#0b1831"/>
  <circle cx="450" cy="450" r="290" fill="url(#b)" stroke="#f5c842" stroke-width="10"/>
  <polygon points="450,290 515,340 490,420 410,420 385,340" fill="#1e2f53"/>
  <polygon points="450,610 515,560 490,480 410,480 385,560" fill="#1e2f53"/>
  <text x="450" y="820" fill="#f5c842" font-family="Arial,sans-serif" font-size="44" font-weight="700" text-anchor="middle">BOLA OFICIAL 2026</text>
</svg>`);
if (typeof window !== "undefined") {
  window.__fallbackImagemBola = fallbackImagemBola;
}

const fotosEstadiosPorNome = {
  "Estádio Azteca": "assets/stadiums/est-dio-azteca.jpg",
  "MetLife Stadium": "assets/stadiums/metlife-stadium.jpg",
  "AT&T Stadium": "assets/stadiums/at-t-stadium.jpg",
  "SoFi Stadium": "assets/stadiums/sofi-stadium.jpg",
  "Mercedes-Benz Stadium": "assets/stadiums/mercedes-benz-stadium.jpg",
  "Hard Rock Stadium": "assets/stadiums/hard-rock-stadium.jpg",
  "Levi's Stadium": "assets/stadiums/levi-s-stadium.jpg",
  "Gillette Stadium": "assets/stadiums/gillette-stadium.jpg",
  "Lincoln Financial Field": "assets/stadiums/lincoln-financial-field.jpg",
  "NRG Stadium": "assets/stadiums/nrg-stadium.jpg",
  "Arrowhead Stadium": "assets/stadiums/arrowhead-stadium.jpg",
  "Lumen Field": "assets/stadiums/lumen-field.jpg",
  "BC Place": "assets/stadiums/bc-place.jpg",
  "BMO Field": "assets/stadiums/bmo-field.jpg",
  "Estádio Akron": "assets/stadiums/est-dio-akron.jpg",
  "Estádio BBVA": "assets/stadiums/est-dio-bbva.jpg",
};

estadiosData.forEach((estadio) => {
  estadio.foto = fotosEstadiosPorNome[estadio.nome] || fallbackImagemEstadio;
});

const imagemBolaOficial = "assets/ball-official.png";

// ——— FATOS DA COPA ———
const fatosCopa = [
  {num:"48",label:"Seleções",desc:"Maior número de times na história da Copa",cor:"var(--green)"},
  {num:"104",label:"Partidas",desc:"40 a mais que a edição anterior (Qatar 2022)",cor:"var(--gold)"},
  {num:"3",label:"Países-sede",desc:"Canadá, EUA e México — inédito na história",cor:"var(--accent)"},
  {num:"16",label:"Cidades",desc:"11 nos EUA, 3 no México, 2 no Canadá",cor:"#c084fc"},
  {num:"39",label:"Dias",desc:"De 11 de junho a 19 de julho de 2026",cor:"var(--red)"},
  {num:"8",label:"Jogos até o título",desc:"Um a mais que nas edições anteriores",cor:"var(--gold)"},
  {num:"87.523",label:"Estádio Azteca",desc:"Maior capacidade da Copa, palco da abertura",cor:"var(--green)"},
  {num:"1966",label:"Inaugurado em",desc:"O Azteca é o mais antigo estádio da Copa 2026",cor:"var(--muted)"},
];

// ——— RANKINGS ———
const rankingFifa = [
  { pos: 1, selecao: "França", pontos: "—", variacao: "↑2" },
  { pos: 2, selecao: "Espanha", pontos: "—", variacao: "↓1" },
  { pos: 3, selecao: "Argentina", pontos: "—", variacao: "↓1" },
  { pos: 4, selecao: "Inglaterra", pontos: "—", variacao: "→0" },
  { pos: 5, selecao: "Portugal", pontos: "—", variacao: "↑1" },
  { pos: 6, selecao: "Brasil", pontos: "—", variacao: "↓1" },
  { pos: 7, selecao: "Holanda", pontos: "—", variacao: "→0" },
  { pos: 8, selecao: "Marrocos", pontos: "—", variacao: "→0" },
  { pos: 9, selecao: "Bélgica", pontos: "—", variacao: "→0" },
  { pos: 10, selecao: "Alemanha", pontos: "—", variacao: "→0" },
  { pos: 11, selecao: "Croácia", pontos: "—", variacao: "→0" },
  { pos: 12, selecao: "Itália", pontos: "—", variacao: "↑1" },
  { pos: 13, selecao: "Colômbia", pontos: "—", variacao: "↑1" },
  { pos: 14, selecao: "Senegal", pontos: "—", variacao: "↓2" },
  { pos: 15, selecao: "México", pontos: "—", variacao: "↑1" },
  { pos: 16, selecao: "Estados Unidos", pontos: "—", variacao: "↓1" },
  { pos: 17, selecao: "Uruguai", pontos: "—", variacao: "→0" },
  { pos: 18, selecao: "Japão", pontos: "—", variacao: "↑1" },
  { pos: 19, selecao: "Suíça", pontos: "—", variacao: "↓1" },
  { pos: 20, selecao: "Dinamarca", pontos: "—", variacao: "↑1" },
];

const rankingCampeoes = [
  { selecao: "Brasil", titulos: 5, anos: "1958, 1962, 1970, 1994, 2002" },
  { selecao: "Alemanha", titulos: 4, anos: "1954, 1974, 1990, 2014" },
  { selecao: "Itália", titulos: 4, anos: "1934, 1938, 1982, 2006" },
  { selecao: "Argentina", titulos: 3, anos: "1978, 1986, 2022" },
  { selecao: "França", titulos: 2, anos: "1998, 2018" },
  { selecao: "Uruguai", titulos: 2, anos: "1930, 1950" },
  { selecao: "Inglaterra", titulos: 1, anos: "1966" },
  { selecao: "Espanha", titulos: 1, anos: "2010" },
];

const selecoesEstreantes2026 = ["Curaçao", "Haiti", "Uzbequistão", "Jordânia", "Bósnia e Herzegovina", "Cabo Verde"];

const destaquesHistoricos = [
  { titulo: "Mais participações", valor: "Brasil (22)", detalhe: "Única seleção presente em todas as edições desde 1930." },
  { titulo: "Mais títulos", valor: "Brasil (5)", detalhe: "Campeão em 1958, 1962, 1970, 1994 e 2002." },
  { titulo: "Mais jogos em Copas", valor: "Lothar Matthäus (25)", detalhe: "Recordista de partidas disputadas em Mundiais." },
  { titulo: "Maior goleada", valor: "Hungria 10–1 El Salvador", detalhe: "Fase de grupos da Copa de 1982, na Espanha." },
  { titulo: "Maior público em final", valor: "Brasil x Uruguai (199.854)", detalhe: "Final de 1950 no Maracanã (Rio de Janeiro)." },
  { titulo: "Mais gols em uma edição", valor: "Just Fontaine (13)", detalhe: "Marca histórica na Copa de 1958 pela França." },
];

const maiorArtilheiroHistorico = {
  nome: "Miroslav Klose",
  selecao: "Alemanha",
  gols: 16,
  copas: "2002, 2006, 2010 e 2014",
  foto: "assets/miroslav-klose.jpg",
  descricao:
    "Maior artilheiro da história da Copa do Mundo, superando Ronaldo Fenômeno em 2014 no Brasil.",
};

const carreiraKlose = [
  {
    equipe: "1. FC Kaiserslautern",
    periodo: "1999-2004",
    jogos: 145,
    gols: 52,
    titulos: ["2. Bundesliga (1996-97)"],
  },
  {
    equipe: "Werder Bremen",
    periodo: "2004-2007",
    jogos: 132,
    gols: 63,
    titulos: ["DFB-Ligapokal (2006)"],
  },
  {
    equipe: "Bayern de Munique",
    periodo: "2007-2011",
    jogos: 150,
    gols: 53,
    titulos: ["Bundesliga (2007-08, 2009-10)", "DFB-Pokal (2007-08, 2009-10)"],
  },
  {
    equipe: "Lazio",
    periodo: "2011-2016",
    jogos: 171,
    gols: 63,
    titulos: ["Coppa Italia (2012-13)"],
  },
  {
    equipe: "Seleção da Alemanha",
    periodo: "2001-2014",
    jogos: 137,
    gols: 71,
    titulos: ["Copa do Mundo (2014)"],
  },
];

const topArtilheirosHistoricos = [
  { nome: "Miroslav Klose", selecao: "Alemanha", gols: 16, status: "Aposentado", destaque: true },
  { nome: "Ronaldo", selecao: "Brasil", gols: 15, status: "Aposentado" },
  { nome: "Gerd Müller", selecao: "Alemanha", gols: 14, status: "Aposentado" },
  { nome: "Just Fontaine", selecao: "França", gols: 13, status: "Aposentado" },
  { nome: "Lionel Messi", selecao: "Argentina", gols: 13, status: "Em atividade" },
  { nome: "Pelé", selecao: "Brasil", gols: 12, status: "Aposentado" },
  { nome: "Kylian Mbappé", selecao: "França", gols: 12, status: "Em atividade" },
  { nome: "Sándor Kocsis", selecao: "Hungria", gols: 11, status: "Aposentado" },
  { nome: "Jürgen Klinsmann", selecao: "Alemanha", gols: 11, status: "Aposentado" },
  { nome: "Helmut Rahn", selecao: "Alemanha", gols: 10, status: "Aposentado" },
];

// ——— JOGOS FASE DE GRUPOS (horário de Brasília) ———
// Fontes: ESPN, Lance, 365Scores, Olympics.com (confirmados)
const jogos = [
  // ——— RODADA 1 ———
  // Grupo A
  {data:"2026-06-11 16:00",fase:"Fase de Grupos",grupo:"A",casa:"México",fora:"África do Sul",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-12 19:00",fase:"Fase de Grupos",grupo:"A",casa:"Coreia do Sul",fora:"República Tcheca",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  // Grupo B
  {data:"2026-06-11 22:00",fase:"Fase de Grupos",grupo:"B",casa:"Canadá",fora:"Bósnia e Herzegovina",golsCasa:null,golsFora:null,estadio:"BMO Field, Toronto"},
  {data:"2026-06-13 16:00",fase:"Fase de Grupos",grupo:"B",casa:"Catar",fora:"Suíça",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  // Grupo C
  {data:"2026-06-13 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Brasil",fora:"Marrocos",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-13 22:00",fase:"Fase de Grupos",grupo:"C",casa:"Haiti",fora:"Escócia",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  // Grupo D
  {data:"2026-06-12 16:00",fase:"Fase de Grupos",grupo:"D",casa:"Estados Unidos",fora:"Paraguai",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-14 01:00",fase:"Fase de Grupos",grupo:"D",casa:"Austrália",fora:"Turquia",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},
  // Grupo E
  {data:"2026-06-14 14:00",fase:"Fase de Grupos",grupo:"E",casa:"Alemanha",fora:"Curaçao",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-14 20:00",fase:"Fase de Grupos",grupo:"E",casa:"Costa do Marfim",fora:"Equador",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  // Grupo F
  {data:"2026-06-14 17:00",fase:"Fase de Grupos",grupo:"F",casa:"Holanda",fora:"Japão",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-14 23:00",fase:"Fase de Grupos",grupo:"F",casa:"Suécia",fora:"Tunísia",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  // Grupo G
  {data:"2026-06-15 16:00",fase:"Fase de Grupos",grupo:"G",casa:"Bélgica",fora:"Irã",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-06-15 23:00",fase:"Fase de Grupos",grupo:"G",casa:"Nova Zelândia",fora:"Egito",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  // Grupo H
  {data:"2026-06-15 13:00",fase:"Fase de Grupos",grupo:"H",casa:"Espanha",fora:"Arábia Saudita",golsCasa:null,golsFora:null,estadio:"Estádio Akron, Guadalajara"},
  {data:"2026-06-15 19:00",fase:"Fase de Grupos",grupo:"H",casa:"Uruguai",fora:"Cabo Verde",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  // Grupo I
  {data:"2026-06-16 18:00",fase:"Fase de Grupos",grupo:"I",casa:"França",fora:"Iraque",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-16 21:00",fase:"Fase de Grupos",grupo:"I",casa:"Noruega",fora:"Senegal",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  // Grupo J
  {data:"2026-06-16 14:00",fase:"Fase de Grupos",grupo:"J",casa:"Argentina",fora:"Áustria",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-17 00:00",fase:"Fase de Grupos",grupo:"J",casa:"Jordânia",fora:"Argélia",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  // Grupo K
  {data:"2026-06-17 14:00",fase:"Fase de Grupos",grupo:"K",casa:"Portugal",fora:"Uzbequistão",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-17 23:00",fase:"Fase de Grupos",grupo:"K",casa:"Colômbia",fora:"RD do Congo",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  // Grupo L
  {data:"2026-06-17 17:00",fase:"Fase de Grupos",grupo:"L",casa:"Inglaterra",fora:"Gana",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-17 20:00",fase:"Fase de Grupos",grupo:"L",casa:"Panamá",fora:"Croácia",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},

  // ——— RODADA 2 ———
  // Grupo A
  {data:"2026-06-18 14:00",fase:"Fase de Grupos",grupo:"A",casa:"México",fora:"Coreia do Sul",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  {data:"2026-06-18 20:00",fase:"Fase de Grupos",grupo:"A",casa:"África do Sul",fora:"República Tcheca",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},
  // Grupo B
  {data:"2026-06-18 17:00",fase:"Fase de Grupos",grupo:"B",casa:"Canadá",fora:"Catar",golsCasa:null,golsFora:null,estadio:"BMO Field, Toronto"},
  {data:"2026-06-19 00:00",fase:"Fase de Grupos",grupo:"B",casa:"Bósnia e Herzegovina",fora:"Suíça",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  // Grupo C
  {data:"2026-06-19 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Marrocos",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-19 22:00",fase:"Fase de Grupos",grupo:"C",casa:"Brasil",fora:"Haiti",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  // Grupo D
  {data:"2026-06-19 16:00",fase:"Fase de Grupos",grupo:"D",casa:"Estados Unidos",fora:"Austrália",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-20 01:00",fase:"Fase de Grupos",grupo:"D",casa:"Turquia",fora:"Paraguai",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  // Grupo E
  {data:"2026-06-20 17:00",fase:"Fase de Grupos",grupo:"E",casa:"Alemanha",fora:"Costa do Marfim",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-20 21:00",fase:"Fase de Grupos",grupo:"E",casa:"Curaçao",fora:"Equador",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  // Grupo F
  {data:"2026-06-20 14:00",fase:"Fase de Grupos",grupo:"F",casa:"Holanda",fora:"Suécia",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-21 01:00",fase:"Fase de Grupos",grupo:"F",casa:"Japão",fora:"Tunísia",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  // Grupo G
  {data:"2026-06-21 16:00",fase:"Fase de Grupos",grupo:"G",casa:"Bélgica",fora:"Nova Zelândia",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-06-21 23:00",fase:"Fase de Grupos",grupo:"G",casa:"Egito",fora:"Irã",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  // Grupo H
  {data:"2026-06-21 13:00",fase:"Fase de Grupos",grupo:"H",casa:"Espanha",fora:"Uruguai",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-06-21 19:00",fase:"Fase de Grupos",grupo:"H",casa:"Arábia Saudita",fora:"Cabo Verde",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  // Grupo I
  {data:"2026-06-22 14:00",fase:"Fase de Grupos",grupo:"I",casa:"França",fora:"Noruega",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-22 21:00",fase:"Fase de Grupos",grupo:"I",casa:"Iraque",fora:"Senegal",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  // Grupo J
  {data:"2026-06-22 18:00",fase:"Fase de Grupos",grupo:"J",casa:"Argentina",fora:"Jordânia",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-23 00:00",fase:"Fase de Grupos",grupo:"J",casa:"Argélia",fora:"Áustria",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},
  // Grupo K
  {data:"2026-06-23 14:00",fase:"Fase de Grupos",grupo:"K",casa:"Portugal",fora:"Colômbia",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-06-23 23:00",fase:"Fase de Grupos",grupo:"K",casa:"RD do Congo",fora:"Uzbequistão",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  // Grupo L
  {data:"2026-06-23 17:00",fase:"Fase de Grupos",grupo:"L",casa:"Inglaterra",fora:"Panamá",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-23 20:00",fase:"Fase de Grupos",grupo:"L",casa:"Croácia",fora:"Gana",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},

  // ——— RODADA 3 (simultânea por grupo) ———
  {data:"2026-06-24 22:00",fase:"Fase de Grupos",grupo:"A",casa:"México",fora:"República Tcheca",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-24 22:00",fase:"Fase de Grupos",grupo:"A",casa:"África do Sul",fora:"Coreia do Sul",golsCasa:null,golsFora:null,estadio:"Estádio Azteca, Cidade do México"},
  {data:"2026-06-25 16:00",fase:"Fase de Grupos",grupo:"B",casa:"Canadá",fora:"Suíça",golsCasa:null,golsFora:null,estadio:"BMO Field, Toronto"},
  {data:"2026-06-25 16:00",fase:"Fase de Grupos",grupo:"B",casa:"Bósnia e Herzegovina",fora:"Catar",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-06-24 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Escócia",fora:"Brasil",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-06-24 19:00",fase:"Fase de Grupos",grupo:"C",casa:"Marrocos",fora:"Haiti",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-06-25 22:00",fase:"Fase de Grupos",grupo:"D",casa:"Estados Unidos",fora:"Turquia",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-25 22:00",fase:"Fase de Grupos",grupo:"D",casa:"Paraguai",fora:"Austrália",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-26 16:00",fase:"Fase de Grupos",grupo:"E",casa:"Alemanha",fora:"Equador",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-26 16:00",fase:"Fase de Grupos",grupo:"E",casa:"Curaçao",fora:"Costa do Marfim",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-06-26 19:00",fase:"Fase de Grupos",grupo:"F",casa:"Holanda",fora:"Tunísia",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-26 19:00",fase:"Fase de Grupos",grupo:"F",casa:"Japão",fora:"Suécia",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-06-27 16:00",fase:"Fase de Grupos",grupo:"G",casa:"Bélgica",fora:"Egito",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-27 16:00",fase:"Fase de Grupos",grupo:"G",casa:"Irã",fora:"Nova Zelândia",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-06-27 19:00",fase:"Fase de Grupos",grupo:"H",casa:"Espanha",fora:"Cabo Verde",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-06-27 19:00",fase:"Fase de Grupos",grupo:"H",casa:"Arábia Saudita",fora:"Uruguai",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  {data:"2026-06-28 16:00",fase:"Fase de Grupos",grupo:"I",casa:"França",fora:"Senegal",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-06-28 16:00",fase:"Fase de Grupos",grupo:"I",casa:"Iraque",fora:"Noruega",golsCasa:null,golsFora:null,estadio:"Estádio BBVA, Monterrey"},
  {data:"2026-06-28 19:00",fase:"Fase de Grupos",grupo:"J",casa:"Argentina",fora:"Argélia",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-06-28 19:00",fase:"Fase de Grupos",grupo:"J",casa:"Áustria",fora:"Jordânia",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-06-29 16:00",fase:"Fase de Grupos",grupo:"K",casa:"Portugal",fora:"RD do Congo",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-06-29 16:00",fase:"Fase de Grupos",grupo:"K",casa:"Uzbequistão",fora:"Colômbia",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-06-29 19:00",fase:"Fase de Grupos",grupo:"L",casa:"Inglaterra",fora:"Croácia",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-06-29 19:00",fase:"Fase de Grupos",grupo:"L",casa:"Gana",fora:"Panamá",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},

  // ——— 16 AVOS DE FINAL ———
  {data:"2026-07-01 17:00",fase:"16 avos de Final",casa:"1º Grupo A",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-07-01 21:00",fase:"16 avos de Final",casa:"1º Grupo B",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-07-02 17:00",fase:"16 avos de Final",casa:"1º Grupo C",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-07-02 21:00",fase:"16 avos de Final",casa:"2º Grupo A",fora:"2º Grupo C",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-07-03 17:00",fase:"16 avos de Final",casa:"1º Grupo D",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-07-03 21:00",fase:"16 avos de Final",casa:"2º Grupo B",fora:"2º Grupo D",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-07-04 17:00",fase:"16 avos de Final",casa:"1º Grupo E",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  {data:"2026-07-04 21:00",fase:"16 avos de Final",casa:"2º Grupo E",fora:"2º Grupo F",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},
  {data:"2026-07-05 17:00",fase:"16 avos de Final",casa:"1º Grupo F",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"Levi's Stadium, Santa Clara (S.F.)"},
  {data:"2026-07-05 21:00",fase:"16 avos de Final",casa:"1º Grupo G",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-07-06 17:00",fase:"16 avos de Final",casa:"1º Grupo H",fora:"2º Grupo G",golsCasa:null,golsFora:null,estadio:"BC Place, Vancouver"},
  {data:"2026-07-06 21:00",fase:"16 avos de Final",casa:"2º Grupo H",fora:"1º Grupo I",golsCasa:null,golsFora:null,estadio:"Lumen Field, Seattle"},
  {data:"2026-07-07 17:00",fase:"16 avos de Final",casa:"1º Grupo J",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-07-07 21:00",fase:"16 avos de Final",casa:"2º Grupo I",fora:"2º Grupo J",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-07-08 17:00",fase:"16 avos de Final",casa:"1º Grupo K",fora:"3º melhor",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-07-08 21:00",fase:"16 avos de Final",casa:"1º Grupo L",fora:"2º Grupo K",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},

  // ——— OITAVAS DE FINAL ———
  {data:"2026-07-10 17:00",fase:"Oitavas de Final",casa:"Vencedor J1",fora:"Vencedor J2",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-07-10 21:00",fase:"Oitavas de Final",casa:"Vencedor J3",fora:"Vencedor J4",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-07-11 17:00",fase:"Oitavas de Final",casa:"Vencedor J5",fora:"Vencedor J6",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-07-11 21:00",fase:"Oitavas de Final",casa:"Vencedor J7",fora:"Vencedor J8",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-07-12 17:00",fase:"Oitavas de Final",casa:"Vencedor J9",fora:"Vencedor J10",golsCasa:null,golsFora:null,estadio:"NRG Stadium, Houston"},
  {data:"2026-07-12 21:00",fase:"Oitavas de Final",casa:"Vencedor J11",fora:"Vencedor J12",golsCasa:null,golsFora:null,estadio:"Gillette Stadium, Boston"},
  {data:"2026-07-13 17:00",fase:"Oitavas de Final",casa:"Vencedor J13",fora:"Vencedor J14",golsCasa:null,golsFora:null,estadio:"Lincoln Financial Field, Filadélfia"},
  {data:"2026-07-13 21:00",fase:"Oitavas de Final",casa:"Vencedor J15",fora:"Vencedor J16",golsCasa:null,golsFora:null,estadio:"Arrowhead Stadium, Kansas City"},

  // ——— QUARTAS ———
  {data:"2026-07-16 19:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},
  {data:"2026-07-16 22:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"SoFi Stadium, Inglewood (L.A.)"},
  {data:"2026-07-17 19:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
  {data:"2026-07-17 22:00",fase:"Quartas de Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},

  // ——— SEMIFINAIS ———
  {data:"2026-07-14 19:00",fase:"Semifinal",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Mercedes-Benz Stadium, Atlanta"},
  {data:"2026-07-15 20:00",fase:"Semifinal",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"AT&T Stadium, Arlington (Texas)"},

  // ——— TERCEIRO LUGAR e FINAL ———
  {data:"2026-07-18 17:00",fase:"Terceiro Lugar",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"Hard Rock Stadium, Miami"},
  {data:"2026-07-19 16:00",fase:"Final",casa:"A definir",fora:"A definir",golsCasa:null,golsFora:null,estadio:"MetLife Stadium, Nova Jersey"},
];

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
function phaseBadgeClass(fase){
  if(fase==="Fase de Grupos")return"grupos";
  if(fase.includes("16 avos"))return"avos";
  if(fase.includes("Oitavas"))return"oitavas";
  if(fase.includes("Quartas"))return"quartas";
  if(fase.includes("Semi"))return"semi";
  if(fase==="Final"||fase.includes("Terceiro"))return"final";
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
    ca.jogos++;fo.jogos++;
    ca.golsPro+=j.golsCasa;ca.golsContra+=j.golsFora;
    fo.golsPro+=j.golsFora;fo.golsContra+=j.golsCasa;
    if(j.golsCasa>j.golsFora){ca.vitorias++;ca.pontos+=3;fo.derrotas++;}
    else if(j.golsCasa<j.golsFora){fo.vitorias++;fo.pontos+=3;ca.derrotas++;}
    else{ca.empates++;fo.empates++;ca.pontos++;fo.pontos++;}
  });
  return Object.values(tabela).map(l=>({...l,saldo:l.golsPro-l.golsContra}))
    .sort((a,b)=>b.pontos-a.pontos||b.saldo-a.saldo||b.golsPro-a.golsPro||a.time.localeCompare(b.time));
}

// =============================================
//  RENDER: GRUPOS
// =============================================
function renderGrupos(){
  const grid=document.getElementById("groups-grid");
  grid.innerHTML=Object.keys(grupos).map(g=>{
    const cl=calcularClassificacaoGrupo(g);
    const html=cl.map(l=>`
      <div class="team-row">
        <span class="team-flag">${flag(l.time,26)}</span>
        <span class="team-name-card">${l.time}</span>
        <span class="team-pts">${l.pontos}</span>
      </div>`).join("");
    return`<div class="group-card" data-grupo="${g}">
      <div class="group-header"><span class="group-label">Grupo ${g}</span><span class="group-expand">Ver tabela →</span></div>
      <div class="group-teams">${html}</div>
    </div>`;
  }).join("");
  grid.querySelectorAll(".group-card").forEach(c=>c.addEventListener("click",()=>abrirModalGrupo(c.dataset.grupo)));
}

// =============================================
//  MODAL GRUPO
// =============================================
function abrirModalGrupo(grupo){
  const overlay=document.getElementById("modal-overlay");
  const content=document.getElementById("modal-content");
  const cl=calcularClassificacaoGrupo(grupo);
  const jg=jogos.filter(j=>j.fase==="Fase de Grupos"&&j.grupo===grupo);
  const rows=cl.map((l,i)=>`<tr>
    <td>${i+1}</td>
    <td style="display:flex;align-items:center;gap:.5rem">${flag(l.time,20)} ${l.time}</td>
    <td>${l.jogos}</td><td>${l.vitorias}</td><td>${l.empates}</td><td>${l.derrotas}</td>
    <td>${l.golsPro}</td><td>${l.golsContra}</td>
    <td>${l.saldo>=0?"+":""}${l.saldo}</td>
    <td class="pts-cell">${l.pontos}</td>
  </tr>`).join("");
  const matches=jg.map(j=>{
    const sc=jogoTemPlacar(j)?`${j.golsCasa}–${j.golsFora}`:null;
    return`<div class="modal-match">
      <div class="match-teams">${flag(j.casa,18)} ${j.casa} <span style="color:var(--muted);font-weight:400">vs</span> ${flag(j.fora,18)} ${j.fora}</div>
      <span class="match-score-badge ${sc?"":"pending"}">${sc||formatarData(j.data)}</span>
    </div>`;
  }).join("");
  content.innerHTML=`<div class="modal-title">⚽ Grupo ${grupo}</div>
    <table><thead><tr><th>#</th><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th></tr></thead><tbody>${rows}</tbody></table>
    <div class="modal-jogos"><h4>Jogos do grupo</h4>${matches}</div>`;
  overlay.classList.add("open");
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
      <div class="match-right">
        <span class="phase-badge ${phaseClass}">${j.fase}${grupo}</span>
        <span class="status-dot ${temPlacar?"done":""}"></span>
      </div>
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
    if(top.every(j=>j[campo]===0)){
      el.innerHTML=`<li class="art-empty">A Copa ainda não começou.<br>Edite <code>script.js</code> para adicionar dados.</li>`;return;
    }
    el.innerHTML=top.map(j=>`<li class="art-item">
      <span class="art-rank"></span>
      <span class="art-flag">${flag(j.selecao,22)}</span>
      <div class="art-info"><span class="art-nome">${j.nome}</span><span class="art-selecao">${j.selecao}</span></div>
      <span class="art-val" style="color:${cor}">${icone} ${j[campo]}</span>
    </li>`).join("");
  };
  makeList("list-gols","gols","⚽","var(--green)");
  makeList("list-assists","assists","🎯","var(--accent)");
  makeList("list-amarelos","amarelos","🟨","#f5c842");
  makeList("list-vermelhos","vermelhos","🟥","var(--red)");
}

// =============================================
//  RENDER: COPA 2026 — ESTÁDIOS CAROUSEL
// =============================================
let currentSlide=0;

function renderEstadios(){
  const track=document.getElementById("stadium-track");
  const dots=document.getElementById("carousel-dots");

  track.innerHTML=estadiosData.map(e=>`
    <div class="stadium-slide">
      <div class="stadium-card">
        <div class="stadium-photo-wrap">
          <img class="stadium-photo" src="${e.foto}"
            alt="${e.nome}"
            loading="lazy"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null;this.src='${fallbackImagemEstadio}'">
          <div class="stadium-photo-overlay"></div>
          <div class="stadium-country-badge">${flag(e.cidade.includes("México")||e.cidade.includes("Monterrey")||e.cidade.includes("Guadalajara")?"México":e.pais==="Canadá"?"Canadá":"Estados Unidos",18)} ${e.pais}</div>
        </div>
        <div class="stadium-body">
          <div class="stadium-name">${e.nome}</div>
          <div class="stadium-city">📍 ${e.cidade}</div>
          <div class="stadium-details-grid">
            <div class="stadium-detail"><div class="sd-label">Capacidade</div><div class="sd-val highlight">${e.capacidade}</div></div>
            <div class="stadium-detail"><div class="sd-label">Jogos na Copa</div><div class="sd-val">${e.jogos}</div></div>
            <div class="stadium-detail"><div class="sd-label">Tipo de gramado</div><div class="sd-val">${e.gramado}</div></div>
            <div class="stadium-detail"><div class="sd-label">Inaugurado</div><div class="sd-val">${e.inaugurado}</div></div>
          </div>
          <div style="margin-bottom:.5rem"><span style="background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.3);color:var(--gold);border-radius:999px;padding:.2rem .75rem;font-size:.78rem;font-weight:700">${e.destaque}</span></div>
          <div class="stadium-fact">${e.fato}</div>
        </div>
      </div>
    </div>
  `).join("");

  dots.innerHTML=estadiosData.map((_,i)=>`<button class="carousel-dot ${i===0?"active":""}" data-idx="${i}" aria-label="Estádio ${i+1}"></button>`).join("");
  dots.querySelectorAll(".carousel-dot").forEach(d=>d.addEventListener("click",()=>goToSlide(Number(d.dataset.idx))));

  document.getElementById("prev-stadium").addEventListener("click",()=>goToSlide((currentSlide-1+estadiosData.length)%estadiosData.length));
  document.getElementById("next-stadium").addEventListener("click",()=>goToSlide((currentSlide+1)%estadiosData.length));
}

function goToSlide(idx){
  currentSlide=idx;
  document.getElementById("stadium-track").style.transform=`translateX(-${idx*100}%)`;
  document.querySelectorAll(".carousel-dot").forEach((d,i)=>d.classList.toggle("active",i===idx));
}

// =============================================
//  RENDER: FATOS DA COPA
// =============================================
function renderFatos(){
  document.getElementById("facts-grid").innerHTML=fatosCopa.map(f=>`
    <div class="fact-card">
      <div class="fact-num" style="color:${f.cor}">${f.num}</div>
      <div class="fact-label">${f.label}</div>
      <div class="fact-desc">${f.desc}</div>
    </div>`).join("");
}

// =============================================
//  RENDER: ESTATÍSTICAS SELEÇÕES
// =============================================
function calcularEstatisticasTimes(){
  const mapa={};
  Object.entries(grupos).forEach(([g,times])=>{
    times.forEach(t=>{if(!mapa[t])mapa[t]={time:t,grupo:g,jogos:0,vitorias:0,empates:0,derrotas:0,golsPro:0,golsContra:0};});
  });
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
  document.getElementById("team-stats").innerHTML=stats.map(t=>`
    <article class="team-card">
      <div class="team-card-header">
        <span class="team-card-flag">${flag(t.time,32)}</span>
        <div><div class="team-card-name">${t.time}</div><div class="team-card-group">Grupo ${t.grupo}</div></div>
      </div>
      <div class="team-card-stats">
        <div class="stat-row"><span class="stat-label">Jogos</span><span class="stat-value">${t.jogos}</span></div>
        <div class="stat-row"><span class="stat-label">Campanha</span><span class="stat-value">${t.vitorias}V ${t.empates}E ${t.derrotas}D</span></div>
        <div class="stat-row"><span class="stat-label">Gols pró</span><span class="stat-value highlight">${t.golsPro}</span></div>
        <div class="stat-row"><span class="stat-label">Gols contra</span><span class="stat-value">${t.golsContra}</span></div>
        <div class="stat-row"><span class="stat-label">Saldo</span><span class="stat-value" style="color:${(t.golsPro-t.golsContra)>=0?"var(--green)":"var(--red)"}">${t.golsPro-t.golsContra>=0?"+":""}${t.golsPro-t.golsContra}</span></div>
      </div>
    </article>`).join("");
}

// =============================================
//  RENDER: RANKINGS
// =============================================
function variacaoClasse(variacao){
  if(variacao.startsWith("↑")) return "up";
  if(variacao.startsWith("↓")) return "down";
  return "same";
}

function renderRankings(){
  const fifaRoot=document.getElementById("fifa-ranking-list");
  const campeoesRoot=document.getElementById("world-cup-winners-list");
  if(!fifaRoot||!campeoesRoot) return;

  fifaRoot.innerHTML=rankingFifa.map(item=>`
    <li class="ranking-row">
      <div class="ranking-left">
        <span class="ranking-pos">#${item.pos}</span>
        <span class="ranking-flag">${flag(item.selecao,22)}</span>
        <span class="ranking-team">${item.selecao}</span>
      </div>
      <div class="ranking-right">
        <span class="ranking-points">${item.pontos}</span>
        <span class="ranking-move ${variacaoClasse(item.variacao)}">${item.variacao}</span>
      </div>
    </li>
  `).join("");

  campeoesRoot.innerHTML=rankingCampeoes
    .sort((a,b)=>b.titulos-a.titulos||a.selecao.localeCompare(b.selecao))
    .map((item,idx)=>`
      <li class="ranking-row">
        <div class="ranking-left">
          <span class="ranking-pos">#${idx+1}</span>
          <span class="ranking-flag">${flag(item.selecao,22)}</span>
          <span class="ranking-team">${item.selecao}</span>
        </div>
        <div class="champions-meta">
          <span class="champions-titles">${item.titulos} título${item.titulos>1?"s":""}</span>
          <span class="champions-years">${item.anos}</span>
        </div>
      </li>
    `).join("");
}

// =============================================
//  RENDER: HISTÓRIA DAS COPAS
// =============================================
function renderHistoriaCopas() {
  const destaquesRoot = document.getElementById("history-summary-grid");
  const artilheiroRoot = document.getElementById("history-top-scorer");
  const topArtilheirosRoot = document.getElementById("history-top-scorers");
  const carreiraRoot = document.getElementById("history-klose-career");
  const estreantesRoot = document.getElementById("history-first-timers");
  const campeoesRoot = document.getElementById("history-champions-grid");
  if (
    !destaquesRoot ||
    !artilheiroRoot ||
    !topArtilheirosRoot ||
    !carreiraRoot ||
    !estreantesRoot ||
    !campeoesRoot
  ) return;

  destaquesRoot.innerHTML = destaquesHistoricos
    .map(
      (item) => `
      <article class="history-card">
        <h3>${item.titulo}</h3>
        <p class="history-card-value">${item.valor}</p>
        <p class="history-card-detail">${item.detalhe}</p>
      </article>
    `
    )
    .join("");

  const liderArtilharia = topArtilheirosHistoricos[0];
  artilheiroRoot.innerHTML = `
    <article class="history-top-player-card">
      <img
        src="${maiorArtilheiroHistorico.foto}"
        alt="${liderArtilharia.nome}"
        loading="lazy"
        referrerpolicy="no-referrer"
        onerror="this.onerror=null;this.src='${fallbackImagemJogador}'"
      />
      <div>
        <h3>${liderArtilharia.nome}</h3>
        <p><strong>Seleção:</strong> ${flag(liderArtilharia.selecao, 18)} ${liderArtilharia.selecao}</p>
        <p><strong>Gols em Copas:</strong> ${liderArtilharia.gols}</p>
        <p><strong>Edições:</strong> ${maiorArtilheiroHistorico.copas}</p>
        <p class="history-top-player-desc">${maiorArtilheiroHistorico.descricao}</p>
      </div>
    </article>
  `;

  topArtilheirosRoot.innerHTML = topArtilheirosHistoricos
    .map(
      (jogador, indice) => `
      <li class="history-top5-item ${indice === 0 ? "leader" : ""}">
        <div class="history-top5-left">
          <span class="history-top5-rank">#${indice + 1}</span>
          <span class="history-top5-name">${jogador.nome}</span>
          <span class="history-top5-meta">${flag(jogador.selecao, 18)} ${jogador.selecao}</span>
        </div>
        <div class="history-top5-right">
          <span class="history-top5-goals">${jogador.gols} gols</span>
          <span class="history-top5-status ${jogador.status === "Em atividade" ? "active" : "inactive"}">
            ${jogador.status}
          </span>
        </div>
      </li>
    `
    )
    .join("");

  carreiraRoot.innerHTML = carreiraKlose
    .map(
      (item) => `
      <article class="history-career-item">
        <div class="history-career-head">
          <h4>${item.equipe}</h4>
          <span>${item.periodo}</span>
        </div>
        <div class="history-career-stats">
          <span><strong>${item.jogos}</strong> jogos</span>
          <span><strong>${item.gols}</strong> gols</span>
        </div>
        <p>${item.titulos.join(" · ")}</p>
      </article>
    `
    )
    .join("");

  estreantesRoot.innerHTML = selecoesEstreantes2026
    .map(
      (time) => `
      <li class="history-first-timer-item">
        <span>${flag(time, 20)} ${time}</span>
        <small>1ª participação</small>
      </li>
    `
    )
    .join("");

  campeoesRoot.innerHTML = rankingCampeoes
    .sort((a, b) => b.titulos - a.titulos || a.selecao.localeCompare(b.selecao))
    .map(
      (item, indice) => `
      <article class="history-champion-card">
        <div class="history-champion-head">
          <span class="history-champion-rank">#${indice + 1}</span>
          <span class="history-champion-team">${flag(item.selecao, 22)} ${item.selecao}</span>
        </div>
        <p class="history-champion-titles">${item.titulos} título${item.titulos > 1 ? "s" : ""}</p>
        <p class="history-champion-years">${item.anos}</p>
      </article>
    `
    )
    .join("");
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
  const ballImg = document.getElementById("ball-img");
  if (ballImg) {
    ballImg.src = imagemBolaOficial;
    ballImg.onerror = () => {
      ballImg.onerror = null;
      ballImg.src = fallbackImagemBola;
    };
  }

  const faseSelect=document.getElementById("fase-select");
  const fases=[...new Set(jogos.map(j=>j.fase))];
  fases.forEach(f=>{const o=document.createElement("option");o.value=f;o.textContent=f;faseSelect.appendChild(o);});
  faseSelect.addEventListener("change",renderJogos);
  document.getElementById("search-time").addEventListener("input",renderJogos);
  document.getElementById("modal-close").addEventListener("click",()=>document.getElementById("modal-overlay").classList.remove("open"));
  document.getElementById("modal-overlay").addEventListener("click",e=>{if(e.target===document.getElementById("modal-overlay"))document.getElementById("modal-overlay").classList.remove("open");});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")document.getElementById("modal-overlay").classList.remove("open");});

  iniciarTabs();
  renderGrupos();
  renderJogos();
  renderArtilheiros();
  renderEstadios();
  renderFatos();
  renderEstatisticas();
  renderRankings();
  renderHistoriaCopas();
}

inicializar();