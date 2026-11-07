import { AndCard } from './card.js';

if (!customElements.get('and-card')) {
  customElements.define('and-card', AndCard);
}

declare global {
  interface HTMLElementTagNameMap {
    'and-card': AndCard;
  }
}
