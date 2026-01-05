const servico = localStorage.getItem("servicoSelecionado");
const conteudo = document.getElementById("conteudo");
const btn = document.getElementById("btnContinuar");

let valorFinal = 0;

function campoMatricula() {
  return `
    <div class="form-group">
      <input type="text" id="matricula" placeholder="Matrícula completa" required>
      <p class="subtitle">
        Preencha corretamente, respeitando letras maiúsculas e numeração.
      </p>
    </div>

    <div class="form-group">
      <input type="number" id="qtdMaterias" placeholder="Quantidade de matérias (opcional)">
      <p class="subtitle">
        Acima de 12 matérias será cobrado R$ 7,00 por matéria extra.
      </p>
    </div>
  `;
}

if (servico === "provas") {
  valorFinal = 43.00;

  conteudo.innerHTML = `
    <h2>Provas</h2>
    ${campoMatricula()}
    <h3>Valor: R$ 43,00</h3>

    <div class="card" id="upsell">
      Adicione Portal por apenas <strong>R$ 2,00</strong>
    </div>
  `;

  btn.style.display = "block";

  document.getElementById("upsell").addEventListener("click", () => {
    localStorage.setItem("servicoSelecionado", "provas_portal");
    localStorage.setItem("valor", "45.00");
    window.location.reload();
  });

}

else if (servico === "provas_portal") {
  valorFinal = 45.00;

  conteudo.innerHTML = `
    <h2>Provas + Portal</h2>
    ${campoMatricula()}
    <h3>Valor: R$ 45,00</h3>
  `;

  btn.style.display = "block";
}

else if (servico === "tcc" || servico === "pre_tcc") {
  conteudo.innerHTML = `
    <h2>Em manutenção</h2>
    <p class="subtitle">
      As opções TCC e Pré-TCC estão temporariamente indisponíveis.
    </p>
    <button onclick="history.back()">Voltar</button>
  `;
}

else if (servico === "extracurriculares") {
  valorFinal = 4.99;

  conteudo.innerHTML = `
    <h2>Extracurriculares</h2>

    <p class="subtitle">
      🔒 Fique tranquilo: caso você não consiga gerar nenhum certificado
      durante 31 dias, devolveremos seu dinheiro.
    </p>

    <p class="subtitle">
      ✔ Sites 100% gratuitos, seguros e confiáveis<br>
      ✔ 20 sugestões de acordo com seu curso<br>
      ✔ Acesso por 31 dias
    </p>

    <h3>Valor: R$ 4,99</h3>
  `;

  btn.style.display = "block";
}

btn.addEventListener("click", () => {
  localStorage.setItem("valor", valorFinal.toFixed(2));
  window.location.href = "fase4.html";
});
