document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button_header");
  const ausgabe = document.getElementById("spieler");
  const startButton = document.getElementById("button_start");

  // Liste zum Speichern der Spielernamen
  const spieler_liste = [];

  // Flag, ob das Spiel gestartet wurde
  let spielStartet = false;

  // Klick auf "+" Button: neues Eingabefeld + Button für Namen hinzufügen
  button.addEventListener("click", function () {
    // Container für neuen Spieler
    const container = document.createElement("div");
    container.className = "spieler";

    // Container für den Flip (innen)
    const inner = document.createElement("div");
    inner.className = "spieler-inner";

    // Front-Seite (Name)
    const front = document.createElement("div");
    front.className = "spieler-front";

    // Back-Seite (Text nach Flip)
    const back = document.createElement("div");
    back.className = "spieler-back";
    back.textContent = "Hallo";

    // Input für Namen
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Dein Name";

    // Absenden-Button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Absenden";

    // Ausgabe-Div für Meldungen
    const output = document.createElement("div");

    // Event Listener Absenden-Button
    submitBtn.addEventListener("click", function () {
      const name = input.value.trim();
      if (name) {
        front.textContent = name;  // setzt den eingegebenen Namen auf die Vorderseite
        // Namen anzeigen (bestätigen)
        output.innerHTML = `<p>${name}</p>`;

        // Namen in Liste speichern
        spieler_liste.push(name);

        // Namen auch in Front-Div setzen
        front.textContent = name;

        console.log(spieler_liste);

        // Eingabefeld + Button entfernen
        input.remove();
        submitBtn.remove();

        // Flip-Event nur erlauben, wenn Spiel gestartet ist
        container.addEventListener("click", function () {
          if (!spielStartet) return; // Kein Flip, wenn nicht gestartet
          container.classList.toggle("flipped");
        });
      } else {
        output.textContent = "Bitte gib deinen Namen ein.";
      }
    });

    // Zusammensetzen der Flip-Struktur
    inner.appendChild(front);
    inner.appendChild(back);
    container.appendChild(inner);

    // Eingabe-Elemente anhängen
    container.appendChild(input);
    container.appendChild(submitBtn);
    container.appendChild(output);

    // Spieler-Container an die Seite anhängen
    ausgabe.appendChild(container);
  });

  // Event Listener Start-Button
  startButton.addEventListener("click", function () {
    spielStartet = true; // Spiel gestartet

    const anzahlSpieler = spieler_liste.length;

    if (anzahlSpieler < 3) {
      console.log("Nicht genug Spieler vorhanden.");
      return;
    }

    // Zufälliger Index zwischen 0 und anzahlSpieler-1
    const index_imposter = Math.floor(Math.random() * anzahlSpieler);

    console.log("Spieleranzahl:", anzahlSpieler);
    console.log("Zufallszahl zwischen 0 und Spieleranzahl-1:", index_imposter);
    console.log("Imposter:", spieler_liste[index_imposter]);
  });
});
