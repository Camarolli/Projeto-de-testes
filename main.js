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

    // Cria nova linha e colunas
    const novaLinha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome;

    const colunaNumero = document.createElement("td");
    colunaNumero.textContent = numero;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaNumero);

    tabelaCorpo.appendChild(novaLinha);

    // Limpa os campos
    formulario.reset();
});

