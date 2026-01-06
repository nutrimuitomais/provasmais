const servico = localStorage.getItem('servico');
const container = document.getElementById('conteudoServico');
const titulo = document.getElementById('tituloServico');

let valorFinal = 0;

if (!servico) {
  window.location.href = 'fase2.html';
}

// 🔹 PROVAS
if (servico === 'Provas') {
  titulo.innerText = 'Provas';

  container.innerHTML = `
    <p><strong>Valor:</strong> R$ 43,00</p><br>

    <label>Matrícula completa</label>
    <input type="text" id="matricula" placeholder="Digite exatamente como está no portal">

    <label>Quantidade de matérias (opcional)</label>
    <input type="number" id="materias" placeholder="Ex: 5">

    <div class="alert">
      Acima de 12 matérias será cobrado R$ 7,00 por matéria adicional.
    </div>

    <div class="card" onclick="adicionarPortal()">
      ➕ Adicionar Portal por apenas <strong>R$ 2,00</strong>
    </div>
  `;

  valorFinal = 43;
}

// 🔹 PROVAS + PORTAL
if (servico === 'Provas + Portal') {
  titulo.innerText = 'Provas + Portal';

  container.innerHTML = `
    <p><strong>Valor:</strong> R$ 45,00</p><br>

    <label>Matrícula completa</label>
    <input type="text" id="matricula" placeholder="Digite exatamente como está no portal">

    <label>Quantidade de matérias (opcional)</label>
    <input type="number" id="materias" placeholder="Ex: 5">
  `;

  valorFinal = 45;
}

// 🔹 TCC / PRÉ-TCC
if (servico === 'TCC' || servico === 'Pré-TCC') {
  titulo.innerText = servico;

  container.innerHTML = `
    <div class="alert">
      🚧 Estamos em manutenção nesta opção no momento.
    </div>

    <button class="button" onclick="voltar()">Voltar</button>
  `;

  document.querySelector('.button').style.display = 'none';
}

// 🔹 EXTRACURRICULARES
if (servico === 'Extracurriculares') {
  titulo.innerText = 'Extracurriculares';

  container.innerHTML = `
    <p><strong>Valor:</strong> R$ 4,99</p><br>

    <div class="alert">
      ✔ Sites gratuitos e seguros<br>
      ✔ Certificados válidos<br>
      ✔ 20 sugestões conforme seu curso<br>
      ✔ Acesso por 31 dias<br><br>
      💰 Garantia: Caso não consiga gerar nenhum certificado em 31 dias, devolvemos seu dinheiro.
    </div>

    <label>Gmail para acesso</label>
    <input type="email" id="email" placeholder="Digite seu Gmail">
  `;

  valorFinal = 4.99;
}

// ➕ UPSSELL
function adicionarPortal() {
  localStorage.setItem('servico', 'Provas + Portal');
  localStorage.setItem('upsell', 'true');
  valorFinal = 45;
  alert('Portal adicionado com sucesso!');
}

// ▶️ PROSSEGUIR
function prosseguir() {
  localStorage.setItem('valor', valorFinal.toFixed(2));

  if (servico.includes('Provas')) {
    const matricula = document.getElementById('matricula')?.value;
    if (!matricula) {
      alert('Informe a matrícula.');
      return;
    }
    localStorage.setItem('matricula', matricula);

    const materias = document.getElementById('materias')?.value;
    localStorage.setItem('materias', materias || 'Não informado');
  }

  if (servico === 'Extracurriculares') {
    const email = document.getElementById('email').value;
    if (!email) {
      alert('Informe o Gmail.');
      return;
    }
    localStorage.setItem('email', email);
  }

  window.location.href = 'fase4.html';
}

// ⬅️ VOLTAR
function voltar() {
  window.location.href = 'fase2.html';
}
