import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import { withRedux } from './withRedux';

import 'tailwindcss/tailwind.css'
import '../src/assets/styles/index.css'
import 'remixicon/fonts/remixicon.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withRedux,
      withRouter, 
    ]
  },
};

export default preview;
