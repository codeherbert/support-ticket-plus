import { defineConfig } from 'vite';
import dns from 'node:dns';
import react from '@vitejs/plugin-react';

// This line helps resolve potential Node.js DNS reordering issues for 'localhost'
dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()], // Add it to the plugins array
  server: {
    // Specify the port (default is 5173)
    port: 5173,
    host: 'localhost',
    // Configure custom proxy rules for the dev server (e.g., for backend API integration)
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});