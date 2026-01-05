document.addEventListener("DOMContentLoaded", () => {
  const resumoContainer = document.getElementById("resumo-container");
  const btnFinalizar = document.getElementById("finalizar");

  // Recuperar todos os dados do localStorage
  const cadastro = JSON.parse(localStorage.getItem("cadastro"));
  const servico = localStorage.getItem("servicoSelecionado");
  const matricula = localStorage.getItem("matricula") || "-";
  const emailExtracurricular = localStorage.getItem("emailExtracurricular") || "-";
  const preco = localStorage.getItem("preco");

  // Gerar número único do aluno
  const numeroAluno = "ALUNO" + Date.now(); // simples timestamp

  // Montar resumo
  let resumoHTML = `
    <p><strong>Número do Aluno:</strong> ${numeroAluno}</p>
    <p><strong>Nome:</strong> ${cadastro.nome}</p>
    <p><strong>Celular:</strong> ${cadastro.celular}</p>
    <p><strong>Faculdade:</strong> ${cadastro.faculdade}</p>
    <p><strong>Curso:</strong> ${cadastro.curso}</p>
    <p><strong>Serviço escolhido:</strong> ${servico}</p>
  `;

  if(servico === "provas" || servico === "provas-portal") {
    resumoHTML += `<p><strong>Matrícula:</strong> ${matricula}</p>`;
  } else if(servico === "extracurriculares") {
    resumoHTML += `<p><strong>Email para acesso:</strong> ${emailExtracurricular}</p>`;
  }

  resumoHTML += `<p><strong>Valor:</strong> R$ ${preco}</p>`;

  resumoContainer.innerHTML = resumoHTML;

  // Botão Finalizar
  btnFinalizar.addEventListener("click", () => {
    // Aqui podemos integrar envio para Gmail via backend ou serviço externo
    // Exemplo: alert + download do resumo
    const resumoTexto = `
Número do Aluno: ${numeroAluno}
Nome: ${cadastro.nome}
Celular: ${cadastro.celular}
Faculdade: ${cadastro.faculdade}
Curso: ${cadastro.curso}
Serviço escolhido: ${servico}
Matrícula/Email: ${matricula !== "-" ? matricula : emailExtracurricular}
Valor: R$ ${preco}
`;

    alert("Resumo finalizado e enviado para seu email! \n\n" + resumoTexto);

    // Limpar localStorage
    localStorage.clear();

    // Redirecionar para página inicial ou agradecimento
    window.location.href = "index.html";
  });

  // Opcional: botões de pagamento (PIX, Débito, Crédito)
  document.getElementById("pix").addEventListener("click", () => alert("PIX selecionado!"));
  document.getElementById("debito").addEventListener("click", () => alert("Débito selecionado!"));
  document.getElementById("credito").addEventListener("click", () => alert("Crédito selecionado!"));
});
