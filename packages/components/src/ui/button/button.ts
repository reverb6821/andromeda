import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * @slot - Contenuto del pulsante
 * @fires andromeda-click - Emesso al click
 * @csspart button - L'elemento button nativo
 * @cssprop --ds-color-primary - Colore di sfondo
 */
export class AndButton extends LitElement {
  @property({ reflect: true }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean, reflect: true }) disabled = false;

  static override styles = css`
    :host {
      display: inline-block;
    }
    button {
      padding: var(--ds-space-2, 0.5rem) 1rem;
      border: 0;
      border-radius: var(--ds-radius-md, 6px);
      font: inherit;
      cursor: pointer;
      background: var(--ds-color-primary, #3b82f6);
      color: #fff;
    }
    :host([variant='secondary']) button {
      background: transparent;
      color: var(--ds-color-primary, #3b82f6);
      outline: 1px solid currentColor;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  override render() {
    return html`
      <button part="button" ?disabled=${this.disabled} @click=${this.#onClick}>
        <slot></slot>
      </button>
    `;
  }

  #onClick() {
    this.dispatchEvent(new CustomEvent('andromeda-click', { bubbles: true, composed: true }));
  }
}