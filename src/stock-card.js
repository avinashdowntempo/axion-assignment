import {LitElement,html} from 'lit-element';

import {style} from './styles/stock-card-styles'; //Importing our component specific styles
import {stockCardProperties} from './properties/stock-card-properties'; //Importing our component specific properties

export class StockCard extends LitElement {

    static get properties() {
        return stockCardProperties; //Initalize the propeties of the stock-card component
    }

    static get styles() {
        return [style];
    }

    constructor() {
        super();
    }

    /*Render the HTML for the stock-card webcomponent */
    render() {
        return html`
    <label>Date:</label>
    <p>${this.date}</p><br>
    <label>Open:</label>
    <!--Coverting the number to formatted string, if application grows we can use a common function to return the formatted string-->
    <p>${this.open.toLocaleString('en', {useGrouping:true})}</p><br>
    <label>High:</label>
    <p>${this.high.toLocaleString('en', {useGrouping:true})}</p><br>
    <label>Low:</label>
    <p>${this.low.toLocaleString('en', {useGrouping:true})}</p><br>
    <label>Close:</label>
    <p>${this.close.toLocaleString('en', {useGrouping:true})}</p><br>
    <label>Volume:</label>
    <p>${this.volume.toLocaleString('en', {useGrouping:true})}</p><br>
      `;
    }
}

/* Registering the webcomponent with the name stock-card */
customElements.define('stock-card', StockCard);