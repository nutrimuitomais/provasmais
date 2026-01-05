document.getElementById("cadastro-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const faculdade = document.getElementById("faculdade").value;
  const outraFaculdade = document.getElementById("outra-faculdade").value.trim();
  const curso = document.getElementById("curso").value;

  if(!nome || !celular || !faculdade || !curso) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Se a pessoa selecionou "Outra" e não digitou, alerta
  if(faculdade === "Outra" && !outraFaculdade) {
    alert("Por favor, digite sua faculdade.");
    return;
  }

  // Salvar dados temporariamente no localStorage
  const cadastro = {
    nome,
    celular,
    faculdade: faculdade === "Outra" ? outraFaculdade : faculdade,
    curso
  };

  localStorage.setItem("cadastro", JSON.stringify(cadastro));

  // Redirecionar para fase 2
  window.location.href = "fase2.html";
});
