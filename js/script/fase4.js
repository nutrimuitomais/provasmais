const resumo = document.getElementById("resumo");

// GERAR NÚMERO ÚNICO DO ALUNO
const numeroAluno = "ALUNO-" + Date.now();

// RECUPERAR DADOS
const nome = localStorage.getItem("nome") || "-";
const celular = localStorage.getItem("celular") || "-";
const faculdade = localStorage.getItem("faculdade") || "-";
const curso = localStorage.getItem("curso") || "-";
const servico = localStorage.getItem("servicoSelecionado") || "-";
const valor = localStorage.getItem("valor") || "0.00";

// SALVAR NÚMERO DO ALUNO
localStorage.setItem("numeroAluno", numeroAluno);

// MONTAR RESUMO
resumo.innerHTML = `
  <div class="card selected">
    <p><strong>Nº do aluno:</strong> ${numeroAluno}</p>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Celular:</strong> ${celular}</p>
    <p><strong>Faculdade:</strong> ${faculdade}</p>
    <p><strong>Curso:</strong> ${curso}</p>
    <p><strong>Serviço:</strong> ${servico}</p>
    <p><strong>Valor final:</strong> R$ ${valor}</p>
  </div>

  <p class="subtitle" style="margin-top:20px;">
    🔒 Seus dados estão protegidos.<br>
    📲 Após a confirmação do pagamento, entraremos em contato pelo WhatsApp.
  </p>
`;

// BOTÃO PAGAMENTO
document.getElementById("btnPagamento").addEventListener("click", () => {
  alert(
    "Pagamento será integrado na próxima etapa.\n\n" +
    "Resumo gerado com sucesso.\n" +
    "Número do aluno: " + numeroAluno
  );
});
