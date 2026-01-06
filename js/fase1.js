function salvarDados() {
  const nome = document.getElementById('nome').value;
  const celular = document.getElementById('celular').value;
  const faculdade = document.getElementById('faculdade').value;
  const curso = document.getElementById('curso').value;

  if (!nome || !celular || !faculdade || !curso) {
    alert('Preencha todos os campos.');
    return;
  }

  localStorage.setItem('nome', nome);
  localStorage.setItem('celular', celular);
  localStorage.setItem('faculdade', faculdade);
  localStorage.setItem('curso', curso);

  window.location.href = 'fase2.html';
}
