document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-register");
    const register = document.querySelectorAll(".item-lista");

    input.addEventListener("input", function () {
        const filter = input.value.toLowerCase();

        register.forEach(campanha => {
            const title = campanha.querySelector(".regiter-name").textContent.toLowerCase();

            if (title.includes(filter)) {
                campanha.style.display = ""; // Mostra o item
            } else {
                campanha.style.display = "none"; // Esconde completamente
            }
        });
    });
});
