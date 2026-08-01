<template>
  <div class="page-wrapper">
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech text-teal bg-teal-light"><Building2 class="b-icon" /> {{ t('civil.badge') }}</div>
          <h1 class="page-title">{{ t('civil.heroTitle') }} <span class="gradient-text">{{ t('civil.heroTitleHighlight') }}</span></h1>
          <p class="page-subtitle">{{ t('civil.heroDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding container">
      <div class="grid md-grid-cols-3 gap-8">
        <div class="glass-panel card-box">
          <div class="icon-box teal-box"><Truck class="box-icon text-teal" /></div>
          <h3 class="card-title">{{ t('civil.card1Title') }}</h3>
          <p class="card-desc">{{ t('civil.card1Desc') }}</p>
        </div>

        <div class="glass-panel card-box">
          <div class="icon-box teal-box"><Building2 class="box-icon text-teal" /></div>
          <h3 class="card-title">{{ t('civil.card2Title') }}</h3>
          <p class="card-desc">{{ t('civil.card2Desc') }}</p>
        </div>

        <div class="glass-panel card-box">
          <div class="icon-box teal-box"><HardHat class="box-icon text-teal" /></div>
          <h3 class="card-title">{{ t('civil.badge') }}</h3>
          <p class="card-desc">{{ t('civil.heroDesc') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="cta-title">{{ t('civil.heroTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('civil.heroDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Road+%26+Building+Construction" class="btn-primary">
            <span>{{ t('nav.requestConsultation') }}</span> <ArrowRight class="btn-icon" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Building2, Truck, HardHat, ArrowRight } from 'lucide-vue-next';
import { t } from '../i18n';
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background-color: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.page-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }

.bg-teal-light { background: rgba(20,184,166,0.1); border-color: rgba(20,184,166,0.3); }
.b-icon { width: 16px; height: 16px; }

.card-box { display: flex; flex-direction: column; gap: 1rem; }
.icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.teal-box { background: rgba(20, 184, 166, 0.1); border: 1px solid rgba(20, 184, 166, 0.25); }
.box-icon { width: 24px; height: 24px; }
.card-title { font-size: 1.25rem; font-weight: 700; color: var(--color-text-primary); }
.card-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }

.cta-title { font-size: 1.75rem; font-weight: 800; color: var(--color-text-primary); }
.btn-icon { width: 16px; height: 16px; }
.max-w-3xl { max-width: 768px; margin-left: auto; margin-right: auto; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
</style>
