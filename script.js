// =============================================
//  COPA DO MUNDO 2026 — DADOS E LÓGICA
// =============================================

// ISO codes para flagcdn.com
const isoCodes = {
  "México": "mx", "África do Sul": "za", "Coreia do Sul": "kr", "República Tcheca": "cz",
  "Canadá": "ca", "Bósnia e Herzegovina": "ba", "Catar": "qa", "Suíça": "ch",
  "Brasil": "br", "Marrocos": "ma", "Haiti": "ht", "Escócia": "gb-sct",
  "Estados Unidos": "us", "Paraguai": "py", "Austrália": "au", "Turquia": "tr",
  "Alemanha": "de", "Curaçao": "cw", "Costa do Marfim": "ci", "Equador": "ec",
  "Holanda": "nl", "Japão": "jp", "Suécia": "se", "Tunísia": "tn",
  "Bélgica": "be", "Egito": "eg", "Irã": "ir", "Nova Zelândia": "nz",
  "Espanha": "es", "Cabo Verde": "cv", "Arábia Saudita": "sa", "Uruguai": "uy",
  "França": "fr", "Senegal": "sn", "Iraque": "iq", "Noruega": "no",
  "Argentina": "ar", "Argélia": "dz", "Áustria": "at", "Jordânia": "jo",
  "Portugal": "pt", "RD do Congo": "cd", "Uzbequistão": "uz", "Colômbia": "co",
  "Inglaterra": "gb-eng", "Croácia": "hr", "Gana": "gh", "Panamá": "pa",
};

// Dados dos jogadores — edite para atualizar durante a Copa
const jogadores = [
  // { nome, selecao, gols, assists, amarelos, vermelhos }
  { nome: "Vinicius Jr.", selecao: "Brasil", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Erling Haaland", selecao: "Noruega", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Kylian Mbappé", selecao: "França", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Harry Kane", selecao: "Inglaterra", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Lionel Messi", selecao: "Argentina", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Cristiano Ronaldo", selecao: "Portugal", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Lamine Yamal", selecao: "Espanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Pedri", selecao: "Espanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Jude Bellingham", selecao: "Inglaterra", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Rodri", selecao: "Espanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Florian Wirtz", selecao: "Alemanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Jamal Musiala", selecao: "Alemanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Raphinha", selecao: "Brasil", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Rodrygo", selecao: "Brasil", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Julian Alvarez", selecao: "Argentina", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Pedri", selecao: "Espanha", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Sofiane Boufal", selecao: "Marrocos", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Sadio Mané", selecao: "Senegal", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Darwin Núñez", selecao: "Uruguai", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
  { nome: "Cody Gakpo", selecao: "Holanda", gols: 0, assists: 0, amarelos: 0, vermelhos: 0 },
];

const grupos = {
  A: ["México", "África do Sul", "Coreia do Sul", "República Tcheca"],
  B: ["Canadá", "Bósnia e Herzegovina", "Catar", "Suíça"],
  C: ["Brasil", "Marrocos", "Haiti", "Escócia"],
  D: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"],
  E: ["Alemanha", "Curaçao", "Costa do Marfim", "Equador"],
  F: ["Holanda", "Japão", "Suécia", "Tunísia"],
  G: ["Bélgica", "Egito", "Irã", "Nova Zelândia"],
  H: ["Espanha", "Cabo Verde", "Arábia Saudita", "Uruguai"],
  I: ["França", "Senegal", "Iraque", "Noruega"],
  J: ["Argentina", "Argélia", "Áustria", "Jordânia"],
  K: ["Portugal", "RD do Congo", "Uzbequistão", "Colômbia"],
  L: ["Inglaterra", "Croácia", "Gana", "Panamá"],
};

const estadios = {
  A: "Estadio Azteca, Cidade do México",
  B: "BMO Field, Toronto",
  C: "SoFi Stadium, Los Angeles",
  D: "AT&T Stadium, Dallas",
  E: "Allianz Field, Kansas City",
  F: "MetLife Stadium, Nova Jersey",
  G: "Hard Rock Stadium, Miami",
  H: "Estadio Akron, Guadalajara",
  I: "Levi's Stadium, San Francisco",
  J: "BC Place, Vancouver",
  K: "Lincoln Financial Field, Filadélfia",
  L: "Gillette Stadium, Boston",
};

// Datas de início por grupo (aproximadas)
const datasGrupo = {
  A: ["2026-06-11", "2026-06-15", "2026-06-20"],
  B: ["2026-06-12", "2026-06-16", "2026-06-21"],
  C: ["2026-06-13", "2026-06-17", "2026-06-22"],
  D: ["2026-06-13", "2026-06-17", "2026-06-22"],
  E: ["2026-06-14", "2026-06-18", "2026-06-23"],
  F: ["2026-06-14", "2026-06-18", "2026-06-23"],
  G: ["2026-06-15", "2026-06-19", "2026-06-24"],
  H: ["2026-06-15", "2026-06-19", "2026-06-24"],
  I: ["2026-06-16", "2026-06-20", "2026-06-25"],
  J: ["2026-06-16", "2026-06-20", "2026-06-25"],
  K: ["2026-06-17", "2026-06-21", "2026-06-26"],
  L: ["2026-06-17", "2026-06-21", "2026-06-26"],
};

// Gera jogos da fase de grupos
function gerarJogosGrupo(grupo) {
  const times = grupos[grupo];
  const jogos = [];
  const pares = [
    [0, 1], [2, 3],  // rodada 1
    [0, 2], [1, 3],  // rodada 2
    [0, 3], [1, 2],  // rodada 3
  ];
  const horas = ["15:00", "19:00", "15:00", "19:00", "15:00", "19:00"];
  pares.forEach(([i, j], idx) => {
    const rodada = Math.floor(idx / 2) + 1;
    jogos.push({
      data: `${datasGrupo[grupo][Math.floor(idx / 2)]} ${horas[idx]}`,
      fase: "Fase de Grupos",
      grupo,
      rodada,
      casa: times[i],
      fora: times[j],
      golsCasa: null,
      golsFora: null,
      estadio: estadios[grupo],
    });
  });
  return jogos;
}

// Jogos mata-mata (placeholder)
const jogosMataMatа = [
  { data: "2026-06-28 16:00", fase: "16 avos de Final", casa: "1A", fora: "3C/D/E", golsCasa: null, golsFora: null, estadio: "SoFi Stadium, Los Angeles" },
  { data: "2026-06-29 16:00", fase: "16 avos de Final", casa: "1B", fora: "3A/C/D", golsCasa: null, golsFora: null, estadio: "MetLife Stadium, Nova Jersey" },
  { data: "2026-06-29 20:00", fase: "16 avos de Final", casa: "1C", fora: "3A/B/F", golsCasa: null, golsFora: null, estadio: "AT&T Stadium, Dallas" },
  { data: "2026-06-30 16:00", fase: "16 avos de Final", casa: "2A", fora: "2C", golsCasa: null, golsFora: null, estadio: "Estadio Azteca, Cidade do México" },
  { data: "2026-06-30 20:00", fase: "16 avos de Final", casa: "1D", fora: "3B/E/F", golsCasa: null, golsFora: null, estadio: "Levi's Stadium, San Francisco" },
  { data: "2026-07-01 16:00", fase: "16 avos de Final", casa: "1E", fora: "3A/B/C/D", golsCasa: null, golsFora: null, estadio: "Hard Rock Stadium, Miami" },
  { data: "2026-07-01 20:00", fase: "16 avos de Final", casa: "2B", fora: "2D", golsCasa: null, golsFora: null, estadio: "BC Place, Vancouver" },
  { data: "2026-07-02 16:00", fase: "16 avos de Final", casa: "1F", fora: "2E", golsCasa: null, golsFora: null, estadio: "Gillette Stadium, Boston" },
  { data: "2026-07-02 20:00", fase: "16 avos de Final", casa: "1G", fora: "2H", golsCasa: null, golsFora: null, estadio: "BMO Field, Toronto" },
  { data: "2026-07-03 16:00", fase: "16 avos de Final", casa: "1H", fora: "2G", golsCasa: null, golsFora: null, estadio: "Estadio Akron, Guadalajara" },
  { data: "2026-07-03 20:00", fase: "16 avos de Final", casa: "2F", fora: "2I", golsCasa: null, golsFora: null, estadio: "Lincoln Financial Field, Filadélfia" },
  { data: "2026-07-04 16:00", fase: "16 avos de Final", casa: "1I", fora: "3G/H/I", golsCasa: null, golsFora: null, estadio: "Allianz Field, Kansas City" },
  { data: "2026-07-04 20:00", fase: "16 avos de Final", casa: "1J", fora: "2K", golsCasa: null, golsFora: null, estadio: "MetLife Stadium, Nova Jersey" },
  { data: "2026-07-05 16:00", fase: "16 avos de Final", casa: "2J", fora: "2L", golsCasa: null, golsFora: null, estadio: "SoFi Stadium, Los Angeles" },
  { data: "2026-07-05 20:00", fase: "16 avos de Final", casa: "1K", fora: "3J/K/L", golsCasa: null, golsFora: null, estadio: "AT&T Stadium, Dallas" },
  { data: "2026-07-06 16:00", fase: "16 avos de Final", casa: "1L", fora: "2I", golsCasa: null, golsFora: null, estadio: "Hard Rock Stadium, Miami" },
  { data: "2026-07-09 16:00", fase: "Oitavas de Final", casa: "Vencedor J1", fora: "Vencedor J2", golsCasa: null, golsFora: null, estadio: "MetLife Stadium, Nova Jersey" },
  { data: "2026-07-10 16:00", fase: "Oitavas de Final", casa: "Vencedor J3", fora: "Vencedor J4", golsCasa: null, golsFora: null, estadio: "SoFi Stadium, Los Angeles" },
  { data: "2026-07-11 16:00", fase: "Oitavas de Final", casa: "Vencedor J5", fora: "Vencedor J6", golsCasa: null, golsFora: null, estadio: "AT&T Stadium, Dallas" },
  { data: "2026-07-12 16:00", fase: "Oitavas de Final", casa: "Vencedor J7", fora: "Vencedor J8", golsCasa: null, golsFora: null, estadio: "Hard Rock Stadium, Miami" },
  { data: "2026-07-14 19:00", fase: "Quartas de Final", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "MetLife Stadium, Nova Jersey" },
  { data: "2026-07-15 19:00", fase: "Quartas de Final", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "SoFi Stadium, Los Angeles" },
  { data: "2026-07-16 19:00", fase: "Semifinal", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "AT&T Stadium, Dallas" },
  { data: "2026-07-17 19:00", fase: "Semifinal", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "Hard Rock Stadium, Miami" },
  { data: "2026-07-18 16:00", fase: "Terceiro Lugar", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "Hard Rock Stadium, Miami" },
  { data: "2026-07-19 17:00", fase: "Final", casa: "A definir", fora: "A definir", golsCasa: null, golsFora: null, estadio: "MetLife Stadium, Nova Jersey" },
];

// Monta array completo de jogos
const jogos = [
  ...Object.keys(grupos).flatMap(g => gerarJogosGrupo(g)),
  ...jogosMataMatа,
];

// ——— UTILS ——————————————————————————————————

function flag(time, size = 24) {
  const code = isoCodes[time];
  if (!code) return `<span style="font-size:${size}px">🏳️</span>`;
  return `<img src="https://flagcdn.com/w40/${code}.png" alt="${time}" class="flag-img" style="width:${size}px;height:${Math.round(size*0.67)}px;object-fit:cover;border-radius:3px;vertical-align:middle;flex-shrink:0">`;
}

function jogoTemPlacar(jogo) {
  return Number.isFinite(jogo.golsCasa) && Number.isFinite(jogo.golsFora);
}

function formatarData(dataTexto) {
  const d = new Date(dataTexto.replace(" ", "T") + "-03:00");
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(d);
}

function formatarDia(dataTexto) {
  const d = new Date(dataTexto.split(" ")[0] + "T12:00:00");
  return {
    dia: d.getDate().toString().padStart(2, "0"),
    mes: d.toLocaleString("pt-BR", { month: "short" }).replace(".", "").toUpperCase(),
  };
}

function phaseBadgeClass(fase) {
  if (fase === "Fase de Grupos") return "grupos";
  if (fase.includes("16 avos")) return "oitavas";
  if (fase.includes("Oitavas")) return "oitavas";
  if (fase.includes("Quartas")) return "quartas";
  if (fase.includes("Semi")) return "semi";
  if (fase === "Final" || fase === "Terceiro") return "final";
  return "";
}

// ——— CLASSIFICAÇÃO ———————————————————————————

function calcularClassificacaoGrupo(grupo) {
  const times = grupos[grupo] || [];
  const tabela = {};
  times.forEach(t => {
    tabela[t] = { time: t, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldo: 0, pontos: 0 };
  });

  jogos.filter(j => j.fase === "Fase de Grupos" && j.grupo === grupo)
    .forEach(j => {
      if (!jogoTemPlacar(j)) return;
      const ca = tabela[j.casa], fo = tabela[j.fora];
      ca.jogos++; fo.jogos++;
      ca.golsPro += j.golsCasa; ca.golsContra += j.golsFora;
      fo.golsPro += j.golsFora; fo.golsContra += j.golsCasa;
      if (j.golsCasa > j.golsFora) { ca.vitorias++; ca.pontos += 3; fo.derrotas++; }
      else if (j.golsCasa < j.golsFora) { fo.vitorias++; fo.pontos += 3; ca.derrotas++; }
      else { ca.empates++; fo.empates++; ca.pontos++; fo.pontos++; }
    });

  return Object.values(tabela)
    .map(l => ({ ...l, saldo: l.golsPro - l.golsContra }))
    .sort((a, b) => b.pontos - a.pontos || b.saldo - a.saldo || b.golsPro - a.golsPro || a.time.localeCompare(b.time));
}

// ——— RENDER: GROUPS GRID ————————————————————

function renderGrupos() {
  const grid = document.getElementById("groups-grid");
  grid.innerHTML = Object.keys(grupos).map(g => {
    const classificacao = calcularClassificacaoGrupo(g);
    const teamsHTML = classificacao.map(linha => `
      <div class="team-row">
        <span class="team-flag">${flag(linha.time, 26)}</span>
        <span class="team-name-card">${linha.time}</span>
        <span class="team-pts">${linha.pontos}</span>
      </div>
    `).join("");

    return `
      <div class="group-card" data-grupo="${g}">
        <div class="group-header">
          <span class="group-label">Grupo ${g}</span>
          <span class="group-expand">Ver tabela →</span>
        </div>
        <div class="group-teams">${teamsHTML}</div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".group-card").forEach(card => {
    card.addEventListener("click", () => abrirModalGrupo(card.dataset.grupo));
  });
}

// ——— MODAL GRUPO ————————————————————————————

function abrirModalGrupo(grupo) {
  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");

  const classificacao = calcularClassificacaoGrupo(grupo);
  const jogosGrupo = jogos.filter(j => j.fase === "Fase de Grupos" && j.grupo === grupo);

  const rowsHTML = classificacao.map((l, i) => `
    <tr>
      <td>${i + 1}</td>
      <td style="display:flex;align-items:center;gap:0.5rem">${flag(l.time, 20)} ${l.time}</td>
      <td>${l.jogos}</td>
      <td>${l.vitorias}</td>
      <td>${l.empates}</td>
      <td>${l.derrotas}</td>
      <td>${l.golsPro}</td>
      <td>${l.golsContra}</td>
      <td>${l.saldo >= 0 ? "+" : ""}${l.saldo}</td>
      <td class="pts-cell">${l.pontos}</td>
    </tr>
  `).join("");

  const matchesHTML = jogosGrupo.map(j => {
    const placar = jogoTemPlacar(j) ? `${j.golsCasa} – ${j.golsFora}` : null;
    return `
      <div class="modal-match">
        <div class="match-teams">${flag(j.casa, 18)} ${j.casa} <span style="color:var(--muted);font-weight:400">vs</span> ${flag(j.fora, 18)} ${j.fora}</div>
        <span class="match-score-badge ${placar ? '' : 'pending'}">${placar || formatarData(j.data)}</span>
      </div>
    `;
  }).join("");

  content.innerHTML = `
    <div class="modal-title">⚽ Grupo ${grupo}</div>
    <table>
      <thead>
        <tr>
          <th>#</th><th>Seleção</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th><th>Pts</th>
        </tr>
      </thead>
      <tbody>${rowsHTML}</tbody>
    </table>
    <div class="modal-jogos">
      <h4>Jogos do grupo</h4>
      ${matchesHTML}
    </div>
  `;

  overlay.classList.add("open");
}

// ——— RENDER: JOGOS ——————————————————————————

function renderJogos() {
  const fase = document.getElementById("fase-select").value;
  const termo = document.getElementById("search-time").value.trim().toLowerCase();

  const filtrados = jogos.filter(j => {
    const faseOk = fase === "Todas" || j.fase === fase;
    const buscaOk = !termo || j.casa.toLowerCase().includes(termo) || j.fora.toLowerCase().includes(termo);
    return faseOk && buscaOk;
  });

  const list = document.getElementById("matches-list");

  if (!filtrados.length) {
    list.innerHTML = '<li style="color:var(--muted);padding:1.5rem;text-align:center">Nenhum jogo encontrado.</li>';
    return;
  }

  list.innerHTML = filtrados.map(j => {
    const { dia, mes } = formatarDia(j.data);
    const hora = j.data.split(" ")[1];
    const temPlacar = jogoTemPlacar(j);
    const placar = temPlacar ? `<span class="score-inline">${j.golsCasa}–${j.golsFora}</span>` : "";
    const statusClass = temPlacar ? "done" : "";
    const phaseClass = phaseBadgeClass(j.fase);
    const grupo = j.grupo ? ` · Grupo ${j.grupo}` : "";

    return `
      <li class="match-item">
        <div class="match-date-block">
          <div class="match-day">${dia}</div>
          <div class="match-mon">${mes}</div>
        </div>
        <div class="match-center">
          <div class="match-teams-row">
            ${flag(j.casa, 22)} ${j.casa} ${placar ? placar : '<span style="color:var(--muted);font-size:0.85rem">vs</span>'} ${flag(j.fora, 22)} ${j.fora}
          </div>
          <div class="match-info">🕐 ${hora} &nbsp;·&nbsp; 📍 ${j.estadio || "A definir"}</div>
        </div>
        <div class="match-right">
          <span class="phase-badge ${phaseClass}">${j.fase}${grupo}</span>
          <span class="status-dot ${statusClass}" title="${temPlacar ? 'Encerrado' : 'Agendado'}"></span>
        </div>
      </li>
    `;
  }).join("");
}

// ——— RENDER: ESTATÍSTICAS ———————————————————

function calcularEstatisticasTimes() {
  const mapa = {};
  Object.entries(grupos).forEach(([g, times]) => {
    times.forEach(t => {
      if (!mapa[t]) mapa[t] = { time: t, grupo: g, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 };
    });
  });

  jogos.forEach(j => {
    if (!jogoTemPlacar(j)) return;
    [j.casa, j.fora].forEach(t => { if (!mapa[t]) mapa[t] = { time: t, grupo: "?", jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0 }; });

    mapa[j.casa].jogos++; mapa[j.fora].jogos++;
    mapa[j.casa].golsPro += j.golsCasa; mapa[j.casa].golsContra += j.golsFora;
    mapa[j.fora].golsPro += j.golsFora; mapa[j.fora].golsContra += j.golsCasa;
    if (j.golsCasa > j.golsFora) { mapa[j.casa].vitorias++; mapa[j.fora].derrotas++; }
    else if (j.golsCasa < j.golsFora) { mapa[j.fora].vitorias++; mapa[j.casa].derrotas++; }
    else { mapa[j.casa].empates++; mapa[j.fora].empates++; }
  });

  return Object.values(mapa).sort((a, b) => b.golsPro - a.golsPro || (b.golsPro - b.golsContra) - (a.golsPro - a.golsContra));
}

function renderEstatisticas() {
  const stats = calcularEstatisticasTimes();
  const root = document.getElementById("team-stats");

  root.innerHTML = stats.map(t => `
    <article class="team-card">
      <div class="team-card-header">
        <span class="team-card-flag">${flag(t.time, 32)}</span>
        <div>
          <div class="team-card-name">${t.time}</div>
          <div class="team-card-group">Grupo ${t.grupo}</div>
        </div>
      </div>
      <div class="team-card-stats">
        <div class="stat-row"><span class="stat-label">Jogos</span><span class="stat-value">${t.jogos}</span></div>
        <div class="stat-row"><span class="stat-label">Campanha</span><span class="stat-value">${t.vitorias}V ${t.empates}E ${t.derrotas}D</span></div>
        <div class="stat-row"><span class="stat-label">Gols pró</span><span class="stat-value highlight">${t.golsPro}</span></div>
        <div class="stat-row"><span class="stat-label">Gols contra</span><span class="stat-value">${t.golsContra}</span></div>
        <div class="stat-row"><span class="stat-label">Saldo</span><span class="stat-value" style="color:${(t.golsPro-t.golsContra)>=0?'var(--green)':'var(--red)'}">${t.golsPro - t.golsContra >= 0 ? '+' : ''}${t.golsPro - t.golsContra}</span></div>
      </div>
    </article>
  `).join("");
}

// ——— TABS ————————————————————————————————————

function iniciarTabs() {
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });
}

// ——— RENDER: ARTILHEIROS ————————————————————

function renderArtListItem(jogador, campo, icone, cor) {
  const val = jogador[campo];
  return `
    <li class="art-item">
      <span class="art-rank"></span>
      <span class="art-flag">${flag(jogador.selecao, 22)}</span>
      <div class="art-info">
        <span class="art-nome">${jogador.nome}</span>
        <span class="art-selecao">${jogador.selecao}</span>
      </div>
      <span class="art-val" style="color:${cor}">${icone} ${val}</span>
    </li>
  `;
}

function renderArtilheiros() {
  const sorted = (campo) => [...jogadores].sort((a, b) => b[campo] - a[campo]);

  const makeList = (listId, campo, icone, cor) => {
    const el = document.getElementById(listId);
    const top = sorted(campo).slice(0, 10);
    const semDados = top.every(j => j[campo] === 0);
    if (semDados) {
      el.innerHTML = '<li class="art-empty">A Copa ainda não começou.<br>Edite <code>script.js</code> para adicionar dados.</li>';
      return;
    }
    el.innerHTML = top.map(j => renderArtListItem(j, campo, icone, cor)).join("");
    // Add counter numbers via CSS counter reset
    el.style.counterReset = "art-counter";
  };

  makeList("list-gols", "gols", "⚽", "var(--green)");
  makeList("list-assists", "assists", "🎯", "var(--accent)");
  makeList("list-amarelos", "amarelos", "🟨", "#f5c842");
  makeList("list-vermelhos", "vermelhos", "🟥", "var(--red)");
}

// ——— INICIALIZAR ————————————————————————————

function inicializar() {
  // Fases no select
  const faseSelect = document.getElementById("fase-select");
  const fases = [...new Set(jogos.map(j => j.fase))];
  fases.forEach(f => {
    const opt = document.createElement("option");
    opt.value = f; opt.textContent = f;
    faseSelect.appendChild(opt);
  });

  faseSelect.addEventListener("change", renderJogos);
  document.getElementById("search-time").addEventListener("input", renderJogos);

  // Modal fechar
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.remove("open");
  });
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modal-overlay"))
      document.getElementById("modal-overlay").classList.remove("open");
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") document.getElementById("modal-overlay").classList.remove("open");
  });

  iniciarTabs();
  renderGrupos();
  renderJogos();
  renderEstatisticas();
  renderArtilheiros();
}

inicializar();