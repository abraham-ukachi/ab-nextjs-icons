import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    {
      name: 'svg-stub',
      transform(_code, id) {
        if (id.endsWith('.svg')) {
          return { code: 'export default "svg-stub";', map: null };
        }
      },
    },
  ],
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    globals: true,
    reporters: 'default',
  },
});
