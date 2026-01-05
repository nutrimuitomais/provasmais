const valor = localStorage.getItem("valor") || "0.00";
const valorFinal = document.getElementById("valorFinal");
const botoesPagamento = document.querySelectorAll(".pagamento");
const btnPagar = document.getElementById("btnPagar");

let metodoSelecionado = null;

// Mostrar valor
valorFinal.textContent = `R$ ${valor}`;

// Seleção do pagamento
botoesPagamento.forEach(botao => {
  botao.addEventListener("click", () => {

    botoesPagamento.forEach(b => b.classList.remove("selected"));
    botao.classList.add("selected");

    metodoSelecionado = botao.getAttribute("data-pagamento");
    btnPagar.disabled = false;
  });
});

// Simulação de pagamento
btnPagar.addEventListener("click", () => {
  if (!metodoSelecionado) return;

  alert(
    "Pagamento iniciado!\n\n" +
    "Método: " + metodoSelecionado.toUpperCase() + "\n" +
    "Valor: R$ " + valor + "\n\n" +
    "Na próxima etapa será integrado o gateway real."
  );

  // Aqui futuramente entra o link do gateway
});
