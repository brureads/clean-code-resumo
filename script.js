
// ======================================
// FLASHCARDS
// ======================================

function configurarFlashcards() {
    const flashcards = document.querySelectorAll(".flashcard");

    flashcards.forEach((card) => {
        const pergunta = card.querySelector(".pergunta");
        const resposta = card.querySelector(".resposta");
        const instrucao = card.querySelector(".instrucao");

        if (!pergunta || !resposta || !instrucao) {
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
    });
}

// ======================================
// CORREÇÃO DOS QUIZZES
// ======================================

function configurarQuiz(quiz) {
    const alternativas = quiz.querySelectorAll(".alternativa");
    const resultado = quiz.querySelector(".resultado");
    const botaoReiniciar = quiz.querySelector(".reiniciar");

    const alternativaCorreta = quiz.querySelector(
        '.alternativa[data-correta="true"]'
    );

    if (!alternativaCorreta || !resultado || !botaoReiniciar) {
        return;
    }

    const explicacao =
        alternativaCorreta.dataset.explicacao ||
        "Essa alternativa segue o princípio apresentado no resumo.";

    alternativas.forEach((alternativa) => {
        alternativa.addEventListener("click", () => {
            const acertou =
                alternativa.dataset.correta === "true";

            // Impede que o usuário responda duas vezes
            alternativas.forEach((botao) => {
                botao.disabled = true;

                if (botao === alternativaCorreta) {
                    botao.classList.add("correta");
                }
            });

            if (acertou) {
                resultado.textContent =
                    "Resposta correta! " + explicacao;
            } else {
                alternativa.classList.add("incorreta");

                resultado.textContent =
                    "Ainda não! " +
                    "A resposta correta está destacada em verde. " +
                    explicacao;
            }

            botaoReiniciar.hidden = false;
        });
    });

    // Reinicia apenas o quiz selecionado
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

// ======================================
// INICIALIZAÇÃO
// ======================================

function iniciarPagina() {
    configurarFlashcards();

    const quizzes = document.querySelectorAll("[data-quiz]");

    quizzes.forEach((quiz) => {
        configurarQuiz(quiz);
    });
}

iniciarPagina();