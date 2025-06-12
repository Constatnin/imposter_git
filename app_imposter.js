let spieler_liste_index = 0;

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button_header");
  const ausgabe = document.getElementById("spieler");

    // Leere Liste zum Speichern der Namen
  const spieler_liste = [];

  button.addEventListener("click", function () {
    // Container-Div für dieses Eingabe-Set
    const container = document.createElement("div");
    container.className = "spieler"; // optional fürs Styling

    // Neues Input-Feld
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Dein Name";

    // Absenden-Button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Absenden";

    // Ausgabe-Div
    const output = document.createElement("div");

    submitBtn.addEventListener("click", function () {
      const name = input.value.trim();
      if (name) {
        output.innerHTML = `<p>${name}</p>`;

        // Name zur Liste hinzufügen
        spieler_liste.push(name);
        // Liste auf der Seite neu darstellen

        console.log(spieler_liste); // für Kontrolle in der Konsole

        // Eingabefeld + Button entfernen nach Absenden
        input.remove();
        submitBtn.remove();
      } else {
        output.innerHTML = `<p>Bitte gib deinen Namen ein.</p>`;
      }
    });

    // Aufbau: Input + Button + Ausgabe in den Container
    container.appendChild(input);
    container.appendChild(submitBtn);
    container.appendChild(output);

    // Container an den Hauptbereich anhängen
    ausgabe.appendChild(container);


    
  });
  // Funktion zum Aktualisieren der Ausgabe-Liste
  function renderSpielerListe() {
    listeAnzeigen.innerHTML = ""; // Leeren

    // Jeden Namen als <li> hinzufügen
    spieler_liste.forEach(function (spieler) {
      const li = document.createElement("li");
      li.textContent = spieler;
      listeAnzeigen.appendChild(li);
    });
  }
});

