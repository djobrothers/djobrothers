<template>
  <footer class="app-footer">
    <div class="container relative">
      <div class="footer-grid">
        
        <!-- Company Info -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="logo-icon-wrapper">
              <div class="logo-icon-inner">
                <Shield class="logo-shield" />
              </div>
            </div>
            <span class="brand-name">DJO BROTHERS <span class="brand-accent">LIMITED</span></span>
          </div>

          <p class="brand-desc">
            DJO Brothers Limited provides innovative solutions to complex engineering problems. We specialize in high-level defense Radar & LiDAR security hardware, cybersecurity consultation, factory hardware installation, technical procurement, civil engineering, and heavy machinery & barge hiring.
          </p>

          <div class="flagship-badge-wrapper">
            <span class="badge-tech badge-flagship">
              Flagship: Defense Radar, LiDAR & Security Hardware
            </span>
          </div>
        </div>

        <!-- Core Services Links -->
        <div class="footer-col">
          <h4 class="col-title">Core Services</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/services/security-hardware" class="link-item flagship-link">
                <ChevronRight class="chevron" /> Security Hardware (Radar/LiDAR)
              </router-link>
            </li>
            <li>
              <router-link to="/services/cybersecurity-consultation" class="link-item">
                <ChevronRight class="chevron" /> Cybersecurity Consultation
              </router-link>
            </li>
            <li>
              <router-link to="/services/factory-hardware-installation" class="link-item">
                <ChevronRight class="chevron" /> Factory Hardware Installation
              </router-link>
            </li>
            <li>
              <router-link to="/services/hardware-procurement-sales" class="link-item">
                <ChevronRight class="chevron" /> Hardware Provision & Procurement
              </router-link>
            </li>
            <li>
              <router-link to="/services/civil-engineering" class="link-item">
                <ChevronRight class="chevron" /> Civil Engineering & Infrastructure
              </router-link>
            </li>
            <li>
              <router-link to="/services/heavy-machinery-barge-hire" class="link-item">
                <ChevronRight class="chevron" /> Heavy Machinery & Barge Hire
              </router-link>
            </li>
            <li>
              <router-link to="/services/solar-installation" class="link-item">
                <ChevronRight class="chevron" /> Solar Power Systems
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Corporate Links -->
        <div class="footer-col">
          <h4 class="col-title">Company & Trust</h4>
          <ul class="footer-links">
            <li><router-link to="/about" class="link-item">About DJO Brothers Limited</router-link></li>
            <li><router-link to="/about#mission" class="link-item">Engineering Mission & Values</router-link></li>
            <li><router-link to="/about#safety" class="link-item">HSE & Quality Assurance</router-link></li>
            <li><router-link to="/services" class="link-item">All Service Divisions</router-link></li>
            <li><router-link to="/contact" class="link-item">Contact Engineering Team</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <h4 class="col-title">Headquarters</h4>
          <ul class="footer-contact">
            <li class="contact-item">
              <MapPin class="icon text-sky" />
              <span>54 Enerhen Road, Enerhen, Warri, Delta State, Nigeria</span>
            </li>
            <li class="contact-item">
              <Phone class="icon text-sky" />
              <span>+234 813 786 0082</span>
            </li>
            <li class="contact-item">
              <Mail class="icon text-sky" />
              <span>contact@djobrothers.com</span>
            </li>
            <li class="contact-item">
              <Clock class="icon text-teal" />
              <span>Mon - Fri: 08:00 - 18:00 GMT+1</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>© {{ currentYear }} DJO Brothers Limited. All Rights Reserved.</p>
        <div class="bottom-tags">
          <span>Defense Radar & LiDAR</span>
          <span>Cybersecurity & Factory Hardware</span>
          <span>Civil Engineering & Barge Hire</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { Shield, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-vue-next';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.app-footer {
  background-color: var(--bg-navy-950);
  border-top: 1px solid var(--glass-border);
  padding-top: 4rem;
  padding-bottom: 3rem;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--glass-border);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon-wrapper {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0284C7, #14B8A6);
  padding: 2px;
}

.logo-icon-inner {
  width: 100%;
  height: 100%;
  background: var(--bg-navy-950);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-shield {
  width: 18px;
  height: 18px;
  color: #38BDF8;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.brand-accent {
  color: #38BDF8;
  font-weight: 600;
}

.brand-desc {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  max-width: 380px;
}

.col-title {
  color: var(--color-text-primary);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(56, 189, 248, 0.3);
  display: inline-block;
}

.footer-links, .footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.link-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;
}

.link-item:hover {
  color: #38BDF8;
}

.flagship-link {
  color: #38BDF8;
  font-weight: 600;
}

.sub-item {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  padding-left: 1.25rem;
}

.chevron {
  width: 14px;
  height: 14px;
  color: #38BDF8;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.5;
}

.icon {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  flex-shrink: 0;
}

.footer-bottom {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.bottom-tags {
  display: flex;
  gap: 1.5rem;
}
</style>
