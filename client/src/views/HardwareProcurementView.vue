<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <ShoppingBag class="b-icon text-purple" /> {{ t('procurement.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('procurement.heroTitle') }} <br />
            <span class="gradient-text">{{ t('procurement.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('procurement.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Hardware+Procurement" class="btn-primary hero-btn">
              <ShoppingBag class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('procurement.badge')"
        :title="t('procurement.heroTitle')"
        :highlightTitle="t('procurement.heroTitleHighlight')"
        :description="t('procurement.heroDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Security & Defense Hardware Sales -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><ShieldCheck class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('procurement.card1Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card1Desc') }}</p>
        </div>

        <!-- 2. Factory & Industrial Hardware Supply -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><Factory class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('procurement.card2Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card2Desc') }}</p>
        </div>

        <!-- 3. Heavy Civil & Machinery Sourcing -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><Truck class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('procurement.card3Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card3Desc') }}</p>
        </div>

        <!-- 4. Global Supply Chain & Logistics -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Globe class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('procurement.card4Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card4Desc') }}</p>
        </div>

        <!-- 5. Quality Assurance & Factory Inspection -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><CheckCircle2 class="tech-icon text-emerald" /></div>
          <h3 class="card-title">{{ t('procurement.card5Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card5Desc') }}</p>
        </div>

        <!-- 6. Critical Spare Parts Management -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Layers class="tech-icon text-amber" /></div>
          <h3 class="card-title">{{ t('procurement.card6Title') }}</h3>
          <p class="card-desc">{{ t('procurement.card6Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- Procurement Workflow -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          :badge="t('procurement.lifecycleBadge')"
          :title="t('procurement.lifecycleTitle')"
          :highlightTitle="t('procurement.lifecycleHighlight')"
          :description="t('procurement.lifecycleDesc')"
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-purple">01</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('procurement.step1Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('procurement.step1Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('procurement.step2Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('procurement.step2Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('procurement.step3Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('procurement.step3Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('procurement.step4Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('procurement.step4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('procurement.faqBadge')" :title="t('procurement.faqTitle')" :highlightTitle="t('procurement.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-purple" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('procurement.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('procurement.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Hardware+Procurement" class="btn-primary">
            <ShoppingBag class="btn-icon" /> <span>{{ t('procurement.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ShoppingBag, ShieldCheck, Factory, Truck, Globe2, FileCheck2, HelpCircle, CheckCircle2, Layers } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const Globe = Globe2;

const faqs = computed(() => [
  {
    question: t('procurement.q1'),
    answer: t('procurement.a1')
  },
  {
    question: t('procurement.q2'),
    answer: t('procurement.a2')
  },
  {
    question: t('procurement.q3'),
    answer: t('procurement.a3')
  }
]);
</script>

<style scoped>
.border-purple {
  border: 1px solid rgba(168, 85, 247, 0.3);
}
</style>
