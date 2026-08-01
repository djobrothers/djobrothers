<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Ship class="b-icon text-cyan" /> {{ t('barge.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('barge.heroTitle') }} <br />
            <span class="gradient-text">{{ t('barge.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('barge.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Machinery+and+Barge+Hire" class="btn-primary hero-btn">
              <Ship class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Breakdown -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('barge.badge')"
        :title="t('barge.heroTitle')"
        :highlightTitle="t('barge.heroTitleHighlight')"
        :description="t('barge.heroDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-2 gap-8">
        
        <!-- Marine Barges Fleet -->
        <div class="glass-panel space-y-6 p-8 border-cyan">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-cyan-900/30 text-cyan-400">
              <Ship class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-cyan font-bold">{{ t('barge.badge') }}</span>
              <h3 class="card-title text-2xl">{{ t('barge.card1Title') }}</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            {{ t('barge.card1Desc') }}
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card1Spec1Label') }}</span>
              <span class="spec-val text-cyan font-bold">{{ t('barge.card1Spec1Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card1Spec2Label') }}</span>
              <span class="spec-val text-sky font-bold">{{ t('barge.card1Spec2Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card1Spec3Label') }}</span>
              <span class="spec-val text-teal font-bold">{{ t('barge.card1Spec3Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card1Spec4Label') }}</span>
              <span class="spec-val text-emerald font-bold">{{ t('barge.card1Spec4Val') }}</span>
            </div>
          </div>
        </div>

        <!-- Heavy Duty Machineries Fleet -->
        <div class="glass-panel space-y-6 p-8 border-amber">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-amber-900/30 text-amber-400">
              <Truck class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-amber font-bold">{{ t('barge.card2Badge') }}</span>
              <h3 class="card-title text-2xl">{{ t('barge.card2Title') }}</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            {{ t('barge.card2Desc') }}
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card2Spec1Label') }}</span>
              <span class="spec-val text-amber font-bold">{{ t('barge.card2Spec1Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card2Spec2Label') }}</span>
              <span class="spec-val text-sky font-bold">{{ t('barge.card2Spec2Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card2Spec3Label') }}</span>
              <span class="spec-val text-teal font-bold">{{ t('barge.card2Spec3Val') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('barge.card2Spec4Label') }}</span>
              <span class="spec-val text-emerald font-bold">{{ t('barge.card2Spec4Val') }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Rental Services Features -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('barge.whyBadge')"
        :title="t('barge.whyTitle')"
        :highlightTitle="t('barge.whyHighlight')"
        :description="t('barge.whyDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Certified Operators -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><ShieldCheck class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('barge.feat1Title') }}</h3>
          <p class="card-desc">{{ t('barge.feat1Desc') }}</p>
        </div>

        <!-- 2. Rapid Site Mobilization -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Truck class="tech-icon text-cyan" /></div>
          <h3 class="card-title">{{ t('barge.feat2Title') }}</h3>
          <p class="card-desc">{{ t('barge.feat2Desc') }}</p>
        </div>

        <!-- 3. Rigorous HSE & Maintenance -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Wrench class="tech-icon text-emerald" /></div>
          <h3 class="card-title">{{ t('barge.feat3Title') }}</h3>
          <p class="card-desc">{{ t('barge.feat3Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('barge.faqBadge')" :title="t('barge.faqTitle')" :highlightTitle="t('barge.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-cyan" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('barge.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('barge.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Machinery+and+Barge+Hire" class="btn-primary">
            <Ship class="btn-icon" /> <span>{{ t('barge.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Ship, Truck, Wrench, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const faqs = computed(() => [
  {
    question: t('barge.q1'),
    answer: t('barge.a1')
  },
  {
    question: t('barge.q2'),
    answer: t('barge.a2')
  },
  {
    question: t('barge.q3'),
    answer: t('barge.a3')
  }
]);
</script>

<style scoped>
.border-cyan { border: 1px solid rgba(6, 182, 212, 0.3); }
.border-amber { border: 1px solid rgba(245, 158, 11, 0.3); }
</style>
