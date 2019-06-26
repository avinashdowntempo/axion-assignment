import { LitElement, html } from 'lit-element';

import { stockData } from './data/stock-data'; //Importing the mock data
import { style } from './styles/stock-history-styles'; //Importing our component specific styles
import { stockHistoryProperties } from './properties/stock-history-properties'; //Importing our component specific properties
import './stock-card'; //Importing the stock-card webcomponent
import './stock-table'; //Importing the stock-table webcomponent

export class StockHistory extends LitElement {

    static get properties() {
        return stockHistoryProperties; //Initalize the propeties of the stock-history component
    }

    static get styles() {
        return [style];
    }

    constructor() {
        super();
        this.stocks = stockData;
        this.tableView = 'visible'; //Initial css value of the table layout
        this.cardView = 'collapse'; //Initial css value of the card layout
    }

    /*Render the HTML for the stock-history webcomponent */
    render() {
        return html`
         <!--Toggle switch button-->
        <div class="onoffswitch">
            <input type="checkbox" @change="${this.toggleView}" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"
                checked>
            <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
            </label>
        </div>

        <div class="container">
            <!--Checks the toggle state and displays component accordongly-->
            <stock-table id="stock-table" style="visibility:${this.tableView};"></stock-table>
            <!--Iterating through the list of stocks data to render all cards-->
            ${this.stocks.map(stock => html`<stock-card date=${stock.date} open=${stock.open} high=${stock.high} low=${stock.low} close=${stock.close}
                volume=${stock.volume} style="visibility:${this.cardView};"></stock-card>`)}
        </div>
      `;
    }

    /*Toggle visibility of a view between card and table layout */
    toggleView() {
        //Toggle the tableview css property
        this.tableView = this.tableView == 'collapse' ? 'visible' : 'collapse';
        //Toggle the cardview css property
        this.cardView = this.cardView == 'collapse' ? 'visible' : 'collapse';
    }

    /* Set the Data property of the stock-table webcomponent when the component is first rendered  */
    firstUpdated(changedProperties) {
        // Get the stock-table element 
        let stocktable = this.shadowRoot.getElementById('stock-table');
        // Set the data into the stocktable 
        stocktable.stocks = this.stocks;
    }

}

/* Registering the webcomponent with the name stock-history */
customElements.define('stock-history', StockHistory);