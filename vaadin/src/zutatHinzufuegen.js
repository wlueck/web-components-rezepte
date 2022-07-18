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
    if(zutat.value !== ""){
        addZutat();
        zutat.value = "";
        menge.value = "";
        einheit.value = "";
    }
});

function addZutat() {
    let newZutat = new Zutat(zutat.value, menge.value, einheit.value);

    newZutat.button.addEventListener("click", function () {
        output.removeChild(newZutat.listElement);
    });
    console.log(newZutat.zutat);
    newZutat.list.setAttribute("type", "text");
    newZutat.list.setAttribute("name", "zutaten");
    newZutat.list.setAttribute("value", newZutat.zutat.data);
    newZutat.list.setAttribute("readonly", "true");
    newZutat.list.setAttribute("style", "border: none; font-size: 18px;");

    newZutat.button.setAttribute("theme", "icon primary small");
    newZutat.button.setAttribute("style", "border-radius: 50px;");
    newZutat.button.innerText = "-";

    newZutat.listElement.appendChild(newZutat.list);
    newZutat.listElement.appendChild(newZutat.button);
    output.appendChild(newZutat.listElement);
}

class Zutat {
    constructor(zutat, menge, einheit) {
        this.listElement = document.createElement("div");
        this.list = document.createElement("input");
        this.zutat = document.createTextNode(menge + " " + einheit + " " + zutat);
        this.button = document.createElement("vaadin-button");
    }
}