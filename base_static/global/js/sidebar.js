document.querySelectorAll('.btn-menu').forEach(button => {
    button.addEventListener('click', function () {
        const url = this.dataset.url;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Erro ao carregar a tela');
                return response.text();
            })
            .then(html => {
                document.querySelector('.main-content').innerHTML = html;
            })
            .catch(error => {
                document.querySelector('.main-content').innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
            });
    });
});
