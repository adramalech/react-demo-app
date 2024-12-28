import { defineConfig, configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
    test: {
        // Your Vitest configuration options here
        exclude: [...configDefaults.exclude, 'excluded-file-pattern'],
        include: ['**/*.test.ts', '**/*.spec.ts'],
        globals: true,
        environment: 'jsdom',
    },
});