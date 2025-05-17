function submitRegisterForm(event) {
    event.preventDefault();

    const body = document.querySelector("body");
    const data = {
        owner: body.getAttribute("data-user-id"),
        category: document.getElementById("add-category").value,
        name: document.getElementById("add-name").value,
        birth_date: document.getElementById("add-bd").value,
        phone: document.getElementById("add-ddd").value + document.getElementById("add-phone").value,
        document_type: document.getElementById("add-document-type").value,
        document: document.getElementById("add-document").value,
        adress: document.getElementById("add-address").value,
        observations: document.getElementById("add-observation").value,

    };
    console.log("Dados do formulário:", data);
    console.log("OWNER:", data.owner)


    fetch("/api/add-register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao enviar o registro.");
            }
            return response.json();
        })
        .then(result => {

            console.log("Registro salvo com sucesso:", result);

            closeWindow();
            alert("Registro salvo com sucesso!");
            fetch("/Registros")
                .then(response => {
                    if (!response.ok) throw new Error('Erro ao carregar a tela');
                    return response.text();
                })
                .then(html => {
                    const main = document.querySelector('.main-content');
                    main.innerHTML = html;

                    loadScriptsFor("/Registros");
                })
                .catch(error => {
                    document.querySelector('.main-content').innerHTML =
                        `<p style="color:red;">Erro: ${error.message}</p>`;
                });

        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

// Função auxiliar para capturar o CSRF Token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
