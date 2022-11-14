import { createRouter, createWebHashHistory } from "vue-router";

import About from '@/components/about.vue'
import Login from '@/components/login.vue'
import Signup from '@/components/signup.vue'
import Contact from '@/components/contact.vue'
import Home from '@/components/home.vue'
import Catalog from '@/components/catalog.vue'
import Servicing from '@/components/servicing.vue'

const routes = [
    { path: '/about', name: 'about', component: About},
    { path: '/login', name: 'login', component: Login},
    { path: '/signup', name: 'signup', component: Signup},
    { path: '/contact', name: 'contact', component: Contact},
    { path: '/', name: 'home', component: Home}, 
    { path: '/catalog', name: 'catalog', component: Catalog},
    { path: '/servicing', name: 'servicing', component: Servicing},
];

const router = createRouter ({
    history: createWebHashHistory(),
    routes,
  });

export default router;