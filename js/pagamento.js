const valor = localStorage.getItem('valor');
const alunoId = localStorage.getItem('alunoId');

if (!valor || !alunoId) {
  window.location.href = 'index.html';
}

// Mostrar valor final
document.getElementById('valorFinal').innerHTML = `
  <h2>Valor Final</h2>
  <p style="font-size:22px; margin-top:10px">
    <strong>R$ ${valor}</strong>
  </p>
`;

let metodoSelecionado = '';

// Selecionar método
function selecionarMetodo(metodo) {
  metodoSelecionado = metodo;
  document.getElementById('btnPagar').disabled = false;

  document.querySelectorAll('.metodo').forEach(card => {
    card.classList.remove('selected');
  });

  event.target.classList.add('selected');
}

// Simular pagamento (preparado para gateway real)
function pagar() {
  if (!metodoSelecionado) {
    alert('Selecione uma forma de pagamento.');
    return;
  }

  localStorage.setItem('metodoPagamento', metodoSelecionado);

  // 🚀 Aqui entra o gateway real (Mercado Pago / Stripe / Asaas)
  // Por enquanto, simulamos pagamento aprovado

  alert('Pagamento aprovado com sucesso!');

  // Após pagamento → envio de email
  enviarEmail();

  // Limpeza opcional / redirecionamento futuro
  // window.location.href = 'sucesso.html';
}
