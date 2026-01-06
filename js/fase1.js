function avancar() {
  localStorage.setItem('nome', nome.value);
  localStorage.setItem('celular', celular.value);
  localStorage.setItem('faculdade', faculdade.value);
  localStorage.setItem('curso', curso.value);
  window.location.href = 'fase2.html';
}
