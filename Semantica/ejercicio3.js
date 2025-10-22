
    function calcularPromedio() {
      let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
      let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
      let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

      if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("⚠️ Debes ingresar solo números válidos.");
        return;
      }

      let promedio = (nota1 + nota2 + nota3) / 3;

      if (promedio >= 6) {
        alert("✅ Promedio: " + promedio.toFixed(2) + " → Aprobado");
      } else {
        alert("❌ Promedio: " + promedio.toFixed(2) + " → Desaprobado");
      }
    }
