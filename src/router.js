const routers = [
    {
    	path: '/',
    	name: 'start',
        meta: {
            title: 'Symphony Signup'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {       
        path: '/email/',
        name: 'email',
        meta: {
            title: 'Symphony - Email Verification'
        },
        component: (resolve) => require(['./views/interview-email.vue'], resolve)
    },
    {    	
        path: '/contact/',
        name: 'contact',
        meta: {
            title: 'Symphony - Contact Details'
        },
        component: (resolve) => require(['./views/interview-contact.vue'], resolve)
    },
    {    	
        path: '/company/',
        name: 'company',
        meta: {
            title: 'Symphony - Company Details'
        },
        component: (resolve) => require(['./views/interview-company.vue'], resolve)
    },
    {    	
        path: '/service/',
        name: 'service',
        meta: {
            title: 'Symphony - Service Details'
        },
        component: (resolve) => require(['./views/interview-service.vue'], resolve)
    },
    {    	
        path: '/legal/',
        name: 'legal',
        meta: {
            title: 'Symphony - Terms and Conditions'
        },
        component: (resolve) => require(['./views/interview-legal.vue'], resolve)
    },
    {    	
        path: '/billing/',
        name: 'billing',
        meta: {
            title: 'Symphony - Billing Details'
        },
        component: (resolve) => require(['./views/interview-billing.vue'], resolve)
    },
    {    	
        path: '/summary/',
        name: 'summary',
        meta: {
            title: 'Symphony - Purchase Summary'
        },
        component: (resolve) => require(['./views/interview-summary.vue'], resolve)
    },
    {    	
        path: '/thankyou/',
        name: 'thankyou',
        meta: {
            title: 'Symphony - Thank You!'
        },
        component: (resolve) => require(['./views/interview-thankyou.vue'], resolve)
    }
];
export default routers;