import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-launch')
export class AppLaunch extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }

    .profilePic {
        height: 25px;
        width: 25px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }

    .profileName {
        display: inline-block;
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
      <span class="profilePic"></span>
      <span class="profileName"><i>user name</i></span>
    
      <p></p>

      <span class="options">
        <a id="launchOption">Host a game</a>
        <a id="launchOption">Join a game</a>
      </span>
      </div>
    `;
  }
}