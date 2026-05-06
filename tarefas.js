function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

async function salvar() {
  const nome = document.getElementById("nome").value;
  const inicio = document.getElementById("inicio").value;
  const fim = document.getElementById("fim").value;
  const descricao = document.getElementById("descricao").value;

  if (!nome || !inicio || !fim || !descricao) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    await fetch("http://127.0.0.1:3000/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome,
        descricao,
        dataInicio: inicio,
        dataFim: fim
      })
    });

    alert("Tarefa salva com sucesso!");
    location.href = "home.html";
  } catch (erro) {
    console.error("Erro ao salvar:", erro);
  }
}