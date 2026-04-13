# Painel Local da Copa do Mundo 2026

Site estático para acompanhamento da Copa do Mundo 2026 com:

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

### Rodar pelo VSCode (task pronta)

1. Abra a pasta do projeto no VSCode
2. Use `Terminal > Run Task...`
3. Escolha `Copa: iniciar servidor local`
4. Acesse `http://localhost:8080` no navegador

### Se abrir "Lista de diretórios para /"

Você iniciou o servidor na pasta errada (normalmente um nível acima do projeto).

No terminal, faça:

```bash
cd "C:\GitHub\Copa do Mundo\CopaDoMundo2026"
python -m http.server 8080
```

Depois abra:
- `http://localhost:8080/` (abre `index.html`)
- ou `http://localhost:8080/index.html`

## Estrutura

- `index.html`: estrutura da página
- `styles.css`: estilos da interface
- `script.js`: dados dos grupos/jogos e lógica de cálculos

## Como personalizar

Edite o array `jogos` e o objeto `grupos` dentro de `script.js` para incluir novas partidas, fases ou seleções.