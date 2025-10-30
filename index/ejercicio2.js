function jugar() {
      const numeroSecreto = 7; // Número fijo definido en el código
      let intento = prompt("Adivina el número secreto (entre 1 y 10):");

      if (intento == null) {
        alert("Juego cancelado.");
        return;
      }

      if (parseInt(intento) === numeroSecreto) {
        alert("🎉 ¡Acertaste! El número secreto es " + numeroSecreto);
      } else {
        alert("❌ No acertaste. El número secreto era " + numeroSecreto);
      }
    }

