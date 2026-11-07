import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * @slot - Badge label
 * @csspart badge - Badge surface
 * @cssprop --ds-color-status-neutral - Neutral label color
 * @cssprop --ds-color-status-neutral-surface - Neutral badge background
 * @cssprop --ds-color-status-info - Informational label color
 * @cssprop --ds-color-status-info-surface - Informational badge background
 * @cssprop --ds-color-status-success - Success label color
 * @cssprop --ds-color-status-success-surface - Success badge background
 * @cssprop --ds-color-status-warning - Warning label color
 * @cssprop --ds-color-status-warning-surface - Warning badge background
 * @cssprop --ds-color-status-danger - Danger label color
 * @cssprop --ds-color-status-danger-surface - Danger badge background
 */
export class AndBadge extends LitElement {
  @property({ reflect: true })
  variant: 'neutral' | 'info' | 'success' | 'warning' | 'danger' = 'neutral';

  @property({ reflect: true }) animation: 'none' | 'pulse' = 'none';
  @property({ type: Number, reflect: true }) duration = 220;
  @property({ reflect: true }) motion: 'auto' | 'none' = 'auto';

  static override styles = css`
    :host {
      display: inline-block;
    }

    [part='badge'] {
      display: inline-flex;
      align-items: center;
      min-height: 1.375rem;
      padding: 0.125rem 0.5rem;
      border: 1px solid transparent;
      border-radius: calc(var(--ds-radius-md, 0.5rem) - 2px);
      background: var(--ds-color-status-neutral-surface);
      color: var(--ds-color-status-neutral);
      font: inherit;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
    }

    :host([variant='info']) [part='badge'] {
      background: var(--ds-color-status-info-surface);
      color: var(--ds-color-status-info);
    }

    :host([variant='success']) [part='badge'] {
      background: var(--ds-color-status-success-surface);
      color: var(--ds-color-status-success);
    }

    :host([variant='warning']) [part='badge'] {
      background: var(--ds-color-status-warning-surface);
      color: var(--ds-color-status-warning);
    }

    :host([variant='danger']) [part='badge'] {
      background: var(--ds-color-status-danger-surface);
      color: var(--ds-color-status-danger);
    }
  `;

  override render() {
    return html`<span part="badge"><slot></slot></span>`;
  }

  playAnimation(): Animation | undefined {
    if (!Number.isFinite(this.duration) || this.duration <= 0) {
      throw new RangeError('duration must be a positive finite number');
    }
    if (
      this.variant !== 'neutral' &&
      this.variant !== 'info' &&
      this.variant !== 'success' &&
      this.variant !== 'warning' &&
      this.variant !== 'danger'
    ) {
      throw new RangeError(`Unsupported badge variant: ${this.variant}`);
    }
    if (this.animation !== 'none' && this.animation !== 'pulse') {
      throw new RangeError(`Unsupported badge animation: ${this.animation}`);
    }
    if (this.motion !== 'auto' && this.motion !== 'none') {
      throw new RangeError(`Unsupported badge motion: ${this.motion}`);
    }

    const badge = this.renderRoot.querySelector<HTMLElement>('[part="badge"]');
    if (!badge) throw new Error('and-badge must be rendered before playAnimation()');

    if (
      this.animation === 'none' ||
      this.motion === 'none' ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    return badge.animate(
      [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0.72, transform: 'scale(0.94)' },
        { opacity: 1, transform: 'scale(1)' },
      ],
      { duration: this.duration, easing: 'ease-out' },
    );
  }
}
