const http = require("http");
const port = process.env.PORT || 3000;
const nome = process.env.NOME_SITE || "Biblioteca da Escola";

http.createServer((req, res) => {
  console.log(`Acesso recebido: ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html>
<html lang="pt-br">
<head><meta charset="UTF-8"><title>${nome}</title>
<style>
body { font-family: Arial; max-width: 800px; margin: 40px auto; padding: 20px; }
header { background: #dceaf7; padding: 20px; border-radius: 8px; }
li { margin: 8px 0; }
</style></head>
<body>
<header><h1>${nome}</h1><p>Projeto de Computação em Nuvem II</p></header>
<main><h2>Livros em destaque</h2>
<ul><li>Introdução à Programação</li><li>Redes de Computadores</li>
<li>Segurança na Internet</li></ul>
<h2>Contato</h2><p>Atendimento: segunda a sexta-feira.</p></main>
</body></html>`);
}).listen(port, () => console.log(`Servidor ativo na porta ${port}`));