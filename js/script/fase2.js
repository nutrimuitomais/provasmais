const cards = document.querySelectorAll(".card");
const botao = document.getElementById("btnProsseguir");

let opcaoSelecionada = null;

cards.forEach(card => {
  card.addEventListener("click", () => {

    cards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    opcaoSelecionada = card.getAttribute("data-value");
    botao.disabled = false;

  });
});

botao.addEventListener("click", () => {
  if (!opcaoSelecionada) return;

  localStorage.setItem("servicoSelecionado", opcaoSelecionada);
  window.location.href = "fase3.html";
});
