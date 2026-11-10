
// ======================================
// FLASHCARDS
// ======================================

function configurarFlashcards() {

    const flashcards = document.querySelectorAll(".flashcard");

    flashcards.forEach((card) => {

        const pergunta = card.querySelector(".pergunta");
        const resposta = card.querySelector(".resposta");
        const instrucao = card.querySelector(".instrucao");

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
    });
}

// ======================================
// QUIZZES
// ======================================

function configurarQuiz(quiz) {

    const alternativas = quiz.querySelectorAll(".alternativa");
    const resultado = quiz.querySelector(".resultado");
    const botaoReiniciar = quiz.querySelector(".reiniciar");

    alternativas.forEach((alternativa) => {

        alternativa.addEventListener("click", () => {

            const acertou =
                alternativa.dataset.correta === "true";

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
                    "Ainda não! A resposta correta está destacada em verde.";
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
}

function configurarQuizzes() {

    const quizzes = document.querySelectorAll("[data-quiz]");

    quizzes.forEach((quiz) => {
        configurarQuiz(quiz);
    });
}

// ======================================
// INICIALIZAÇÃO
// ======================================

configurarFlashcards();
configurarQuizzes();
