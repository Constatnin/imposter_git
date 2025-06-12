document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button_header");
  const ausgabe = document.getElementById("spieler");

  button.addEventListener("click", function () {
    // Container-Div für dieses Eingabe-Set
    const container = document.createElement("div");
    container.className = "eingabe-block"; // optional fürs Styling

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
});
