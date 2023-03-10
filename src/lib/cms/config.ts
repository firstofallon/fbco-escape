import type {Config} from '@staticcms/core';

export const config: Config = {
		backend: {
			name: 'git-gateway',
			branch: 'main # Branch to update (optional; defaults to master)',
      
			media_folder: 'static/images/uploads',
			public_folder: '/images/uploads',
			site_url: 'https://escape.firstofallon.com'
		},
		collections: {
			name: 'page',
			label: 'Page',
			folder: 'src/routes/pages/',
			create: true,
			slug: '{{slug}}/+page',
			fields: [
				{
					label: 'Layout',
					name: 'layout',
					widget: 'hidden',
					default: 'page'
				},
				{
					label: 'Title',
					name: 'title',
					widget: 'string'
				},
				{
					label: 'Publish Date',
					name: 'date',
					widget: 'datetime'
				},
				{
					label: 'Featured Image',
					name: 'thumbnail',
					widget: 'image'
				},
				{
					label: 'Body',
					name: 'body',
					widget: 'markdown'
				}
			]
		};