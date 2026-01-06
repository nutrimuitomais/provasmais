const resumo = document.getElementById('resumo');

const alunoId = 'ALUNO-' + Date.now();
localStorage.setItem('alunoId', alunoId);

resumo.innerHTML = `
<p><strong>ID:</strong> ${alunoId}</p>
<p><strong>Nome:</strong> ${localStorage.getItem('nome')}</p>
<p><strong>Serviço:</strong> ${localStorage.getItem('servico')}</p>
<p><strong>Valor:</strong> R$ ${localStorage.getItem('valor')}</p>
`;

function avancar() {
  window.location.href = 'fase5.html';
}
