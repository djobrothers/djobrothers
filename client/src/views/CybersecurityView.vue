<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Lock class="b-icon text-indigo" /> {{ t('cyber.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('cyber.heroTitle') }} <br />
            <span class="gradient-text">{{ t('cyber.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('cyber.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Cybersecurity+Consultation" class="btn-primary hero-btn">
              <Shield class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Capabilities -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('cyber.badge')"
        :title="t('cyber.heroTitle')"
        :highlightTitle="t('cyber.heroTitleHighlight')"
        :description="t('cyber.heroDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. OT/ICS Security -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><Server class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('cyber.card1Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card1Desc') }}</p>
        </div>

        <!-- 2. Cyber-Physical Convergence -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><ShieldAlert class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('cyber.card2Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card2Desc') }}</p>
        </div>

        <!-- 3. Penetration Testing & Audits -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><SearchCode class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('cyber.card3Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card3Desc') }}</p>
        </div>

        <!-- 4. Zero-Trust Architecture -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><KeyRound class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('cyber.card4Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card4Desc') }}</p>
        </div>

        <!-- 5. Continuous Threat Monitoring -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Activity class="tech-icon text-teal" /></div>
          <h3 class="card-title">{{ t('cyber.card5Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card5Desc') }}</p>
        </div>

        <!-- 6. Regulatory & ISO Compliance -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><FileCheck class="tech-icon text-emerald" /></div>
          <h3 class="card-title">{{ t('cyber.card6Title') }}</h3>
          <p class="card-desc">{{ t('cyber.card6Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- Consultation Process -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          :badge="t('cyber.lifecycleBadge')"
          :title="t('cyber.lifecycleTitle')"
          :highlightTitle="t('cyber.lifecycleHighlight')"
          :description="t('cyber.lifecycleDesc')"
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-indigo">01</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('cyber.step1Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('cyber.step1Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('cyber.step2Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('cyber.step2Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('cyber.step3Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('cyber.step3Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('cyber.step4Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('cyber.step4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('cyber.faqBadge')" :title="t('cyber.faqTitle')" :highlightTitle="t('cyber.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-indigo" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('cyber.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('cyber.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Cybersecurity+Consultation" class="btn-primary">
            <Lock class="btn-icon" /> <span>{{ t('cyber.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Shield, Lock, Server, ShieldAlert, KeyRound, Activity, FileCheck, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const SearchCode = Lock;

const faqs = computed(() => [
  {
    question: t('cyber.q1'),
    answer: t('cyber.a1')
  },
  {
    question: t('cyber.q2'),
    answer: t('cyber.a2')
  },
  {
    question: t('cyber.q3'),
    answer: t('cyber.a3')
  }
]);
</script>

<style scoped>
.border-indigo {
  border: 1px solid rgba(99, 102, 241, 0.3);
}
</style>
