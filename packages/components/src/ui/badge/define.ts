import { AndBadge } from './badge.js';

if (!customElements.get('and-badge')) {
  customElements.define('and-badge', AndBadge);
}

declare global {
  interface HTMLElementTagNameMap {
    'and-badge': AndBadge;
  }
}
