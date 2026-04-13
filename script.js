const grupos = {
  A: ["Qatar", "Equador", "Senegal", "Holanda"],
  B: ["Inglaterra", "Irã", "EUA", "País de Gales"],
  C: ["Argentina", "Arábia Saudita", "México", "Polônia"],
  D: ["França", "Austrália", "Dinamarca", "Tunísia"],
  E: ["Espanha", "Costa Rica", "Alemanha", "Japão"],
  F: ["Bélgica", "Canadá", "Marrocos", "Croácia"],
  G: ["Brasil", "Sérvia", "Suíça", "Camarões"],
  H: ["Portugal", "Gana", "Uruguai", "Coreia do Sul"],
};

const jogos = [
  {
    data: "2022-11-20 13:00",
    fase: "Fase de Grupos",
    grupo: "A",
    casa: "Qatar",
    fora: "Equador",
    golsCasa: 0,
    golsFora: 2,
    estadio: "Al Bayt",
  },
  {
    data: "2022-11-21 13:00",
    fase: "Fase de Grupos",
    grupo: "A",
    casa: "Senegal",
    fora: "Holanda",
    golsCasa: 0,
    golsFora: 2,
    estadio: "Al Thumama",
  },
  {
    data: "2022-11-21 10:00",
    fase: "Fase de Grupos",
    grupo: "B",
    casa: "Inglaterra",
    fora: "Irã",
    golsCasa: 6,
    golsFora: 2,
    estadio: "Khalifa",
  },
  {
    data: "2022-11-21 16:00",
    fase: "Fase de Grupos",
    grupo: "B",
    casa: "EUA",
    fora: "País de Gales",
    golsCasa: 1,
    golsFora: 1,
    estadio: "Ahmad Bin Ali",
  },
  {
    data: "2022-11-22 07:00",
    fase: "Fase de Grupos",
    grupo: "C",
    casa: "Argentina",
    fora: "Arábia Saudita",
    golsCasa: 1,
    golsFora: 2,
    estadio: "Lusail",
  },
  {
    data: "2022-11-22 10:00",
    fase: "Fase de Grupos",
    grupo: "C",
    casa: "México",
    fora: "Polônia",
    golsCasa: 0,
    golsFora: 0,
    estadio: "Stadium 974",
  },
  {
    data: "2022-11-22 13:00",
    fase: "Fase de Grupos",
    grupo: "D",
    casa: "Dinamarca",
    fora: "Tunísia",
    golsCasa: 0,
    golsFora: 0,
    estadio: "Education City",
  },
  {
    data: "2022-11-22 16:00",
    fase: "Fase de Grupos",
    grupo: "D",
    casa: "França",
    fora: "Austrália",
    golsCasa: 4,
    golsFora: 1,
    estadio: "Al Janoub",
  },
  {
    data: "2022-11-23 10:00",
    fase: "Fase de Grupos",
    grupo: "E",
    casa: "Alemanha",
    fora: "Japão",
    golsCasa: 1,
    golsFora: 2,
    estadio: "Khalifa",
  },
  {
    data: "2022-11-23 13:00",
    fase: "Fase de Grupos",
    grupo: "E",
    casa: "Espanha",
    fora: "Costa Rica",
    golsCasa: 7,
    golsFora: 0,
    estadio: "Al Thumama",
  },
  {
    data: "2022-11-23 16:00",
    fase: "Fase de Grupos",
    grupo: "F",
    casa: "Bélgica",
    fora: "Canadá",
    golsCasa: 1,
    golsFora: 0,
    estadio: "Ahmad Bin Ali",
  },
  {
    data: "2022-11-23 19:00",
    fase: "Fase de Grupos",
    grupo: "F",
    casa: "Marrocos",
    fora: "Croácia",
    golsCasa: 0,
    golsFora: 0,
    estadio: "Al Bayt",
  },
  {
    data: "2022-11-24 13:00",
    fase: "Fase de Grupos",
    grupo: "G",
    casa: "Brasil",
    fora: "Sérvia",
    golsCasa: 2,
    golsFora: 0,
    estadio: "Lusail",
  },
  {
    data: "2022-11-24 16:00",
    fase: "Fase de Grupos",
    grupo: "G",
    casa: "Suíça",
    fora: "Camarões",
    golsCasa: 1,
    golsFora: 0,
    estadio: "Al Janoub",
  },
  {
    data: "2022-11-24 10:00",
    fase: "Fase de Grupos",
    grupo: "H",
    casa: "Uruguai",
    fora: "Coreia do Sul",
    golsCasa: 0,
    golsFora: 0,
    estadio: "Education City",
  },
  {
    data: "2022-11-24 19:00",
    fase: "Fase de Grupos",
    grupo: "H",
    casa: "Portugal",
    fora: "Gana",
    golsCasa: 3,
    golsFora: 2,
    estadio: "Stadium 974",
  },
  {
    data: "2022-12-03 12:00",
    fase: "Oitavas de Final",
    casa: "Holanda",
    fora: "EUA",
    golsCasa: 3,
    golsFora: 1,
    estadio: "Khalifa",
  },
  {
    data: "2022-12-03 16:00",
    fase: "Oitavas de Final",
    casa: "Argentina",
    fora: "Austrália",
    golsCasa: 2,
    golsFora: 1,
    estadio: "Ahmad Bin Ali",
  },
  {
    data: "2022-12-09 12:00",
    fase: "Quartas de Final",
    casa: "Croácia",
    fora: "Brasil",
    golsCasa: 1,
    golsFora: 1,
    estadio: "Education City",
  },
  {
    data: "2022-12-13 16:00",
    fase: "Semifinal",
    casa: "Argentina",
    fora: "Croácia",
    golsCasa: 3,
    golsFora: 0,
    estadio: "Lusail",
  },
  {
    data: "2022-12-18 12:00",
    fase: "Final",
    casa: "Argentina",
    fora: "França",
    golsCasa: 3,
    golsFora: 3,
    estadio: "Lusail",
  },
];

const grupoSelect = document.getElementById("grupo-select");
const faseSelect = document.getElementById("fase-select");
const buscaInput = document.getElementById("search-time");
const standingsBody = document.getElementById("group-standings-body");
const matchesList = document.getElementById("matches-list");
const resumoRoot = document.getElementById("resumo");
const teamStatsRoot = document.getElementById("team-stats");

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
      (jogo) => `
      <li class="match-item">
        <div>
          <div class="match-meta">${formatarData(jogo.data)} - ${jogo.estadio}</div>
          <div class="match-score">${jogo.casa} ${jogo.golsCasa} x ${jogo.golsFora} ${jogo.fora}</div>
        </div>
        <span class="badge">${jogo.fase}${jogo.grupo ? ` - Grupo ${jogo.grupo}` : ""}</span>
      </li>
    `
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
  const totalJogos = jogos.length;
  const totalGols = jogos.reduce(
    (acumulado, jogo) => acumulado + jogo.golsCasa + jogo.golsFora,
    0
  );
  const mediaGols = (totalGols / totalJogos).toFixed(2);
  const selecoesUnicas = new Set(
    jogos.flatMap((jogo) => [jogo.casa, jogo.fora])
  ).size;
  const topAtaque =
    calcularEstatisticasTimes().sort((a, b) => b.golsPro - a.golsPro)[0] ||
    null;

  const cards = [
    { titulo: "Jogos cadastrados", valor: totalJogos },
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
