import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    return {
        plugins: [react()],
        clearScreen: false,
        base: mode === 'production' ? '/repl/' : '/',
    }
  })
