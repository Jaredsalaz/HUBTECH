// Función para iniciar la cámara
function iniciarCamara() {
    const video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
    }
}

// Función para tomar una foto
function tomarFoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const fotoPersona = document.getElementById('fotoPersona');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');
    fotoPersona.src = dataURL;
    fotoPersona.style.display = 'block';
    video.style.display = 'none';
}

// Iniciar la cámara al cargar la página
window.onload = iniciarCamara;