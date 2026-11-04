import { AndButton } from './button.js';

if (!customElements.get('and-button')) {
  customElements.define('and-button', AndButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'and-button': AndButton;
  }
}