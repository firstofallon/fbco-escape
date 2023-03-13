import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex';
import firebase from "svelte-adapter-firebase";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({extensions:['.md']})
	],
	kit: {
		adapter: firebase()
	}
};

export default config;
