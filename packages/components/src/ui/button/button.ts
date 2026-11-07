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
  @property({ reflect: true }) animation: 'none' | 'press' = 'none';
  @property({ type: Number, reflect: true }) duration = 220;
  @property({ reflect: true }) motion: 'auto' | 'none' = 'auto';

  static override styles = css`
    :host {
      display: inline-block;
    }

    button {
      padding: var(--ds-space-2, 0.5rem) 1rem;
      border: 1px solid var(--ds-color-border, #cbd5e1);
      border-radius: var(--ds-radius-md, 0.5rem);
      font: inherit;
      cursor: pointer;
      background: var(--ds-color-primary, #18181b);
      color: var(--ds-color-on-primary, #fafafa);
      transition:
        transform 120ms ease,
        background-color 150ms ease,
        border-color 150ms ease;
    }

    button:focus-visible {
      outline: 2px solid var(--ds-color-accent, #18181b);
      outline-offset: 2px;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button:hover:not(:disabled) {
      animation: button-hover 160ms ease-out;
      background: color-mix(in srgb, var(--ds-color-primary, #18181b) 90%, transparent);
    }

    :host([variant='secondary']) button {
      border-color: transparent;
      background: var(--ds-color-secondary, #f4f4f5);
      color: var(--ds-color-on-secondary, #18181b);
    }

    button:active:not(:disabled) {
      transform: scale(0.98);
    }

    :host([motion='none']) button {
      animation: none !important;
      transition: none !important;
    }

    :host([variant='secondary']) button:hover:not(:disabled) {
      background: color-mix(in srgb, var(--ds-color-secondary, #f4f4f5) 80%, var(--ds-color-border, #e4e4e7));
    }

    @keyframes button-hover {
      from {
        transform: scale(0.99);
      }

      to {
        transform: scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      button {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  override render() {
    return html`
      <button part="button" ?disabled=${this.disabled} @click=${this.#onClick}>
        <slot></slot>
      </button>
    `;
  }

  playAnimation(): Animation | undefined {
    if (!Number.isFinite(this.duration) || this.duration <= 0) {
      throw new RangeError('duration must be a positive finite number');
    }
    if (this.animation !== 'none' && this.animation !== 'press') {
      throw new RangeError(`Unsupported button animation: ${this.animation}`);
    }
    if (this.motion !== 'auto' && this.motion !== 'none') {
      throw new RangeError(`Unsupported button motion: ${this.motion}`);
    }

    const button = this.renderRoot.querySelector<HTMLButtonElement>('[part="button"]');
    if (!button) throw new Error('and-button must be rendered before playAnimation()');

    if (
      this.animation === 'none' ||
      this.motion === 'none' ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    return button.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(0.96)' }, { transform: 'scale(1)' }],
      { duration: this.duration, easing: 'ease-out' },
    );
  }

  #onClick() {
    this.dispatchEvent(new CustomEvent('andromeda-click', { bubbles: true, composed: true }));
  }
}
