document.addEventListener("DOMContentLoaded", () => {
  const detalhesContainer = document.getElementById("detalhes-servico");
  const btnProsseguir = document.getElementById("btn-prosseguir");
  const btnVoltar = document.getElementById("btn-voltar");

  // Recuperar serviço selecionado
  const servico = localStorage.getItem("servicoSelecionado");
  let preco = 0;

  // Função para criar input dinamicamente
  function criarInput(id, label, placeholder = "") {
    return `
      <label for="${id}">${label}</label>
      <input type="text" id="${id}" placeholder="${placeholder}" required>
    `;
  }

  // Carregar conteúdo conforme serviço
  if(servico === "provas") {
    preco = 43.00;
    detalhesContainer.innerHTML = `
      ${criarInput("matricula", "Matrícula completa", "Digite sua matrícula")}
      <p>Valor: R$ ${preco.toFixed(2)}</p>
      <p>Mais de 12 matérias → adicional de R$7,00/matéria</p>
      <p>Se não souber a quantidade, alguma matéria não será feita, avisaremos caso tenha mais de 12 matérias.</p>
      <button id="btn-upsell">Adicionar Portal por +R$2,00?</button>
    `;

    // Habilitar botão prosseguir apenas se preencher matrícula ou aceitar upsell
    const btnUpsell = document.getElementById("btn-upsell");
    btnUpsell.addEventListener("click", () => {
      localStorage.setItem("servicoSelecionado", "provas-portal");
      window.location.reload(); // Recarrega página para Provas + Portal
    });

  } else if(servico === "provas-portal") {
    preco = 45.00;
    detalhesContainer.innerHTML = `
      ${criarInput("matricula", "Matrícula completa", "Digite sua matrícula")}
      <p>Valor: R$ ${preco.toFixed(2)}</p>
      <p>Mais de 12 matérias → adicional de R$7,00/matéria</p>
      <p>Se não souber a quantidade, alguma matéria não será feita, avisaremos caso tenha mais de 12 matérias.</p>
    `;

  } else if(servico === "tcc" || servico === "pre-tcc") {
    detalhesContainer.innerHTML = `
      <p>Estamos em manutenção nessas opções.</p>
      <p>Use o botão "Voltar" para selecionar outro serviço.</p>
    `;
    btnProsseguir.disabled = true;

  } else if(servico === "extracurriculares") {
    preco = 4.99;
    detalhesContainer.innerHTML = `
      <p>
        Fique tranquilo! Caso você não consiga gerar nenhum certificado durante 31 dias, devolveremos seu dinheiro.<br>
        Lembrando que temos acesso quando um certificado é gerado no site com suas informações.<br>
        Use as mesmas informações de login que utilizou em nosso site, pois contabilizamos no sistema seu Gmail.<br>
        Te daremos 20 dicas de sites confiáveis, 100% seguros e gratuitos, para você baixar seus certificados do seu curso específico.
      </p>
      <p>Valor para liberar o conteúdo: R$ ${preco.toFixed(2)}</p>
      <label for="email">Seu Gmail:</label>
      <input type="email" id="email" required placeholder="Digite seu Gmail">
    `;
  }

  btnProsseguir.addEventListener("click", () => {
    // Armazenar dados adicionais
    if(servico === "provas" || servico === "provas-portal") {
      const matricula = document.getElementById("matricula").value.trim();
      if(!matricula) { alert("Preencha a matrícula."); return; }
      localStorage.setItem("matricula", matricula);
    } else if(servico === "extracurriculares") {
      const email = document.getElementById("email").value.trim();
      if(!email) { alert("Preencha seu Gmail."); return; }
      localStorage.setItem("emailExtracurricular", email);
    }

    localStorage.setItem("preco", preco.toFixed(2));

    // Redirecionar para Fase 4
    window.location.href = "fase4.html";
  });

  btnVoltar.addEventListener("click", () => {
    window.location.href = "fase2.html";
  });
});
