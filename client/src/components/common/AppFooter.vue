<template>
  <footer class="app-footer">
    <div class="container relative">
      <div class="footer-grid">
        <!-- Company Info -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="logo-icon-wrapper">
              <div class="logo-icon-inner">
                <BrandLogoIcon class="logo-shield" />
              </div>
            </div>
            <div class="flex flex-col">
              <span class="brand-name">DJO BROTHERS <span class="brand-accent">LIMITED</span></span>
              <span class="text-xs text-sky font-bold tracking-wider">CAC Reg. No: RC 8554182</span>
            </div>
          </div>

          <p class="brand-desc">
            {{ t('footer.brandDesc') }}
          </p>

          <div class="flagship-badge-wrapper">
            <span class="badge-tech badge-flagship">
              {{ t('footer.flagshipBadge') }}
            </span>
          </div>
        </div>

        <!-- Core Services Links -->
        <div class="footer-col">
          <h4 class="col-title">{{ t('footer.coreServices') }}</h4>
          <ul class="footer-links">
            <li>
              <router-link
                to="/services/security-hardware"
                class="link-item flagship-link"
              >
                <ChevronRight class="chevron" /> {{ t('header.securityHardware') }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/cybersecurity-consultation"
                class="link-item"
              >
                <ChevronRight class="chevron" /> {{ t('header.cybersecurity') }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/factory-hardware-installation"
                class="link-item"
              >
                <ChevronRight class="chevron" /> {{ t('header.factoryHardware') }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/hardware-procurement-sales"
                class="link-item"
              >
                <ChevronRight class="chevron" /> {{ t('header.hardwareProcurement') }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/civil-engineering" class="link-item">
                <ChevronRight class="chevron" /> {{ t('header.civilEngineering') }}
              </router-link>
            </li>
            <li>
              <router-link
                to="/services/heavy-machinery-barge-hire"
                class="link-item"
              >
                <ChevronRight class="chevron" /> {{ t('header.bargeHire') }}
              </router-link>
            </li>
            <li>
              <router-link to="/services/solar-installation" class="link-item">
                <ChevronRight class="chevron" /> {{ t('header.solar') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Corporate Links -->
        <div class="footer-col">
          <h4 class="col-title">{{ t('footer.companyTrust') }}</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/about" class="link-item"
                >{{ t('footer.aboutUs') }}</router-link
              >
            </li>
            <li>
              <router-link to="/about#mission" class="link-item"
                >{{ t('footer.missionValues') }}</router-link
              >
            </li>
            <li>
              <router-link to="/about#safety" class="link-item"
                >{{ t('footer.hseQa') }}</router-link
              >
            </li>
            <li>
              <router-link to="/services" class="link-item"
                >{{ t('footer.allDivisions') }}</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="link-item"
                >{{ t('footer.contactTeam') }}</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <h4 class="col-title">{{ t('footer.contactInfo') }}</h4>
          <ul class="footer-contact">
            <li class="contact-item">
              <FileCheck2 class="icon text-sky" />
              <span class="font-bold text-sky">CAC Reg. No: RC 8554182</span>
            </li>
            <li class="contact-item">
              <MapPin class="icon text-sky" />
              <span>54 Enerhen Road, Enerhen, Warri, Delta State, Nigeria</span>
            </li>
            <li class="contact-item">
              <Phone class="icon text-sky" />
              <span>+234 905 197 4366</span>
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
        <p>© {{ currentYear }} DJO Brothers Limited (RC 8554182). {{ t('footer.rights') }}</p>
        <div class="bottom-tags">
          <span>{{ t('footer.tag1') }}</span>
          <span>{{ t('footer.tag2') }}</span>
          <span>{{ t('footer.tag3') }}</span>
          <span>{{ t('footer.tag4') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import {
  Shield,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  FileCheck2,
} from "lucide-vue-next";
import BrandLogoIcon from "./BrandLogoIcon.vue";
import { t } from "../../i18n";

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
  background: linear-gradient(135deg, #0284c7, #14b8a6);
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
  color: #38bdf8;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.brand-accent {
  color: #38bdf8;
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

.footer-links,
.footer-contact {
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
  color: #38bdf8;
}

.flagship-link {
  color: #38bdf8;
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
  color: #38bdf8;
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
