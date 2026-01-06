function selecionarServico(servico) {
  document.getElementById('servicoSelecionado').value = servico;

  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove('selected');
  });

  event.currentTarget.classList.add('selected');
}
