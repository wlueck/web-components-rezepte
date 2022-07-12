/**
 *  Definiition der Routen
 */

const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
    res.render("index", {text: "Hallo"});
})

router.get("/meineRezepte", (req, res) => {
    let data = require("../data/rezepte.json");

    res.render("meineRezepte", {rezepte: data});
})

router.get("/erstellen", (req, res) => {
    res.render("erstellen");
})

router.post("/erstellen", (req, res) => {

    console.log(req.body);

    let zutaten = [];
    if(req.body.zutaten !== undefined && req.body.zutaten.length>1) {
        for (let i = 0; i < req.body.zutaten.length; i++) {
            let arr = req.body.zutaten[i].split(/(\s+)/);
            zutaten.push({"menge": arr[0], "einheit": arr[2], "zutat": arr.slice(4).join('')});
        }
    }else if(req.body.zutaten !== undefined && req.body.zutaten.length===1){
        let arr = req.body.zutaten.split(/(\s+)/);
        zutaten.push({"menge": arr[0], "einheit": arr[2], "zutat": arr.slice(4).join('')});
    }

    let newData = { "titel": req.body.titel,
        "personenAnzahl": req.body.personenAnzahl,
        "ernaehrungsform": req.body.ernaehrungsform,
        "kategorie": req.body.kategorie,
        "zutaten": zutaten,
        "zubereitung": req.body.zubereitung,
        "zeit": req.body.zeit
    };

    let oldData = require("../data/rezepte.json");

    const arr = Array.from(oldData);
    arr.push(newData);

    fs.writeFileSync('data/rezepte.json', JSON.stringify(arr));
    res.redirect("meineRezepte");
})

module.exports = router