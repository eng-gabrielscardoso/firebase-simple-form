import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@src': './src',
			'@lib': './src/lib',
			'@components': './src/lib/components',
			'@stores': './src/lib/stores',
			'@templates': './src/lib/templates',
			'@utils': './src/lib/utils',
			'@config': './src/config',
			'@services': './src/services',
			'@types': './src/types',
			'@styles': './src/styles'
		}
	}
};

export default config;
