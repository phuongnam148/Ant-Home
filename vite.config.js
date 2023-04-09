import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// doi 127.0.0.1 thanh localhost
import dns from 'dns';
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3001,
	},
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},
});
