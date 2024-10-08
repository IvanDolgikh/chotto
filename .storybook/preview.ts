import type { Preview } from "@storybook/vue3";
import '../src/assets/style.css';
import 'primeicons/primeicons.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
