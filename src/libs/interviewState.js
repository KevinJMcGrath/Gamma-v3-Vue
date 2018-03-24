const state = {
	status: {
		guid: ''
	},
	user: {
		firstname: 'Kevin',
		lastname: 'McGrath',
		email: 'kevin.mcgrath@symphony.com',
		dayphone: '610-328-9985',
		mobilephone: '215-828-6986',
		complete: false
	},
	company: {
		name: 'Ghostbusters, Inc.',
		industry: 'Consumer-Services',
		region: 'AMER',
		complete: false
	},
	service: {
		subdomain: 'mycompany',
		seats: 10,
		directoryname: 'My Company',
		support_tier: 'gold',
		promocode: 'GAMMA-2018',
		complete: false
	},
	legal: {
		terms_conditions: false,
		complete: false
	},
	billing: {
		type: 'card',
		address1: '14 North Moore Street',
		address2: 'Tribeca',
		city: 'New York',
		state: 'NY',
		zip: '10013',
		country: 'USA',
		stripe_token: {},
		complete: false
	},
	pricing: {
		onetime_fees: 500,
		pupm: 20,
		minimum_seats: 25,
		support_tiers: [
			{ key: "bronze", price: 0 },
			{ key: "silver", price: 500 },
			{ key: "gold", price: 1000 },
			{ key: "platinum", price: 2000 }
		]

		
	}
};

export default state;