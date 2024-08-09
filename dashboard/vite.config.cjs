const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true // This is typically for dev mode but let's ensure it's set.
  }
});

