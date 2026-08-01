<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <HardHat class="b-icon text-amber" /> {{ t('civil.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('civil.heroTitle') }} <br />
            <span class="gradient-text">{{ t('civil.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('civil.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Civil+Engineering" class="btn-primary hero-btn">
              <HardHat class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Solving Spotlight -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('civil.badge')"
        :title="t('civil.heroTitle')"
        :highlightTitle="t('civil.heroTitleHighlight')"
        :description="t('civil.heroDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Infrastructure Construction -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Building2 class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('civil.card1Title') }}</h3>
          <p class="card-desc">{{ t('civil.card1Desc') }}</p>
        </div>

        <!-- 2. Road & Highway Engineering -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Compass class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('civil.card2Title') }}</h3>
          <p class="card-desc">{{ t('civil.card2Desc') }}</p>
        </div>

        <!-- 3. Complex Engineering Problem Solving -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Cpu class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('civil.card3Title') }}</h3>
          <p class="card-desc">{{ t('civil.card3Desc') }}</p>
        </div>

        <!-- 4. Site Preparation & Earthworks -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Shovel class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('civil.card4Title') }}</h3>
          <p class="card-desc">{{ t('civil.card4Desc') }}</p>
        </div>

        <!-- 5. Stormwater & Drainage Engineering -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Droplets class="tech-icon text-teal" /></div>
          <h3 class="card-title">{{ t('civil.card5Title') }}</h3>
          <p class="card-desc">{{ t('civil.card5Desc') }}</p>
        </div>

        <!-- 6. EPC Project Management -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Briefcase class="tech-icon text-emerald" /></div>
          <h3 class="card-title">{{ t('civil.card6Title') }}</h3>
          <p class="card-desc">{{ t('civil.card6Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- Engineering Methodology -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          :badge="t('civil.workflowBadge')"
          :title="t('civil.workflowTitle')"
          :highlightTitle="t('civil.workflowHighlight')"
          :description="t('civil.workflowDesc')"
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-amber">01</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('civil.step1Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('civil.step1Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('civil.step2Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('civil.step2Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('civil.step3Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('civil.step3Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('civil.step4Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('civil.step4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('civil.faqBadge')" :title="t('civil.faqTitle')" :highlightTitle="t('civil.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-amber" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('civil.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('civil.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Civil+Engineering" class="btn-primary">
            <HardHat class="btn-icon" /> <span>{{ t('civil.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { HardHat, Building2, Compass, Cpu, CheckCircle2, Shield, HelpCircle, Droplets, Briefcase } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const Shovel = HardHat;

const faqs = computed(() => [
  {
    question: t('civil.q1'),
    answer: t('civil.a1')
  },
  {
    question: t('civil.q2'),
    answer: t('civil.a2')
  },
  {
    question: t('civil.q3'),
    answer: t('civil.a3')
  }
]);
</script>

<style scoped>
.border-amber {
  border: 1px solid rgba(245, 158, 11, 0.3);
}
</style>
