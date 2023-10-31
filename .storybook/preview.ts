import type { Preview } from "@storybook/react";
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
  },
};

export default preview;
