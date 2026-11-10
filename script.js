
// =====================================
// FLASHCARD DE NOMES SIGNIFICATIVOS
// =====================================

const flashcard = document.getElementById("flashcard-nomes");

const perguntaFlashcard = document.getElementById(
    "pergunta-flashcard"
);

const respostaFlashcard = document.getElementById(
    "resposta-flashcard"
);

const instrucaoFlashcard = document.getElementById(
    "instrucao-flashcard"
);

flashcard.addEventListener("click", () => {
    const estaAberto =
        flashcard.getAttribute("aria-expanded") === "true";

    flashcard.setAttribute(
        "aria-expanded",
        String(!estaAberto)
    );

    perguntaFlashcard.hidden = !estaAberto;
    respostaFlashcard.hidden = estaAberto;

    instrucaoFlashcard.textContent = estaAberto
        ? "Clique para revelar a resposta"
        : "Clique para ver a pergunta";
});

// =====================================
// QUIZ DE CLEAN CODE
// =====================================

const alternativas = document.querySelectorAll(".alternativa");

const resultado = document.getElementById("resultado-quiz");

const botaoReiniciar = document.getElementById("reiniciar-quiz");

alternativas.forEach((alternativa) => {
    alternativa.addEventListener("click", () => {

        const correta = alternativa.dataset.correta === "true";

        alternativas.forEach((botao) => {
            botao.disabled = true;

            if (botao.dataset.correta === "true") {
                botao.classList.add("correta");
            }
        });

        if (correta) {
            resultado.textContent =
                "Resposta correta! Funções devem ter responsabilidades claras.";
        } else {
            alternativa.classList.add("incorreta");

            resultado.textContent =
                "Quase! A resposta correta é a alternativa B. " +
                "Cada função deve ter uma responsabilidade bem definida.";
        }

        botaoReiniciar.hidden = false;
    });
});

botaoReiniciar.addEventListener("click", () => {

    alternativas.forEach((alternativa) => {
        alternativa.disabled = false;

        alternativa.classList.remove(
            "correta",
            "incorreta"
        );
    });

    resultado.textContent = "";
    botaoReiniciar.hidden = true;
});
