import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './define.js';

type ButtonStoryArgs = {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  animation?: 'none' | 'press';
  duration?: number;
  motion?: 'auto' | 'none';
  theme?: 'light' | 'dark';
};

const renderButton = (args: ButtonStoryArgs, instruction?: string, showPlayControl = false) => html`
  <div
    data-theme=${args.theme ?? 'light'}
    style="background:var(--ds-color-surface);color:var(--ds-color-text);padding:1rem"
  >
    ${instruction ? html`<p style="color:var(--ds-color-muted)">${instruction}</p>` : ''}
    <div style="display:flex;align-items:center;gap:0.75rem">
      <and-button
        variant=${args.variant ?? 'primary'}
        ?disabled=${args.disabled ?? false}
        animation=${args.animation ?? 'none'}
        duration=${args.duration ?? 220}
        motion=${args.motion ?? 'auto'}
      >
        Orbital button
      </and-button>
      ${
        showPlayControl
          ? html`<button
              type="button"
              style="border:1px solid transparent;border-radius:var(--ds-radius-md,0.5rem);background:var(--ds-color-secondary,#f4f4f5);color:var(--ds-color-on-secondary,#18181b);padding:0.5rem 1rem;font:inherit;cursor:pointer"
              @click=${(event: Event) => {
                const button = (
                  event.currentTarget as HTMLButtonElement
                ).parentElement?.querySelector('and-button');
                button?.playAnimation();
              }}
            >
              Play animation
            </button>`
          : ''
      }
    </div>
  </div>
`;

const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  component: 'and-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    animation: { control: 'select', options: ['none', 'press'] },
    duration: { control: { type: 'number', min: 1, step: 10 } },
    motion: { control: 'select', options: ['auto', 'none'] },
    theme: { control: 'select', options: ['light', 'dark'] },
  },
  args: {
    variant: 'primary',
    disabled: false,
    animation: 'none',
    duration: 220,
    motion: 'auto',
    theme: 'light',
  },
  render: (args) => renderButton(args),
};
export default meta;

export const Primary: StoryObj<ButtonStoryArgs> = {};
export const Secondary: StoryObj<ButtonStoryArgs> = { args: { variant: 'secondary' } };
export const Disabled: StoryObj<ButtonStoryArgs> = { args: { disabled: true } };

export const KeyboardFocus: StoryObj<ButtonStoryArgs> = {
  render: (args) =>
    renderButton(args, 'Press Tab to focus the button and inspect its focus-visible ring.'),
};

export const MotionNone: StoryObj<ButtonStoryArgs> = {
  args: { animation: 'press', motion: 'none' },
  render: (args) => renderButton(args, 'Motion is disabled, including the press preset.', true),
};

export const ReducedMotion: StoryObj<ButtonStoryArgs> = {
  args: { animation: 'press' },
  render: (args) =>
    renderButton(
      args,
      'Enable your system reduced-motion preference, then select Play animation.',
      true,
    ),
};

export const PressAnimation: StoryObj<ButtonStoryArgs> = {
  args: { animation: 'press' },
  render: (args) =>
    renderButton(args, 'The preset runs only when you select Play animation.', true),
};
