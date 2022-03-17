var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		// branch: 'docs',
            repo: 'git@github.com:saewoonam/svelte-pages-v2.git',
		// repo: 'https://github.com/saewoonam/svelte-pages.git', // Update to point to your repository
		user: {
			name: 'Saewoo', // update to use your name
			email: 'nams@nist.gov' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
