
const alternativas = document.querySelectorAll(".alternativa");

const resultado = document.getElementById("resultado-quiz");

const botaoReiniciar = document.getElementById("reiniciar-quiz");

// Verifica a resposta escolhida
alternativas.forEach((alternativa) => {
    alternativa.addEventListener("click", () => {

        const correta = alternativa.dataset.correta === "true";

        // Bloqueia as alternativas após responder
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

// Permite tentar novamente
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
