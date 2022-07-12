//Import aller Komponenten
import {
    allComponents,
    provideFluentDesignSystem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(allComponents);


//Import für die Erstellung von Komponenten
import { FASTElement, customElement, attr, html, css} from '@microsoft/fast-element';


//Definition Header Tag
const templateHeader = html<HeaderTag>`
    <div class="grid-container-navbar">
        <div class="brandName">
            <fluent-anchor href="/" appearance="stealth">HOME</fluent-anchor>
        </div>
        <div class="meineRezepte">
            <fluent-anchor href="meineRezepte" appearance="stealth">Meine Rezepte</fluent-anchor>
        </div>
        <div class="rezeptErstellen">
            <fluent-anchor href="erstellen" appearance="accent">Rezept hinzufügen -></fluent-anchor>
        </div>
    </div>
`;

const stylesHeader = css`
    .grid-container-navbar{
        display: grid;
        grid-template-columns: auto auto auto;
    }
    .grid-container-navbar > div {
        padding: 20px 50px;
    }

    .brandName{
        text-align: left;
        
    }

    .meineRezepte{
        text-align: center;
    }

    .rezeptErstellen{
        text-align: right;
    }
`;

@customElement({
    name: 'header-tag',
    template: templateHeader,
    styles: stylesHeader
})

export class HeaderTag extends FASTElement {}


//Definition Überschrift Tag
const templateUeberschrift = html<UeberschriftTag>`
    <h3 class="ueberschrift">
        ${x => x.ueberschrift.toUpperCase()}
    </h3>
`;

const stylesUeberschrift = css`
    .ueberschrift{
        padding: 10px 0 20px 116px;
    }
`;

@customElement({
    name: 'ueberschrift-tag',
    template: templateUeberschrift,
    styles: stylesUeberschrift
})

export class UeberschriftTag extends FASTElement {
    @attr ueberschrift: string = 'Hello';
}





//Definition RezeptKarten Tag

const templateRezeptCard = html<RezeptCard>`
    <fluent-accordion-item>
        <span slot="heading">
            <h3 >
                ${x => x.titel}
                <fluent-button appearance="accent">
                    ${x => x.zeit} min
                </fluent-button>
            </h3>
            <p>
                ${x => x.kategorie}
            </p>
            <p>
                ${x => x.ernaehrungsform}
            </p>
        </span>

        <fluent-data-grid>
            <fluent-data-grid-row>
                <fluent-data-grid-cell grid-column="1">
                    <p>Zutaten (für ${x => x.personenAnzahl} Personen):</p>
                    <fluent-data-grid id="hal">
                        
                        ${x => x.zutaten}  
                    </fluent-data-grid>

                </fluent-data-grid-cell>
                <fluent-data-grid-cell grid-column="2">
                    <p>Zubereitung:</p>
                    <fluent-card>
                        ${x => x.zubereitung}
                    </fluent-card>

                </fluent-data-grid-cell>
            </fluent-data-grid-row>
        </fluent-data-grid>

        
    </fluent-accordion-item>
`;

const stylesRezeptCard = css`
    fluent-accordion-item{
        padding: 20px;
        border: 1px solid #EBEBEB;
    }
    fluent-accordion-item:hover{
        border-left: 4px solid #FFB338;
    }
    fluent-button{
        float:right;
    }
    fluent-card{
        width: auto;
        height: auto;
        background-color: #F9F9F9;
        border: 1px solid #E6E6E6;
        border-radius: 5px;
        padding:20px;
    }
    
`;

@customElement({
    name: 'rezept-card',
    template: templateRezeptCard,
    styles: stylesRezeptCard
})

export class RezeptCard extends FASTElement {
    @attr titel: string = '';
    @attr kategorie: string = '';
    @attr ernaehrungsform: string = '';
    @attr zeit: string = '';
    @attr personenAnzahl: string = '';
    @attr zubereitung: string = '';
    @attr zutaten: string = '';
}



function a(){
    var mydata = require('../data/rezepte.json');
    var output = document.getElementById("rezeptListe");

    for (let i = 0; i < mydata.length; i++){
        var card = document.createElement("rezept-card");

        card.setAttribute("titel", mydata[i].titel);
        card.setAttribute("ernaehrungsform", mydata[i].ernaehrungsform);
        card.setAttribute("kategorie", mydata[i].kategorie);
        card.setAttribute("zeit", mydata[i].zeit);
        card.setAttribute("zubereitung", mydata[i].zubereitung);

        var str = "";
        for (let j = 0; j < mydata[i].zutaten.length; j++){

            str += "" + mydata[i].zutaten[j].menge + "" + mydata[i].zutaten[j].einheit + " " + mydata[i].zutaten[j].zutat + "\n";
        }
        card.setAttribute("zutaten", str);
        // @ts-ignore: Object is possibly 'null'.
        output.appendChild(card);
    }
}