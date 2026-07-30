import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import SecurityHardwareView from '../views/SecurityHardwareView.vue';
import CybersecurityView from '../views/CybersecurityView.vue';
import FactoryHardwareView from '../views/FactoryHardwareView.vue';
import HardwareProcurementView from '../views/HardwareProcurementView.vue';
import CivilEngineeringView from '../views/CivilEngineeringView.vue';
import MachineryBargeHireView from '../views/MachineryBargeHireView.vue';
import SolarView from '../views/SolarView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'DJO Brothers Limited | Advanced Security Hardware, Cybersecurity & Civil Engineering' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About Us | DJO Brothers Limited' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: { title: 'Engineering & Security Divisions | DJO Brothers Limited' }
  },
  {
    path: '/services/security-hardware',
    name: 'SecurityHardware',
    component: SecurityHardwareView,
    alias: '/services/security-surveillance',
    meta: { title: 'Security Hardware & Defense Radar / LiDAR | DJO Brothers Limited' }
  },
  {
    path: '/services/cybersecurity-consultation',
    name: 'CybersecurityConsultation',
    component: CybersecurityView,
    meta: { title: 'Cybersecurity Consultation & Infrastructure Defense | DJO Brothers Limited' }
  },
  {
    path: '/services/factory-hardware-installation',
    name: 'FactoryHardwareInstallation',
    component: FactoryHardwareView,
    meta: { title: 'Factory Hardware & Industrial Installation | DJO Brothers Limited' }
  },
  {
    path: '/services/hardware-procurement-sales',
    name: 'HardwareProcurementSales',
    component: HardwareProcurementView,
    meta: { title: 'Hardware Provision & Technical Procurement | DJO Brothers Limited' }
  },
  {
    path: '/services/civil-engineering',
    name: 'CivilEngineering',
    component: CivilEngineeringView,
    alias: '/services/construction',
    meta: { title: 'Civil Engineering & Infrastructure Solutions | DJO Brothers Limited' }
  },
  {
    path: '/services/heavy-machinery-barge-hire',
    name: 'HeavyMachineryBargeHire',
    component: MachineryBargeHireView,
    meta: { title: 'Heavy Duty Machinery & Marine Barge Hire | DJO Brothers Limited' }
  },
  {
    path: '/services/solar-installation',
    name: 'SolarInstallation',
    component: SolarView,
    meta: { title: 'Solar & Renewable Power Microgrids | DJO Brothers Limited' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us | DJO Brothers Limited' }
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
