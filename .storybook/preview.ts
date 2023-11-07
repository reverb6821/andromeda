import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';
import withFormik from '@bbbtech/storybook-formik';
import i18n from '../src/i18n/config';

import 'tailwindcss/tailwind.css'
import '../src/index.css'
import 'remixicon/fonts/remixicon.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
  },
  decorators: [withRouter, withFormik]
};

export default preview;
