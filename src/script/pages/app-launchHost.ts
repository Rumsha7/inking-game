import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-launchHost')
export class AppLaunchHost extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }
    
    #launchHostOption {
        padding: 10px;
        background-color: green;
    }

    
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      Launch host
      </div>
    `;
  }
}