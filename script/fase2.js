document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const btnProsseguir = document.getElementById("btn-prosseguir");
  let servicoSelecionado = null;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Remove seleção de todos os cards
      cards.forEach(c => c.classList.remove("selected"));
      // Seleciona apenas o card clicado
      card.classList.add("selected");
      // Armazena o serviço selecionado
      servicoSelecionado = card.getAttribute("data-servico");
      // Habilita botão prosseguir
      btnProsseguir.disabled = false;
    });
  });

  btnProsseguir.addEventListener("click", () => {
    if (!servicoSelecionado) return;

    // Salvar escolha no localStorage
    localStorage.setItem("servicoSelecionado", servicoSelecionado);

    // Redirecionar para fase 3
    window.location.href = "fase3.html";
  });
});
