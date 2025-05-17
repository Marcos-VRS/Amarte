document.addEventListener('DOMContentLoaded', function () {

    function openWindow(type, target = null) {

        // Esconde todas as janelas
        document.querySelectorAll('.window').forEach(j => {
            j.classList.remove('active');
            j.classList.add('hidden');
        });

        // Mostra a janela específica
        const modal = document.getElementById(`window-${type}`);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('active');
        }

        // Modal de delete
        if (type === 'delete' && target) {
            const id = target.getAttribute('data-id');
            const name = target.getAttribute('data-name');

            console.log(id, name);

            document.getElementById('delete-name').innerText = name;
            document.getElementById('delete-id').value = id;
        }

        // Modal de edit
        if (type === 'edit' && target) {
            const id = target.getAttribute('data-id');

            fetch(`/api/get-register/${id}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro ao buscar registro: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Dados do registro:", data);
                    const register = data.data;

                    document.getElementById('edit-id').value = register.id;
                    document.getElementById('edit-category').value = register.category;
                    document.getElementById('edit-name').value = register.name;
                    document.getElementById('edit-bd').value = register.birth_date;

                    // --- ALTERAÇÃO: Separar DDD e número
                    const phone = register.phone || ""; // Exemplo: "84991234567"
                    const ddd = phone.slice(0, 2);
                    const phoneNumber = phone.slice(2);

                    document.getElementById('edit-ddd').value = ddd;
                    document.getElementById('edit-phone').value = phoneNumber;
                    // --- FIM DA ALTERAÇÃO

                    document.getElementById('edit-document-type').value = register.document_type;
                    document.getElementById('edit-document').value = register.document;
                    document.getElementById('edit-address').value = register.adress;
                    document.getElementById('edit-observation').value = register.observations;

                    console.log('O nome do DATA é :', register.name);
                    console.log('O bd do DATA é :', register.birth_date);
                })
                .catch(error => {
                    console.error("Erro ao buscar dados para edição:", error);
                    alert("Erro ao carregar dados do registro para edição.");
                    closeWindow();  // Fecha a janela caso o fetch falhe
                });
        }
    }

    function closeWindow() {
        document.querySelectorAll('.window').forEach(j => {
            j.classList.remove('active');
            j.classList.add('hidden');

            const form = j.querySelector('form');
            if (form) {
                form.reset();
            }
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            closeWindow();
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target.id === 'window-edit' ||
            event.target.id === 'window-delete' ||
            event.target.id === 'window-add') {
            closeWindow();
        }
    });

    window.openWindow = openWindow;
    window.closeWindow = closeWindow;
});
