const servico = localStorage.getItem('servico');
const box = document.getElementById('conteudo');

let valor = 0;

if (servico === 'Provas') {
  valor = 43;
  box.innerHTML = `
    <label>Matrícula</label>
    <input id="matricula">
    <label>Quantidade de matérias</label>
    <input id="materias" type="number">
    <p>Acima de 12 matérias: +R$7 por matéria</p>
  `;
}

if (servico === 'Extracurriculares') {
  valor = 4.99;
  box.innerHTML = `
    <p><strong>Extracurriculares – R$ 4,99</strong></p>
    <ul>
      <li>Sites gratuitos</li>
      <li>Certificados válidos</li>
      <li>Acesso por 31 dias</li>
      <li>Garantia de devolução</li>
    </ul>
  `;
}

localStorage.setItem('valor', valor);

function avancar() {
  localStorage.setItem('detalhes', box.innerText);
  window.location.href = 'fase4.html';
}
