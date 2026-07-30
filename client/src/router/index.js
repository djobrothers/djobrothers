import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import SecuritySurveillanceView from '../views/SecuritySurveillanceView.vue';
import SolarView from '../views/SolarView.vue';
import ConstructionView from '../views/ConstructionView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'DJO Brothers Engineering & Technology | Advanced Security, Solar & Construction' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Us | DJO Brothers Engineering & Technology' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: { title: 'Engineering Divisions | DJO Brothers Engineering & Technology' }
  },
  {
    path: '/services/security-surveillance',
    name: 'SecuritySurveillance',
    component: SecuritySurveillanceView,
    meta: { title: 'Flagship Security & Surveillance Systems | DJO Brothers' }
  },
  {
    path: '/services/solar-installation',
    name: 'SolarInstallation',
    component: SolarView,
    meta: { title: 'Commercial & Industrial Solar Solutions | DJO Brothers' }
  },
  {
    path: '/services/construction',
    name: 'Construction',
    component: ConstructionView,
    meta: { title: 'Road & Building Construction | DJO Brothers' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us | DJO Brothers Engineering & Technology' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
