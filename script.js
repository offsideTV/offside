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
document.getElementById('reportButton').addEventListener('click', function() {
    window.location.href = 'fallos.html'; 
});
document.getElementById('camButton').addEventListener('click', function() {
    window.open('multicam.html', '_blank'); // Abre en una nueva pestaña
});
function closeBanner() {
    document.getElementById("donationBanner").style.display = "none";
    
}


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

// Mostrar/ocultar el menú de compartir
document.getElementById('shareButton').addEventListener('click', function() {
    var shareMenu = document.getElementById('shareMenu');
    shareMenu.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    var shareMenu = document.getElementById('shareMenu');
    var shareButton = document.getElementById('shareButton');
    if (event.target !== shareButton && !shareButton.contains(event.target)) {
        shareMenu.classList.remove('show');
    }
});

// Copiar el enlace al portapapeles (con SweetAlert)
document.getElementById('copyLink').addEventListener('click', function(event) {
    event.preventDefault();
    var url = window.location.href; // Obtiene la URL actual

    // Crea un elemento de texto temporal
    var tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);

    // Selecciona y copia el texto
    tempInput.select();
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

    // Muestra un mensaje de confirmación con SweetAlert
    Swal.fire({
        icon: 'success',
        title: '¡Enlace copiado!',
        text: 'El enlace se copio correctamente. ¡Compartilo!',
        confirmButtonText: 'OK'
    });
});
document.getElementById('shareQR').addEventListener('click', function(event) {
    event.preventDefault();
    var url = window.location.href;

    // Crear un contenedor para el QR
    var qrContainer = document.createElement('div');
    qrContainer.id = 'qr-code';
    qrContainer.style.textAlign = 'center'; // Centrar el contenido

    // Generar el QR
    new QRCode(qrContainer, {
        text: url,
        width: 200, // Tamaño del QR
        height: 200,
        colorDark: "#000000", // Color del QR (negro)
        colorLight: "#ffffff", // Color de fondo (blanco)
        correctLevel: QRCode.CorrectLevel.H // Nivel de corrección de errores (alto)
    });

    // Mostrar el QR en un modal con SweetAlert
    Swal.fire({
        title: '¡Escanea el QR y no te pierdas de ningún partido!',
        html: qrContainer,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'qr-modal', // Clase CSS personalizada para el modal
            title: 'qr-title', // Clase CSS para el título
            htmlContainer: 'qr-html-container' // Clase CSS para el contenido del modal
        }
    });
});
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    var lastScrollTop = 0;
    var shareButton = document.getElementById('shareButton');

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo y más de 100px: oculta el botón
            shareButton.classList.add('hidden');
        } else {
            // Scroll hacia arriba o menos de 100px: muestra el botón
            shareButton.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
}
