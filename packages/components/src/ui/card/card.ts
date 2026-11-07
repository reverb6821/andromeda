import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * @slot - Main card content
 * @slot header - Optional card header
 * @slot footer - Optional card footer
 * @csspart card - Card surface
 * @cssprop --ds-color-surface - Card background color
 * @cssprop --ds-color-text - Card text color
 * @cssprop --ds-color-border - Card border color
 */
export class AndCard extends LitElement {
  @property({ reflect: true }) animation: 'none' | 'reveal' = 'none';
  @property({ type: Number, reflect: true }) duration = 220;
  @property({ reflect: true }) motion: 'auto' | 'none' = 'auto';

  static override styles = css`
    :host {
      display: block;
    }

    [part='card'] {
      display: grid;
      gap: 1rem;
      padding: 1.5rem;
      border: 1px solid var(--ds-color-border, #e4e4e7);
      border-radius: 0.75rem;
      background: var(--ds-color-surface, #fff);
      color: var(--ds-color-text, #09090b);
    }

    slot {
      display: contents;
    }
  `;

  override render() {
    return html`
      <div part="card">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }

  playAnimation(): Animation | undefined {
    if (!Number.isFinite(this.duration) || this.duration <= 0) {
      throw new RangeError('duration must be a positive finite number');
    }
    if (this.animation !== 'none' && this.animation !== 'reveal') {
      throw new RangeError(`Unsupported card animation: ${this.animation}`);
    }
    if (this.motion !== 'auto' && this.motion !== 'none') {
      throw new RangeError(`Unsupported card motion: ${this.motion}`);
    }

    const card = this.renderRoot.querySelector<HTMLElement>('[part="card"]');
    if (!card) throw new Error('and-card must be rendered before playAnimation()');

    if (
      this.animation === 'none' ||
      this.motion === 'none' ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    return card.animate(
      [
        { opacity: 0, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: this.duration, easing: 'ease-out' },
    );
  }
}
