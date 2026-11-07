import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './define.js';

type CardStoryArgs = {
  animation?: 'none' | 'reveal';
  duration?: number;
  motion?: 'auto' | 'none';
  theme?: 'light' | 'dark';
};

type CardStoryOptions = {
  instruction?: string;
  showSlots?: boolean;
  showPlayControl?: boolean;
};

const renderCard = (args: CardStoryArgs, options: CardStoryOptions = {}) => html`
  <div
    data-theme=${args.theme ?? 'light'}
    style="background:var(--ds-color-surface);color:var(--ds-color-text);padding:1rem"
  >
    ${options.instruction ? html`<p style="color:var(--ds-color-muted)">${options.instruction}</p>` : ''}
    <div style="display:flex;align-items:start;gap:0.75rem">
      <and-card
        style="max-width:28rem;flex:1"
        animation=${args.animation ?? 'none'}
        duration=${args.duration ?? 220}
        motion=${args.motion ?? 'auto'}
      >
        ${
          options.showSlots
            ? html`
                <h2 slot="header" style="margin:0">Card header</h2>
                <p style="margin:0">Presentational content goes in the default slot.</p>
                <small slot="footer">Optional footer content</small>
              `
            : html`<p style="margin:0">A simple card with default content.</p>`
        }
      </and-card>
      ${
        options.showPlayControl
          ? html`<button
              type="button"
              style="border:1px solid transparent;border-radius:var(--ds-radius-md,0.5rem);background:var(--ds-color-secondary,#f4f4f5);color:var(--ds-color-on-secondary,#18181b);padding:0.5rem 1rem;font:inherit;cursor:pointer"
              @click=${(event: Event) => {
                const card = (event.currentTarget as HTMLButtonElement)
                  .parentElement?.querySelector('and-card');
                card?.playAnimation();
              }}
            >
              Play animation
            </button>`
          : ''
      }
    </div>
  </div>
`;

const meta: Meta<CardStoryArgs> = {
  title: 'Components/Card',
  component: 'and-card',
  tags: ['autodocs'],
  argTypes: {
    animation: { control: 'select', options: ['none', 'reveal'] },
    duration: { control: { type: 'number', min: 1, step: 10 } },
    motion: { control: 'select', options: ['auto', 'none'] },
    theme: { control: 'select', options: ['light', 'dark'] },
  },
  args: {
    animation: 'none',
    duration: 220,
    motion: 'auto',
    theme: 'light',
  },
  render: (args) => renderCard(args),
};
export default meta;

export const Default: StoryObj<CardStoryArgs> = {};

export const HeaderAndFooter: StoryObj<CardStoryArgs> = {
  render: (args) => renderCard(args, { showSlots: true }),
};

export const LightTheme: StoryObj<CardStoryArgs> = {
  args: { theme: 'light' },
  render: (args) => renderCard(args, { showSlots: true }),
};

export const DarkTheme: StoryObj<CardStoryArgs> = {
  args: { theme: 'dark' },
  render: (args) => renderCard(args, { showSlots: true }),
};

export const MotionNone: StoryObj<CardStoryArgs> = {
  args: { animation: 'reveal', motion: 'none' },
  render: (args) =>
    renderCard(args, {
      instruction: 'Motion is disabled, including the reveal preset.',
      showPlayControl: true,
    }),
};

export const ReducedMotion: StoryObj<CardStoryArgs> = {
  args: { animation: 'reveal' },
  render: (args) =>
    renderCard(args, {
      instruction: 'Enable your system reduced-motion preference, then select Play animation.',
      showPlayControl: true,
    }),
};

export const RevealAnimation: StoryObj<CardStoryArgs> = {
  args: { animation: 'reveal' },
  render: (args) =>
    renderCard(args, {
      instruction: 'The preset runs only when you select Play animation.',
      showSlots: true,
      showPlayControl: true,
    }),
};
