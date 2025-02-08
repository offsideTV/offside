// JavaScript para hacer funcionar el menú desplegable de eventos
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// JavaScript para hacer funcionar el menú desplegable de subeventos (eventos específicos)
var eventBtns = document.getElementsByClassName("event-btn");
for (var i = 0; i < eventBtns.length; i++) {
    eventBtns[i].addEventListener("click", function() {
        var subEvents = this.nextElementSibling; // Encuentra el contenedor de los subeventos
        if (subEvents.style.display === "block") {
            subEvents.style.display = "none"; // Oculta los subeventos si están visibles
        } else {
            subEvents.style.display = "block"; // Muestra los subeventos si están ocultos
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Mostrar modal al cargar la página
    modal.style.display = "flex";

    // Cerrar modal cuando se haga clic en el botón
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
