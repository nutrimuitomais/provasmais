(function(){
  emailjs.init('PUBLIC_KEY_AQUI');
})();

function enviarEmail() {
  const dados = {
    aluno_id: localStorage.getItem('alunoId'),
    nome: localStorage.getItem('nome'),
    celular: localStorage.getItem('celular'),
    faculdade: localStorage.getItem('faculdade'),
    curso: localStorage.getItem('curso'),
    servico: localStorage.getItem('servico'),
    valor: localStorage.getItem('valor'),
    metodo: localStorage.getItem('metodoPagamento'),
    matricula: localStorage.getItem('matricula') || 'Não informado',
    materias: localStorage.getItem('materias') || 'Não informado',
    email: localStorage.getItem('email') || 'Não informado'
  };

  emailjs.send(
    'SERVICE_ID_AQUI',
    'TEMPLATE_ID_AQUI',
    dados
  )
  .then(() => {
    alert('Pedido enviado com sucesso! Entraremos em contato.');
    limparDados();
  })
  .catch(() => {
    alert('Erro ao enviar o pedido. Entre em contato via WhatsApp.');
  });
}

function limparDados() {
  localStorage.clear();
}
