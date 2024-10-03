import { defineConfig, Plugin, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';


// console plugin
const GEADEZIST = (): Plugin => {
  return {
    name: 'console-plugin',
    configureServer(server: ViteDevServer) {
      server.httpServer?.once('listening', () => {
        console.log('\n Happy Hacking, 🫠 🫠 😴\n GEADEZIST\n');
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), GEADEZIST()],
  define: {
    global: 'window',
  },
  server: {
    host: '0.0.0.0',
    port: 9999
  }
});
