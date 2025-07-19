// Pega os elementos necessários
const formulario = document.getElementById("formulário");
const nomeInput = document.getElementById("Seu-nome");
const numeroInput = document.getElementById("Seu-número");
const tabelaCorpo = document.querySelector("tbody");
const botaoCadastrar = document.querySelector('button[form="formulário"]');

// Evento de clique no botão
botaoCadastrar.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o envio padrão

    const nome = nomeInput.value.trim();
    const numero = numeroInput.value.trim();

    // Validação básica
    if (nome === "" || numero === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Verifica se já existe um registro igual
    const linhas = tabelaCorpo.querySelectorAll("tr");
    for (let linha of linhas) {
        const nomeExistente = linha.children[0].textContent;
        const numeroExistente = linha.children[1].textContent;

        if (nomeExistente === nome && numeroExistente === numero) {
            alert("Esse registro já existe!");
            return; // cancela o cadastro
        }
    }


    // Cria nova linha e colunas
    const novaLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome;

    const colunaNumero = document.createElement("td");
    colunaNumero.textContent = String(numero).slice(0, 12);

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaNumero);

    tabelaCorpo.appendChild(novaLinha);

    // Limpa os campos
    formulario.reset();
});

