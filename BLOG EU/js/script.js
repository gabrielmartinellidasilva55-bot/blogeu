// Função para alternar o tema e salvar a escolha do usuário
function mudarTema() {
    document.body.classList.toggle("modo-escuro");
    
    // Verifica se o modo escuro está ativo e salva no "armazenamento" do navegador
    if (document.body.classList.contains("modo-escuro")) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

// ATENÇÃO: Adicione este bloco abaixo no final do arquivo.
// Ele roda automaticamente assim que QUALQUER página carrega, aplicando o tema salvo!
window.onload = function() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
    }
}


// Mantendo suas funções de acessibilidade que já estavam lá:
let tamanhoFonte = 16; 

function aumentarFonte() {
    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}