import '@andromeda/tokens/tokens.css';
import '@andromeda/tokens/dark';
import '@andromeda/tokens/light';

import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
  parameters: { controls: { expanded: true } },
};
export default preview;