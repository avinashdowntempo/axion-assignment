import { css } from 'lit-element';

export const style = css`

/* Host style for stock-table */
:host {
    display:block;
    width:100%;
  }

  /*Style for stock-table table */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  /*Style for stock-table th,td */
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  /*Style for stock-table th */
  th{
    color: #ff607c;
  }
`;