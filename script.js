const grupos = {
  A: ["Canadá", "Classificado AFC 1", "Classificado CAF 1", "Classificado UEFA 1"],
  B: ["México", "Classificado CONMEBOL 1", "Classificado UEFA 2", "Classificado AFC 2"],
  C: [
    "Estados Unidos",
    "Classificado UEFA 3",
    "Classificado CAF 2",
    "Classificado OFC 1",
  ],
  D: ["Classificado CONMEBOL 2", "Classificado UEFA 4", "Classificado AFC 3", "Classificado CONCACAF 1"],
  E: ["Classificado UEFA 5", "Classificado CAF 3", "Classificado AFC 4", "Classificado CONMEBOL 3"],
  F: ["Classificado UEFA 6", "Classificado CONCACAF 2", "Classificado CAF 4", "Classificado AFC 5"],
  G: ["Classificado UEFA 7", "Classificado CONMEBOL 4", "Classificado AFC 6", "Classificado CONCACAF 3"],
  H: ["Classificado UEFA 8", "Classificado CAF 5", "Classificado AFC 7", "Classificado CONMEBOL 5"],
  I: ["Classificado UEFA 9", "Classificado CONCACAF 4", "Classificado CAF 6", "Classificado AFC 8"],
  J: ["Classificado UEFA 10", "Classificado CONMEBOL 6", "Classificado CAF 7", "Classificado AFC 9"],
  K: ["Classificado UEFA 11", "Classificado CONCACAF 5", "Classificado AFC 10", "Classificado CAF 8"],
  L: ["Classificado UEFA 12", "Classificado CONMEBOL 7", "Classificado CONCACAF 6", "Classificado AFC 11"],
};

const jogos = [
  {
    data: "2026-06-11 20:00",
    fase: "Fase de Grupos",
    grupo: "A",
    casa: "Canadá",
    fora: "Classificado AFC 1",
    golsCasa: null,
    golsFora: null,
    estadio: "Toronto Stadium",
  },
  {
    data: "2026-06-12 17:00",
    fase: "Fase de Grupos",
    grupo: "A",
    casa: "Classificado CAF 1",
    fora: "Classificado UEFA 1",
    golsCasa: null,
    golsFora: null,
    estadio: "Vancouver Stadium",
  },
  {
    data: "2026-06-12 20:00",
    fase: "Fase de Grupos",
    grupo: "B",
    casa: "México",
    fora: "Classificado CONMEBOL 1",
    golsCasa: null,
    golsFora: null,
    estadio: "Estadio Azteca",
  },
  {
    data: "2026-06-13 14:00",
    fase: "Fase de Grupos",
    grupo: "C",
    casa: "Estados Unidos",
    fora: "Classificado UEFA 3",
    golsCasa: null,
    golsFora: null,
    estadio: "SoFi Stadium",
  },
  {
    data: "2026-06-13 19:00",
    fase: "Fase de Grupos",
    grupo: "D",
    casa: "Classificado CONMEBOL 2",
    fora: "Classificado UEFA 4",
    golsCasa: null,
    golsFora: null,
    estadio: "Seattle Stadium",
  },
  {
    data: "2026-06-14 14:00",
    fase: "Fase de Grupos",
    grupo: "E",
    casa: "Classificado UEFA 5",
    fora: "Classificado CAF 3",
    golsCasa: null,
    golsFora: null,
    estadio: "Dallas Stadium",
  },
  {
    data: "2026-06-14 19:00",
    fase: "Fase de Grupos",
    grupo: "F",
    casa: "Classificado UEFA 6",
    fora: "Classificado CONCACAF 2",
    golsCasa: null,
    golsFora: null,
    estadio: "Atlanta Stadium",
  },
  {
    data: "2026-06-15 14:00",
    fase: "Fase de Grupos",
    grupo: "G",
    casa: "Classificado UEFA 7",
    fora: "Classificado CONMEBOL 4",
    golsCasa: null,
    golsFora: null,
    estadio: "Houston Stadium",
  },
  {
    data: "2026-06-15 19:00",
    fase: "Fase de Grupos",
    grupo: "H",
    casa: "Classificado UEFA 8",
    fora: "Classificado CAF 5",
    golsCasa: null,
    golsFora: null,
    estadio: "Monterrey Stadium",
  },
  {
    data: "2026-06-16 14:00",
    fase: "Fase de Grupos",
    grupo: "I",
    casa: "Classificado UEFA 9",
    fora: "Classificado CONCACAF 4",
    golsCasa: null,
    golsFora: null,
    estadio: "Philadelphia Stadium",
  },
  {
    data: "2026-06-16 19:00",
    fase: "Fase de Grupos",
    grupo: "J",
    casa: "Classificado UEFA 10",
    fora: "Classificado CONMEBOL 6",
    golsCasa: null,
    golsFora: null,
    estadio: "Kansas City Stadium",
  },
  {
    data: "2026-06-17 14:00",
    fase: "Fase de Grupos",
    grupo: "K",
    casa: "Classificado UEFA 11",
    fora: "Classificado CONCACAF 5",
    golsCasa: null,
    golsFora: null,
    estadio: "Guadalajara Stadium",
  },
  {
    data: "2026-06-17 19:00",
    fase: "Fase de Grupos",
    grupo: "L",
    casa: "Classificado UEFA 12",
    fora: "Classificado CONMEBOL 7",
    golsCasa: null,
    golsFora: null,
    estadio: "New York/New Jersey Stadium",
  },
  {
    data: "2026-06-28 16:00",
    fase: "16 avos de Final",
    casa: "1A",
    fora: "3C",
    golsCasa: null,
    golsFora: null,
    estadio: "Los Angeles Stadium",
  },
  {
    data: "2026-07-03 16:00",
    fase: "Oitavas de Final",
    casa: "Vencedor Jogo 1",
    fora: "Vencedor Jogo 2",
    golsCasa: null,
    golsFora: null,
    estadio: "Miami Stadium",
  },
  {
    data: "2026-07-09 18:00",
    fase: "Quartas de Final",
    casa: "A definir",
    fora: "A definir",
    golsCasa: null,
    golsFora: null,
    estadio: "Boston Stadium",
  },
  {
    data: "2026-07-14 19:00",
    fase: "Semifinal",
    casa: "A definir",
    fora: "A definir",
    golsCasa: null,
    golsFora: null,
    estadio: "Dallas Stadium",
  },
  {
    data: "2026-07-19 16:00",
    fase: "Final",
    casa: "A definir",
    fora: "A definir",
    golsCasa: null,
    golsFora: null,
    estadio: "New York/New Jersey Stadium",
  },
];

const grupoSelect = document.getElementById("grupo-select");
const faseSelect = document.getElementById("fase-select");
const buscaInput = document.getElementById("search-time");
const standingsBody = document.getElementById("group-standings-body");
const matchesList = document.getElementById("matches-list");
const resumoRoot = document.getElementById("resumo");
const teamStatsRoot = document.getElementById("team-stats");

function jogoTemPlacar(jogo) {
  return Number.isFinite(jogo.golsCasa) && Number.isFinite(jogo.golsFora);
}

function formatarData(dataTexto) {
  const data = new Date(dataTexto.replace(" ", "T"));
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(data);
}

function calcularClassificacaoGrupo(grupo) {
  const times = grupos[grupo] || [];
  const tabela = {};

  times.forEach((time) => {
    tabela[time] = {
      time,
      jogos: 0,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      golsPro: 0,
      golsContra: 0,
      saldo: 0,
      pontos: 0,
    };
  });

  jogos
    .filter((jogo) => jogo.fase === "Fase de Grupos" && jogo.grupo === grupo)
    .forEach((jogo) => {
      if (!jogoTemPlacar(jogo)) return;

      const casa = tabela[jogo.casa];
      const fora = tabela[jogo.fora];

      casa.jogos += 1;
      fora.jogos += 1;
      casa.golsPro += jogo.golsCasa;
      casa.golsContra += jogo.golsFora;
      fora.golsPro += jogo.golsFora;
      fora.golsContra += jogo.golsCasa;

      if (jogo.golsCasa > jogo.golsFora) {
        casa.vitorias += 1;
        casa.pontos += 3;
        fora.derrotas += 1;
      } else if (jogo.golsCasa < jogo.golsFora) {
        fora.vitorias += 1;
        fora.pontos += 3;
        casa.derrotas += 1;
      } else {
        casa.empates += 1;
        fora.empates += 1;
        casa.pontos += 1;
        fora.pontos += 1;
      }
    });

  return Object.values(tabela)
    .map((linha) => ({ ...linha, saldo: linha.golsPro - linha.golsContra }))
    .sort((a, b) => {
      if (b.pontos !== a.pontos) return b.pontos - a.pontos;
      if (b.saldo !== a.saldo) return b.saldo - a.saldo;
      if (b.golsPro !== a.golsPro) return b.golsPro - a.golsPro;
      return a.time.localeCompare(b.time);
    });
}

function renderizarClassificacao(grupo) {
  const classificacao = calcularClassificacaoGrupo(grupo);
  standingsBody.innerHTML = classificacao
    .map(
      (linha, indice) => `
      <tr>
        <td>${indice + 1}</td>
        <td>${linha.time}</td>
        <td>${linha.jogos}</td>
        <td>${linha.vitorias}</td>
        <td>${linha.empates}</td>
        <td>${linha.derrotas}</td>
        <td>${linha.golsPro}</td>
        <td>${linha.golsContra}</td>
        <td>${linha.saldo}</td>
        <td><strong>${linha.pontos}</strong></td>
      </tr>
    `
    )
    .join("");
}

function renderizarJogos() {
  const faseAtual = faseSelect.value;
  const termo = buscaInput.value.trim().toLowerCase();
  const jogosFiltrados = jogos.filter((jogo) => {
    const faseOk = faseAtual === "Todas" || jogo.fase === faseAtual;
    const buscaOk =
      termo === "" ||
      jogo.casa.toLowerCase().includes(termo) ||
      jogo.fora.toLowerCase().includes(termo);
    return faseOk && buscaOk;
  });

  if (!jogosFiltrados.length) {
    matchesList.innerHTML =
      '<li class="match-item">Nenhum jogo encontrado para os filtros atuais.</li>';
    return;
  }

  matchesList.innerHTML = jogosFiltrados
    .map(
      (jogo) => {
        const placar = jogoTemPlacar(jogo)
          ? `${jogo.casa} ${jogo.golsCasa} x ${jogo.golsFora} ${jogo.fora}`
          : `${jogo.casa} x ${jogo.fora}`;
        const status = jogoTemPlacar(jogo) ? "Encerrado" : "Agendado";

        return `
      <li class="match-item">
        <div>
          <div class="match-meta">${formatarData(jogo.data)} - ${jogo.estadio}</div>
          <div class="match-score">${placar}</div>
          <div class="match-meta">Status: ${status}</div>
        </div>
        <span class="badge">${jogo.fase}${jogo.grupo ? ` - Grupo ${jogo.grupo}` : ""}</span>
      </li>
    `;
      }
    )
    .join("");
}

function calcularEstatisticasTimes() {
  const mapa = {};

  Object.values(grupos)
    .flat()
    .forEach((time) => {
      mapa[time] = {
        time,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0,
      };
    });

  jogos.forEach((jogo) => {
    if (!jogoTemPlacar(jogo)) return;

    if (!mapa[jogo.casa]) {
      mapa[jogo.casa] = {
        time: jogo.casa,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0,
      };
    }
    if (!mapa[jogo.fora]) {
      mapa[jogo.fora] = {
        time: jogo.fora,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsPro: 0,
        golsContra: 0,
        saldo: 0,
      };
    }

    const casa = mapa[jogo.casa];
    const fora = mapa[jogo.fora];
    casa.jogos += 1;
    fora.jogos += 1;
    casa.golsPro += jogo.golsCasa;
    casa.golsContra += jogo.golsFora;
    fora.golsPro += jogo.golsFora;
    fora.golsContra += jogo.golsCasa;

    if (jogo.golsCasa > jogo.golsFora) {
      casa.vitorias += 1;
      fora.derrotas += 1;
    } else if (jogo.golsCasa < jogo.golsFora) {
      fora.vitorias += 1;
      casa.derrotas += 1;
    } else {
      casa.empates += 1;
      fora.empates += 1;
    }
  });

  return Object.values(mapa)
    .map((time) => ({ ...time, saldo: time.golsPro - time.golsContra }))
    .sort((a, b) => b.golsPro - a.golsPro || b.saldo - a.saldo);
}

function renderizarEstatisticasTimes() {
  const estatisticas = calcularEstatisticasTimes();
  teamStatsRoot.innerHTML = estatisticas
    .map(
      (time) => `
      <article class="team-card">
        <h3>${time.time}</h3>
        <p>Jogos: <strong>${time.jogos}</strong></p>
        <p>Campanha: ${time.vitorias}V ${time.empates}E ${time.derrotas}D</p>
        <p>Gols: ${time.golsPro} pró / ${time.golsContra} contra</p>
        <p>Saldo: <strong>${time.saldo}</strong></p>
      </article>
    `
    )
    .join("");
}

function renderizarResumo() {
  const jogosFinalizados = jogos.filter(jogoTemPlacar);
  const totalJogos = jogos.length;
  const totalFinalizados = jogosFinalizados.length;
  const totalGols = jogosFinalizados.reduce(
    (acumulado, jogo) => acumulado + jogo.golsCasa + jogo.golsFora,
    0
  );
  const mediaGols = totalFinalizados ? (totalGols / totalFinalizados).toFixed(2) : "0.00";
  const selecoesUnicas = new Set(Object.values(grupos).flat()).size;
  const topAtaque =
    calcularEstatisticasTimes().find((time) => time.jogos > 0) || null;

  const cards = [
    { titulo: "Jogos programados", valor: totalJogos },
    { titulo: "Jogos finalizados", valor: totalFinalizados },
    { titulo: "Total de gols", valor: totalGols },
    { titulo: "Média de gols/jogo", valor: mediaGols },
    { titulo: "Seleções no painel", valor: selecoesUnicas },
    {
      titulo: "Melhor ataque",
      valor: topAtaque ? `${topAtaque.time} (${topAtaque.golsPro})` : "-",
    },
  ];

  resumoRoot.innerHTML = cards
    .map(
      (card) => `
      <article class="summary-card">
        <h3>${card.titulo}</h3>
        <p>${card.valor}</p>
      </article>
    `
    )
    .join("");
}

function inicializar() {
  Object.keys(grupos).forEach((grupo, indice) => {
    const option = document.createElement("option");
    option.value = grupo;
    option.textContent = `Grupo ${grupo}`;
    if (indice === 0) option.selected = true;
    grupoSelect.appendChild(option);
  });

  const fases = [...new Set(jogos.map((jogo) => jogo.fase))];
  fases.forEach((fase) => {
    const option = document.createElement("option");
    option.value = fase;
    option.textContent = fase;
    faseSelect.appendChild(option);
  });

  grupoSelect.addEventListener("change", () =>
    renderizarClassificacao(grupoSelect.value)
  );
  faseSelect.addEventListener("change", renderizarJogos);
  buscaInput.addEventListener("input", renderizarJogos);

  renderizarResumo();
  renderizarClassificacao(grupoSelect.value);
  renderizarJogos();
  renderizarEstatisticasTimes();
}

inicializar();
