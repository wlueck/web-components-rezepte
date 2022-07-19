//Import aller Komponenten
import {
    allComponents,
    provideFluentDesignSystem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(allComponents);


//Import für die Erstellung von Komponenten
import {FASTElement, customElement, attr, html, css} from '@microsoft/fast-element';


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
  .grid-container-navbar {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .grid-container-navbar > div {
    padding: 20px 50px;
  }

  .brandName {
    text-align: left;
  }

  .meineRezepte {
    text-align: center;
  }

  .rezeptErstellen {
    text-align: right;
  }
`;

@customElement({
    name: 'header-tag',
    template: templateHeader,
    styles: stylesHeader
})

export class HeaderTag extends FASTElement {
}


//Definition Überschrift Tag
const templateUeberschrift = html<UeberschriftTag>`
    <h3 class="ueberschrift">
        ${x => x.ueberschrift.toUpperCase()}
    </h3>
`;

const stylesUeberschrift = css`
  .ueberschrift {
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