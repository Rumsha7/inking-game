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
      <h2>Welcome <i>user name</i></h2>
      <span>
        <a id="launchOption">Host a game</a>
        <a id="launchOption">Join a game</a>
      </span>
      </div>
    `;
  }
}