function verificarEdad() {
      let edad = prompt("Por favor, ingresa tu edad:");

      // Convertir a número
      edad = Number(edad);

      // Validar que sea un número válido
      if (isNaN(edad)) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa un número válido.";
      } else if (edad >= 18) {
        document.getElementById("mensaje").textContent = "✅ Acceso permitido. Eres mayor de edad.";
      } else {
        document.getElementById("mensaje").textContent = "❌ Acceso denegado. Eres menor de edad.";
      }
    }