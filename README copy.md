# Painel Local da Copa do Mundo

Site estático para acompanhamento da Copa do Mundo com:

- Classificação por grupo (tabela com pontos, saldo e gols)
- Lista de jogos com filtro por fase e busca por seleção
- Estatísticas gerais e por seleção

## Como executar localmente

Como o projeto é HTML/CSS/JS puro, você pode:

1. Abrir `index.html` diretamente no navegador, **ou**
2. Subir um servidor local:

```bash
python3 -m http.server 8080
```

Depois acesse: `http://localhost:8080`

## Estrutura

- `index.html`: estrutura da página
- `styles.css`: estilos da interface
- `script.js`: dados dos grupos/jogos e lógica de cálculos

## Como personalizar

Edite o array `jogos` e o objeto `grupos` dentro de `script.js` para incluir novas partidas, fases ou seleções.