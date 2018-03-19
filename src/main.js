import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

//require('dotenv').config();


Vue.use(VueRouter);
Vue.use(iView);

//Take the contents of router.js and pass it in as the "routes"
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
//Instantiate the Vue Router
const router = new VueRouter(RouterConfig);

//testing process.env
console.log("Exporting Environment Variables: ");
console.log(process.env.NODE_ENV);
console.log(process.env.SFDC_EMAIL_KEY); 

//Navigation Guards
//https://router.vuejs.org/en/advanced/navigation-guards.html
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

//Instantiate the global Vue instance
//Note that it uses the stubbed App.vue file as the rendering template
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
