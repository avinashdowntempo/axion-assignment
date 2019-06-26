import { LitElement, html } from 'lit-element';

import { style } from './styles/stock-table-styles'; //Importing our component specific styles
import { stockTableProperties } from './properties/stock-table-properties'; //Importing our component specific properties

export class StockTable extends LitElement {

  static get properties() {
    return stockTableProperties; //Initalize the propeties of the stock-history component
  }

  static get styles() {
    return [style];
  }

  constructor() {
    super();
  }

  /*Render the HTML for the stock-Table webcomponent */
  render() {
    return html`
        <table>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
          ${this.stocks ?
          
          html`
          <!--Iterating through the list of stocks data to render table rows-->
           ${this.stocks.map(stock => html`<tr>
            <td>${stock.date}</td>
            <!--Coverting the number to formatted string, if application grows we can use a common function to return the formatted string-->
            <td>${stock.open.toLocaleString('en', {useGrouping:true})}</td>
            <td>${stock.high.toLocaleString('en', {useGrouping:true})}</td>
            <td>${stock.low.toLocaleString('en', {useGrouping:true})}</td>
            <td>${stock.close.toLocaleString('en', {useGrouping:true})}</td>
            <td>${stock.volume.toLocaleString('en', {useGrouping:true})}</td>
          </tr>`)}` : html``}
        </table>
      `;
  }
}

/* Registering the webcomponent with the name stock-table */
customElements.define('stock-table', StockTable);