import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './define.js';

type BadgeStoryArgs = {
  theme?: 'light' | 'dark';
};

const variants = [
  ['neutral', 'Neutral'],
  ['info', 'Information'],
  ['success', 'Success'],
  ['warning', 'Warning'],
  ['danger', 'Danger'],
] as const;

const renderBadges = (
  theme: BadgeStoryArgs['theme'],
  motion: 'auto' | 'none' = 'auto',
  instruction?: string,
) => html`
    <div
      data-theme=${theme ?? 'light'}
      style="background:var(--ds-color-surface);color:var(--ds-color-text);padding:1rem"
    >
      ${instruction ? html`<p style="color:var(--ds-color-muted)">${instruction}</p>` : ''}
      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem">
        ${variants.map(
          ([variant, label]) => html`
            <and-badge variant=${variant} animation="pulse" duration="220" motion=${motion}>
              ${label}
            </and-badge>
          `,
        )}
        <button
          type="button"
          style="border:1px solid transparent;border-radius:var(--ds-radius-md,0.5rem);background:var(--ds-color-secondary,#f4f4f5);color:var(--ds-color-on-secondary,#18181b);padding:0.5rem 1rem;font:inherit;cursor:pointer"
          @click=${(event: Event) => {
            const badge = (event.currentTarget as HTMLButtonElement)
              .parentElement?.querySelector('and-badge');
            badge?.playAnimation();
          }}
        >
          Play animation
        </button>
      </div>
    </div>
  `;

const meta: Meta<BadgeStoryArgs> = {
  title: 'Components/Badge',
  component: 'and-badge',
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark'] },
  },
  args: { theme: 'light' },
  render: (args) => renderBadges(args.theme),
};
export default meta;

export const LightTheme: StoryObj<BadgeStoryArgs> = {
  args: { theme: 'light' },
};

export const DarkTheme: StoryObj<BadgeStoryArgs> = {
  args: { theme: 'dark' },
};

export const MotionNone: StoryObj<BadgeStoryArgs> = {
  render: (args) =>
    renderBadges(args.theme, 'none', 'Motion is disabled, including the pulse preset.'),
};

export const ReducedMotion: StoryObj<BadgeStoryArgs> = {
  render: (args) =>
    renderBadges(
      args.theme,
      'auto',
      'Enable your system reduced-motion preference, then select Play animation.',
    ),
};
