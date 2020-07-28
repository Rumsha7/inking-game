import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-play')
export class AppPlay extends LitElement {

  static get styles() {
    return css`
    #main {
        text-align: center;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="main">
      Play
      </div>
    `;
  }
}