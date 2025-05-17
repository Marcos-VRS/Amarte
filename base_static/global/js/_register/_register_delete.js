function deleteRegister(event) {
    event.preventDefault();

    const id = document.getElementById('delete-id').value;

    console.log("O valor de id é:", id);

    fetch(`/api/delete-register/${id}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('input[name="csrfmiddlewaretoken"]').value
        },
        body: JSON.stringify({})
    })
        .then(response => response.json())

        .then(data => {
            console.log("Resposta do servidor:", data);
            if (data.status === "success") {
                alert("Registro deletado com sucesso!");
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
            } else {
                alert("Erro ao deletar: " + data.message);
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro inesperado ao deletar.");
        });
}
