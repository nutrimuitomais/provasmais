document.getElementById('valor').innerText = localStorage.getItem('valor');

function pagar() {
  // Aqui entra EmailJS depois
  window.location.href = 'sucesso.html';
}
