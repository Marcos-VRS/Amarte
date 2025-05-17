function updateRegisterForm(event) {
    event.preventDefault();

    const id = document.getElementById('edit-id').value;

    const data = {
        category: document.getElementById("edit-category").value,
        name: document.getElementById("edit-name").value,
        birth_date: document.getElementById("edit-bd").value,
        phone: document.getElementById("edit-ddd").value + document.getElementById("edit-phone").value,
        document_type: document.getElementById("edit-document-type").value,
        document: document.getElementById("edit-document").value,
        adress: document.getElementById("edit-address").value,
        observations: document.getElementById("edit-observation").value,
    };

    console.log("Dados a serem atualizados:", data);

    fetch(`/api/update-register/${id}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao atualizar o registro.");
            }
            return response.json();
        })
        .then(result => {
            console.log("Registro atualizado com sucesso:", result);

            closeWindow();
            alert("Registro atualizado com sucesso!");
            fetch("/Registros")
                .then(response => {
                    if (!response.ok) throw new Error("Erro ao carregar a tela");
                    return response.text();
                })
                .then(html => {
                    const main = document.querySelector(".main-content");
                    main.innerHTML = html;
                    loadScriptsFor("/Registros");
                })
                .catch(error => {
                    document.querySelector(".main-content").innerHTML =
                        `<p style="color:red;">Erro: ${error.message}</p>`;
                });
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao atualizar o registro.");
        });
}
