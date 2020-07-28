import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-launch')
export class AppLaunch extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Launch Page</h2>
      </div>
    `;
  }
}