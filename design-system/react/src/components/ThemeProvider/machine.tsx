import { assign, createMachine } from 'xstate';

import { store } from '~/hooks/useStore';
import type { ThemesObj } from '~/hooks/useTheme';
import { THEME_STORAGE_KEY } from '~/hooks/useTheme';
import { mergeDeep } from '~/utils/helpers';

type MachineContext = {
  themes: ThemesObj;
  current: string;
};

type MachineEvents = {
  type: 'SET_THEME';
  value: string;
};

const machine = createMachine({
  predictableActionArguments: true,
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  tsTypes: {} as import('./machine.typegen').Typegen0,
  schema: {
    context: {} as MachineContext,
    events: {} as MachineEvents,
  },
  id: 'themeProvider',
  initial: 'idle',
  entry: ['saveOnLocalStorage', 'addDocumentClass'],
  states: {
    idle: {
      on: {
        SET_THEME: {
          actions: ['setTheme', 'addDocumentClass'],
        },
      },
    },
  },
});

export const themeProviderMachine = machine.withConfig({
  actions: {
    saveOnLocalStorage: ({ current, themes }) => {
      localStorage.setItem(THEME_STORAGE_KEY, current);
      const components = themes[current]?.components || {};
      Object.entries(components ?? {}).forEach(([key, value]) => {
        const curr = store.getState()[key];
        store.state[key] = mergeDeep(curr, value);
      });
    },
    setTheme: assign({
      current: (_, ev) => {
        localStorage.setItem(THEME_STORAGE_KEY, ev.value);
        return ev.value;
      },
    }),
    addDocumentClass: ({ themes, current }) => {
      const selected = themes[current];
      const html = document.documentElement;
      html.classList.toggle(selected.theme, true);
    },
  },
});
