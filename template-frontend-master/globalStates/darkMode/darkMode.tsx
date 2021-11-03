import { createState, useState, State } from '@hookstate/core';

interface DarkMode {
  get: () => boolean;
  toggle: () => void;
}

// internal variables
const darkModeState = createState(false);

const wrapState = (estado: State<boolean>) => ({
  get: () => estado.value,
  toggle: () => estado.set((valor) => !valor),
});

// The following 2 functions can be exported now:
export const useDarkModeState = (): DarkMode =>
  wrapState(useState(darkModeState));

export const accessDarkModeState = (): DarkMode => wrapState(darkModeState);
