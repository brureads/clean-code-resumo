const card = document.getElementById("card-clean-code");
const resposta = document.getElementById("resposta-clean-code");
const instrucao = document.querySelector(".card-interativo-instrucao");

card.addEventListener("click", () => {
    const estaAberto = card.getAttribute("aria-expanded") === "true";

    card.setAttribute("aria-expanded", String(!estaAberto));
    resposta.hidden = estaAberto;

    instrucao.textContent = estaAberto
        ? "Clique para explorar"
        : "Clique para recolher";
});