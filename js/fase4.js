// Recuperar dados
const nome = localStorage.getItem('nome');
const celular = localStorage.getItem('celular');
const faculdade = localStorage.getItem('faculdade');
const curso = localStorage.getItem('curso');
const servico = localStorage.getItem('servico');
const valor = localStorage.getItem('valor');
const matricula = localStorage.getItem('matricula');
const materias = localStorage.getItem('materias');
const email = localStorage.getItem('email');

// Validação básica
if (!nome || !celular || !servico || !valor) {
  window.location.href = 'index.html';
}

// Gerar ID único do aluno
const alunoId = 'ALUNO-' + Date.now();
localStorage.setItem('alunoId', alunoId);

// Montar resumo
let resumoHTML = `
  <p><strong>Nº do Aluno:</strong> ${alunoId}</p>
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Celular:</strong> ${celular}</p>
  <p><strong>Faculdade:</strong> ${faculdade}</p>
  <p><strong>Curso:</strong> ${curso}</p>
  <p><strong>Serviço:</strong> ${servico}</p>
`;

if (matricula) {
  resumoHTML += `<p><strong>Matrícula:</strong> ${matricula}</p>`;
}

if (materias && materias !== 'Não informado') {
  resumoHTML += `<p><strong>Qtd. de Matérias:</strong> ${materias}</p>`;
}

if (email) {
  resumoHTML += `<p><strong>Email:</strong> ${email}</p>`;
}

resumoHTML += `
  <hr style="margin:20px 0">
  <p style="font-size:18px"><strong>Valor Final:</strong> R$ ${valor}</p>
`;

document.getElementById('resumoCard').innerHTML = resumoHTML;

// Avançar para pagamento
function irPagamento() {
  window.location.href = 'fase5.html';
}
