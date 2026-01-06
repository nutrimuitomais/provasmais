<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Seleção de Serviço</title>
  <link rel="stylesheet" href="style/style.css">
</head>
<body>

<header class="top-header">
  <img src="assets/logo.png" class="logo">

  <div class="progress-bar">
    <div class="progress" style="width: 50%;"></div>
  </div>
</header>

<main class="container">

  <h1>Selecione o Serviço</h1>

  <div class="cards">
    <div class="card" onclick="selecionar('Provas')">Provas</div>
    <div class="card" onclick="selecionar('Provas + Portal')">Provas + Portal</div>
    <div class="card" onclick="selecionar('Trabalhos')">Trabalhos</div>
    <div class="card" onclick="selecionar('TCC')">TCC</div>
    <div class="card" onclick="selecionar('Pré-TCC')">Pré-TCC</div>
    <div class="card" onclick="selecionar('Extracurriculares')">Extracurriculares</div>
  </div>

  <button class="button" style="margin-top:30px" onclick="prosseguir()">Prosseguir</button>

</main>

<footer class="footer">
  © 2026 • Plataforma Acadêmica
</footer>

<script>
let servicoSelecionado = '';

function selecionar(servico) {
  servicoSelecionado = servico;
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  event.target.classList.add('selected');
}

function prosseguir() {
  if (!servicoSelecionado) {
    alert('Selecione um serviço.');
    return;
  }
  localStorage.setItem('servico', servicoSelecionado);
  window.location.href = 'fase3.html';
}
</script>

</body>
</html>
