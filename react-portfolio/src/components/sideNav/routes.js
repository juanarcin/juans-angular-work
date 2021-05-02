const links = [

	{
		text: 'google',
		url: 'http://www.facebook.com',
	},
	{
		text: 'about',
		url: '/about',
	},
	{
		text: 'work',
		url: '/work',
		subnav: [
			{
				text: 'work1',
				url: '/work-1'
			},
			{
				text: 'work2',
				url: '/work-2',
				subnav: [
					{
						text: 'work2a',
						url: '/work-2a'
					},
					{
						text: 'work2b',
						url: '/work-2b'
					},
				]
			},
			{
				text: 'work3',
				url: '/work-3'
			},
		]
	},
	{
		text: 'contact',
		url: '/contact',
	},
]

export default links;