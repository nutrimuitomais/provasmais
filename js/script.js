let servicoSelecionado = null;
let valorSelecionado = null;

function selecionarServico(servico, valor) {
  servicoSelecionado = servico;
  valorSelecionado = valor;

  localStorage.setItem('servico', servico);
  localStorage.setItem('valor', valor);

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
  });

  event.currentTarget.classList.add('selected');

  document.getElementById('btnProsseguir').disabled = false;
}

function irParaFase3() {
  window.location.href = 'fase3.html';
}
