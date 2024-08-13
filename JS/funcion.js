// Cambiar el color de fondo
document.getElementById('cambiar-color-btn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Manejar los eventos de clic en las categorías
document.querySelectorAll('.category').forEach(function(category) {
    category.addEventListener('click', function() {
        const content = category.querySelector('.content');
        content.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
