<template>
  <header :class="['app-header', { 'scrolled': isScrolled }]">
    <div class="container header-container">
      
      <!-- Brand Logo -->
      <router-link to="/" class="brand-logo">
        <div class="logo-icon-wrapper">
          <div class="logo-icon-inner">
            <Shield class="logo-shield" />
          </div>
        </div>
        <div class="brand-text">
          <span class="brand-name">DJO BROTHERS <span class="brand-accent">LIMITED</span></span>
          <span class="brand-tagline">Engineering & Security Solutions</span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <router-link to="/" class="nav-link" active-class="nav-link-active">Home</router-link>
        <router-link to="/about" class="nav-link" active-class="nav-link-active">About</router-link>
        
        <!-- Services Dropdown -->
        <div class="dropdown-wrapper">
          <router-link to="/services" class="nav-link dropdown-trigger" active-class="nav-link-active">
            Services
            <ChevronDown class="dropdown-icon" />
          </router-link>

          <!-- Dropdown Menu -->
          <div class="dropdown-menu">
            <router-link to="/services/security-hardware" class="dropdown-item flagship-item">
              <ShieldCheck class="item-icon flagship-icon" />
              <div>
                <div class="item-title text-sky flex items-center gap-2">
                  Security Hardware
                  <span class="flagship-tag">Flagship</span>
                </div>
                <div class="item-desc">Defense Radar, LiDAR & Surveillance</div>
              </div>
            </router-link>

            <router-link to="/services/cybersecurity-consultation" class="dropdown-item">
              <Lock class="item-icon text-indigo" />
              <div>
                <div class="item-title">Cybersecurity</div>
                <div class="item-desc">OT/ICS Defense & System Audits</div>
              </div>
            </router-link>

            <router-link to="/services/factory-hardware-installation" class="dropdown-item">
              <Factory class="item-icon text-emerald" />
              <div>
                <div class="item-title">Factory Hardware</div>
                <div class="item-desc">Machinery Installation & SCADA</div>
              </div>
            </router-link>

            <router-link to="/services/hardware-procurement-sales" class="dropdown-item">
              <ShoppingBag class="item-icon text-purple" />
              <div>
                <div class="item-title">Hardware Sales & Procurement</div>
                <div class="item-desc">OEM Provisioning & Global Logistics</div>
              </div>
            </router-link>

            <router-link to="/services/civil-engineering" class="dropdown-item">
              <HardHat class="item-icon text-amber" />
              <div>
                <div class="item-title">Civil Engineering</div>
                <div class="item-desc">Infrastructure & Problem Solutions</div>
              </div>
            </router-link>

            <router-link to="/services/heavy-machinery-barge-hire" class="dropdown-item">
              <Ship class="item-icon text-cyan" />
              <div>
                <div class="item-title">Machinery & Barge Hire</div>
                <div class="item-desc">Heavy Equipment & Marine Barges</div>
              </div>
            </router-link>

            <router-link to="/services/solar-installation" class="dropdown-item">
              <SunIcon class="item-icon text-yellow" />
              <div>
                <div class="item-title">Solar Power Systems</div>
                <div class="item-desc">Commercial & Industrial Solar</div>
              </div>
            </router-link>
          </div>
        </div>

        <router-link to="/contact" class="nav-link" active-class="nav-link-active">Contact</router-link>
      </nav>

      <!-- CTA Button & Theme Toggle -->
      <div class="desktop-cta">
        <!-- Theme Mode Toggle Button -->
        <button
          @click="toggleTheme"
          class="theme-toggle-btn"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <SunIcon v-if="isDark" class="toggle-theme-icon" />
          <Moon v-else class="toggle-theme-icon" />
        </button>

        <router-link to="/contact" class="btn-primary header-btn">
          <span>Request Consultation</span>
          <ArrowRight class="btn-icon" />
        </router-link>
      </div>

      <!-- Hamburger & Theme Toggle Button Mobile -->
      <div class="mobile-actions">
        <button
          @click="toggleTheme"
          class="theme-toggle-btn mobile-theme-btn"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <SunIcon v-if="isDark" class="toggle-theme-icon" />
          <Moon v-else class="toggle-theme-icon" />
        </button>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-toggle" aria-label="Toggle Navigation">
          <Menu v-if="!mobileMenuOpen" class="toggle-icon" />
          <X v-else class="toggle-icon" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="mobile-drawer">
      <router-link @click="mobileMenuOpen = false" to="/" class="mobile-link">Home</router-link>
      <router-link @click="mobileMenuOpen = false" to="/about" class="mobile-link">About Us</router-link>
      
      <div class="mobile-services-group">
        <div class="mobile-group-title">Services</div>
        <router-link @click="mobileMenuOpen = false" to="/services/security-hardware" class="mobile-link flagship-mobile">
          <ShieldCheck class="link-icon" /> Security Hardware (Radar & LiDAR)
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/cybersecurity-consultation" class="mobile-link">
          <Lock class="link-icon" /> Cybersecurity Consultation
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/factory-hardware-installation" class="mobile-link">
          <Factory class="link-icon" /> Factory Hardware Installation
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/hardware-procurement-sales" class="mobile-link">
          <ShoppingBag class="link-icon" /> Hardware Sales & Procurement
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/civil-engineering" class="mobile-link">
          <HardHat class="link-icon" /> Civil Engineering
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/heavy-machinery-barge-hire" class="mobile-link">
          <Ship class="link-icon" /> Heavy Machinery & Barge Hire
        </router-link>
        <router-link @click="mobileMenuOpen = false" to="/services/solar-installation" class="mobile-link">
          <SunIcon class="link-icon" /> Solar Power Systems
        </router-link>
      </div>

      <router-link @click="mobileMenuOpen = false" to="/contact" class="mobile-link">Contact Us</router-link>
      
      <div class="mobile-cta-wrapper">
        <router-link @click="mobileMenuOpen = false" to="/contact" class="btn-primary w-full">
          <span>Request Consultation</span>
          <ArrowRight class="btn-icon" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Shield, ShieldCheck, Lock, Factory, ShoppingBag, HardHat, Ship, Sun as SunIcon, Moon, ChevronDown, Menu, X, ArrowRight } from 'lucide-vue-next';
import { useTheme } from '../../composables/useTheme';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const { isDark, toggleTheme } = useTheme();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 0;
  transition: all 0.3s ease;
  background-color: transparent;
}

.app-header.scrolled {
  padding: 0.85rem 0;
  background-color: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0284C7, #14B8A6);
  padding: 2px;
}

.logo-icon-inner {
  width: 100%;
  height: 100%;
  background: var(--bg-navy-950);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.logo-shield {
  width: 20px;
  height: 20px;
  color: #38BDF8;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

.brand-accent {
  color: #38BDF8;
  font-weight: 600;
}

.brand-tagline {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  font-weight: 600;
  margin-top: -3px;
}

/* Desktop Nav */
.desktop-nav {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: color 0.2s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link-active {
  color: #0284C7 !important;
  font-weight: 700;
}

.dropdown-wrapper {
  position: relative;
  padding: 0.5rem 0;
}

.dropdown-wrapper:hover .dropdown-menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.dropdown-wrapper:hover .dropdown-icon {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: -20px;
  width: 290px;
  padding: 0.85rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 10px;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background: rgba(2, 132, 199, 0.08);
}

.flagship-item {
  background: rgba(2, 132, 199, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.item-icon {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  flex-shrink: 0;
}

.item-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.item-desc {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.flagship-tag {
  font-size: 0.65rem;
  padding: 2px 6px;
  background: rgba(56, 189, 248, 0.25);
  color: #0284C7;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
}

/* Desktop CTA */
.desktop-cta {
  display: none;
  align-items: center;
  gap: 1.25rem;
}

@media (min-width: 1024px) {
  .desktop-cta {
    display: flex;
  }
}

.theme-toggle-btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle-btn:hover {
  border-color: #0284C7;
}

.toggle-theme-icon {
  width: 18px;
  height: 18px;
}

.header-btn {
  padding: 0.7rem 1.4rem;
  font-size: 0.925rem;
  border-radius: 10px;
}

.btn-icon {
  width: 16px;
  height: 16px;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

@media (min-width: 1024px) {
  .mobile-actions {
    display: none;
  }
}

/* Mobile Toggle */
.mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text-primary);
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.toggle-icon {
  width: 24px;
  height: 24px;
}

/* Mobile Drawer */
.mobile-drawer {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .mobile-drawer {
    display: none;
  }
}

.mobile-link {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-link:hover {
  background: rgba(2, 132, 199, 0.1);
  color: #0284C7;
}

.flagship-mobile {
  color: #0284C7;
  background: rgba(2, 132, 199, 0.12);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.mobile-services-group {
  border-top: 1px solid var(--glass-border);
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-group-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  padding-left: 0.75rem;
}

.mobile-cta-wrapper {
  border-top: 1px solid var(--glass-border);
  padding-top: 1rem;
}
</style>
