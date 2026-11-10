
// ==========================================
// FLASHCARDS INTERATIVOS
// ==========================================

function configurarFlashcard(
    cardId,
    perguntaId,
    respostaId,
    instrucaoId
) {
    const card = document.getElementById(cardId);
    const pergunta = document.getElementById(perguntaId);
    const resposta = document.getElementById(respostaId);
    const instrucao = document.getElementById(instrucaoId);

    if (!card || !pergunta || !resposta || !instrucao) {
        return;
    }

    card.addEventListener("click", () => {
        const estaAberto =
            card.getAttribute("aria-expanded") === "true";

        const novoEstado = !estaAberto;

        card.setAttribute(
            "aria-expanded",
            String(novoEstado)
        );

        pergunta.hidden = novoEstado;
        resposta.hidden = !novoEstado;

        instrucao.textContent = novoEstado
            ? "Clique para ver a pergunta"
            : "Clique para revelar a resposta";
    });
}

// Flashcard de Nomes Significativos
configurarFlashcard(
    "flashcard-nomes",
    "pergunta-flashcard",
    "resposta-flashcard",
    "instrucao-flashcard"
);

// Flashcard de Funções e Métodos
configurarFlashcard(
    "flashcard-funcoes",
    "pergunta-funcoes",
    "resposta-funcoes",
    "instrucao-funcoes"
);

// ==========================================
// QUIZZES INTERATIVOS
// ==========================================

function configurarQuiz(quiz) {
    const alternativas = quiz.querySelectorAll(".alternativa");
    const resultado = quiz.querySelector(".resultado");
    const botaoReiniciar = quiz.querySelector(".reiniciar");

    alternativas.forEach((alternativa) => {
        alternativa.addEventListener("click", () => {

            const acertou =
                alternativa.dataset.correta === "true";

            // Bloqueia respostas após a escolha
            alternativas.forEach((botao) => {
                botao.disabled = true;

                if (botao.dataset.correta === "true") {
                    botao.classList.add("correta");
                }
            });

            if (acertou) {
                resultado.textContent =
                    "Resposta correta! Muito bem!";
            } else {
                alternativa.classList.add("incorreta");

                resultado.textContent =
                    "Ainda não! A alternativa destacada " +
                    "em verde é a resposta correta.";
            }

            botaoReiniciar.hidden = false;
        });
    });

    // Reinicia somente o quiz selecionado
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
}

// Configura todos os quizzes da página
const quizzes = document.querySelectorAll("[data-quiz]");

quizzes.forEach((quiz) => {
    configurarQuiz(quiz);
});
