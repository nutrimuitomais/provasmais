// CONFIGURAÇÕES EMAILJS
(function () {
  emailjs.init("SUA_PUBLIC_KEY_AQUI");
})();

const valor = localStorage.getItem("valor") || "0.00";
const btnPagar = document.getElementById("btnPagar");
const botoesPagamento = document.querySelectorAll(".pagamento");

let metodoSelecionado = null;

document.getElementById("valorFinal").textContent = `R$ ${valor}`;

// Seleção do método
botoesPagamento.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesPagamento.forEach(b => b.classList.remove("selected"));
    botao.classList.add("selected");
    metodoSelecionado = botao.dataset.pagamento;
    btnPagar.disabled = false;
  });
});

// PAGAMENTO + ENVIO DE E-MAIL
btnPagar.addEventListener("click", () => {

  const dados = {
    numero_aluno: localStorage.getItem("numeroAluno"),
    nome: localStorage.getItem("nome"),
    celular: localStorage.getItem("celular"),
    faculdade: localStorage.getItem("faculdade"),
    curso: localStorage.getItem("curso"),
    servico: localStorage.getItem("servicoSelecionado"),
    valor: valor
  };

  emailjs.send(
    "SEU_SERVICE_ID",
    "SEU_TEMPLATE_ID",
    dados
  ).then(() => {

    alert(
      "Pedido confirmado!\n\n" +
      "Resumo enviado para nosso sistema.\n" +
      "Entraremos em contato pelo WhatsApp."
    );

    localStorage.clear();

  }).catch(() => {
    alert("Erro ao enviar o pedido. Tente novamente.");
  });

});
