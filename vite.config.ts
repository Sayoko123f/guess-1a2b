import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: 'https://sayoko123f.github.io/guess-1a2b/',
    build: {
        outDir: 'docs',
    },
});
