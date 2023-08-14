function saludar(event) {
    event.stopPropagation();
    alert('Hola!');
}

document.addEventListener('DOMContentLoaded', function() {
    const divBtn = document.getElementById('div');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function(event) {
        saludar(event);
    });

    divBtn.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});