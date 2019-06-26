import { css } from 'lit-element';

export const style = css`

/* Host style for stock-card */
:host {
    display:block;
    border: 1px solid #ff748c;
    background: none;
    color: #ff607c;
    padding: 13px;
    border-radius: 10px;
    box-shadow: 2px 3px 4px -1px;
    margin: 0px 10px 10px 0px;
    line-height: 1.4em;
  }

  /* style for <p> inside stock-card */
  p{
      display:inline;
      color:black;
  }

  /* style for <label> inside stock-card */
  label{
    font-weight: 600;
  }
`;