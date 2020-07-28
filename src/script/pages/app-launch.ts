import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-launch')
export class AppLaunch extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }

    #launchOption {
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
      <h3>Welcome</h3>
      <app-userdisplay></app-userdisplay>

      <span class="options">
        <a id="launchOption" href="./launchHost">Host a game</a>
        <a id="launchOption">Join a game</a>
      </span>
      </div>
    `;
  }
}