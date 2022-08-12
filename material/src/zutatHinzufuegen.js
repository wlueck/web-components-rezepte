/**
 *  Skript zum Hinzufügen und Entfernen von Zutaten (Menge, Einheit, Zutat)
 *  in eine Liste
 */

let zutat = document.getElementById("zutat");
let menge = document.getElementById("menge");
let einheit = document.getElementById("einheit")
let hinzufuegenButton = document.getElementById("hinzufuegen");
let output = document.getElementById("zutatenListe");

hinzufuegenButton.addEventListener("click", function () {
    if (zutat.value !== "" && menge.value && einheit.value !== "") {
        addZutat();
        zutat.value = "";
        menge.value = "";
        einheit.value = "";
    } else {
        alert("Bitte Menge, Einheit und Zutat angeben!");
    }
});

function addZutat() {
    let newZutat = new Zutat(zutat.value, menge.value, einheit.value);

    newZutat.loeschenButton.addEventListener("click", function () {
        output.removeChild(newZutat.listElement);
    });
    newZutat.list.setAttribute("type", "text");
    newZutat.list.setAttribute("name", "zutaten");
    newZutat.list.setAttribute("value", newZutat.zutat.data);
    newZutat.list.setAttribute("readonly", "true");
    newZutat.list.setAttribute("style", "border: none; font-size: 18px; margin-top:10px;");

    newZutat.loeschenButton.setAttribute("style", "position: absolute;");
    newZutat.loeschenButton.setAttribute("icon", "remove")

    newZutat.listElement.appendChild(newZutat.list);
    newZutat.listElement.appendChild(newZutat.loeschenButton);
    output.appendChild(newZutat.listElement);
}

class Zutat {
    constructor(zutat, menge, einheit) {
        this.list = document.createElement("input");
        this.listElement = document.createElement("div");
        this.zutat = document.createTextNode(menge + " " + einheit + " " + zutat);
        this.loeschenButton = document.createElement("mwc-icon-button");
    }
}