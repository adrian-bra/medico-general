const formularioCita = document.getElementById("formCita");

if (formularioCita) {
    formularioCita.addEventListener("submit", function(evento) {
        evento.preventDefault();

        document.getElementById("resultado").textContent =
            "¡Gracias por probar el formulario! " +
            "Esta es una solicitud de demostración escolar. " +
            "No se ha reservado una cita real.";

        formularioCita.reset();
    });
}

const formularioContacto = document.getElementById("formContacto");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(evento) {
        evento.preventDefault();

        document.getElementById("resultadoContacto").textContent =
            "Prueba completada. El mensaje no fue enviado ni guardado.";

        formularioContacto.reset();
    });
}