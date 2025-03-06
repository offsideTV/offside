// JavaScript para manejar el acordeón (solo en index.html)
var acc = document.getElementsByClassName("accordion");

if (acc.length > 0) {
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Cierra cualquier otro acordeón abierto
            let activeAccordion = document.querySelector(".accordion.active");
            if (activeAccordion && activeAccordion !== this) {
                activeAccordion.classList.remove("active");
                activeAccordion.nextElementSibling.style.display = "none";
            }

            // Alternar el estado del acordeón clickeado
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }
}


// JavaScript para cargar el contenido en el iframe (solo en reproductor.html)
var iframe = document.getElementById("video-iframe");
if (iframe) {
    const urlParams = new URLSearchParams(window.location.search);
    const videoSrc = urlParams.get('src');

    if (videoSrc) {
        iframe.setAttribute("src", videoSrc);
    } else {
        document.getElementById('video-container').innerHTML = '<p>No se ha seleccionado ningún contenido para reproducir.</p>';
    }
}

// JavaScript para el modal (solo en index.html)
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    if (modal && closeModal) {
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
    }
});
// Función para filtrar canales
function searchChannels() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase(); // Convertir a mayúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
    const channelsGrid = document.querySelector('.channels-grid');
    const channels = channelsGrid.getElementsByClassName('channel');

    // Recorrer todos los canales y ocultar los que no coincidan
    for (let i = 0; i < channels.length; i++) {
        const channelName = channels[i].querySelector('.accordion').textContent.toUpperCase();
        if (channelName.includes(filter)) {
            channels[i].style.display = ''; // Mostrar el canal
        } else {
            channels[i].style.display = 'none'; // Ocultar el canal
        }
    }
}

// Escuchar el evento de entrada en el campo de búsqueda
document.getElementById('searchInput').addEventListener('input', searchChannels);

// Script para mostrar/ocultar el texto de DMCA
document.getElementById('dmcaButton').addEventListener('click', function() {
    var dmcaText = document.getElementById('dmcaText');
    if (dmcaText.style.display === 'none' || dmcaText.style.display === '') {
        dmcaText.style.display = 'block';
    } else {
        dmcaText.style.display = 'none';
    }
});
// Agrega un evento al botón DMCA para desplazar la página
document.getElementById('dmcaButton').addEventListener('click', function() {
    document.getElementById('dmcaText').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href = 'donaciones.html'; 
});
function closeBanner() {
    document.getElementById("donationBanner").style.display = "none";
    
}




function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

// Mostrar el popup solo al entrar
window.onload = function () {
    document.getElementById("popup").style.display = "flex";
};



function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    localStorage.setItem("popupMostrado", "true");
}

window.onload = function () {
    if (!localStorage.getItem("popupMostrado")) {
        document.getElementById("popup").style.display = "flex";
    }
};
function filterEvents() {
    // Obtén el valor del campo de búsqueda
    const searchTerm = document.getElementById('searchInput2').value.toLowerCase();

    // Obtén todos los eventos
    const events = document.querySelectorAll('.event');

    // Contador para eventos visibles
    let visibleEvents = 0;

    // Recorre cada evento y verifica si coincide con el término de búsqueda
    events.forEach(event => {
        const eventText = event.textContent.toLowerCase();

        // Si el evento coincide con el término de búsqueda, lo muestra; de lo contrario, lo oculta
        if (eventText.includes(searchTerm)) {
            event.style.display = 'block';
            visibleEvents++; // Incrementa el contador de eventos visibles
        } else {
            event.style.display = 'none';
        }
    });

    // Muestra u oculta el mensaje de "No encontrado"
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (visibleEvents === 0) {
        noResultsMessage.style.display = 'block'; // Muestra el mensaje
    } else {
        noResultsMessage.style.display = 'none'; // Oculta el mensaje
    }
}
