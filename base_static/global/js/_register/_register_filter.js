function initFilterRegister() {
    console.log("initFilterRegister");
    const input = document.getElementById("search-register");
    if (!input) return;

    const registers = document.querySelectorAll(".register");

    input.addEventListener("input", function () {
        const filter = input.value.toLowerCase();


        registers.forEach(register => {
            const text = register.textContent.toLowerCase();
            register.style.display = text.includes(filter) ? "" : "none";
        });

    });
}

window.initFilterRegister = initFilterRegister;  
