    // Referencias a los elementos
    let boton = document.getElementById("btntexto");
    let parrafo = document.getElementById("texto");

    // Evento click para cambiar el texto
    boton.addEventListener("click", function() {
      parrafo.innerHTML = "Texto modificado";
    });