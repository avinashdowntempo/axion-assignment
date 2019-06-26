import { css } from 'lit-element';

export const style = css`

/* Host style for stock-history-card */
:host {
    display: block;
  }

  /*style for stock-history-card container */
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  /*styles for toggle button */
  .onoffswitch {
    position: relative; width: 86px;
    margin-bottom:10px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
}

.onoffswitch-checkbox {
    display: none;
}

.onoffswitch-label {
    display: block; overflow: hidden; cursor: pointer;
    border: 2px solid #999999; border-radius: 19px;
}

.onoffswitch-inner {
    display: block; width: 200%; margin-left: -100%;
    transition: margin 0.1s ease-in 0s;
}

.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block; float: left; width: 50%; height: 31px; padding: 0; line-height: 31px;
    font-size: 14px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}

.onoffswitch-inner:before {
    content: "TABLE";
    padding-left: 6px;
    background-color: #34A7C1; color: #FFFFFF;
}

.onoffswitch-inner:after {
    content: "CARD";
    padding-right: 6px;
    background-color: #F59898; color: #808080;
    text-align: right;
}

.onoffswitch-switch {
    display: block; width: 19px; margin: 6px;
    background: #FFFFFF;
    position: absolute; top: 0; bottom: 0;
    right: 51px;
    border: 2px solid #999999; border-radius: 19px;
    transition: all 0.1s ease-in 0s; 
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px; 
}
`;