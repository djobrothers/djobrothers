<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Factory class="b-icon text-emerald" /> {{ t('factory.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('factory.heroTitle') }} <br />
            <span class="gradient-text">{{ t('factory.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('factory.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Factory+Hardware" class="btn-primary hero-btn">
              <Factory class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Breakdown -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('factory.badge')"
        :title="t('factory.heroTitle')"
        :highlightTitle="t('factory.heroTitleHighlight')"
        :description="t('factory.heroDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Heavy Machine & Plant Assembly -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Wrench class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('factory.card1Title') }}</h3>
          <p class="card-desc">{{ t('factory.card1Desc') }}</p>
        </div>

        <!-- 2. Conveyor & Automated Line Assembly -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Settings class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('factory.card2Title') }}</h3>
          <p class="card-desc">{{ t('factory.card2Desc') }}</p>
        </div>

        <!-- 3. SCADA & Control Cabinet Installation -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Cpu class="w-6 h-6" /></div>
          <h3 class="card-title">{{ t('factory.card3Title') }}</h3>
          <p class="card-desc">{{ t('factory.card3Desc') }}</p>
        </div>

        <!-- 4. Factory Power & Substation Wiring -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Zap class="tech-icon text-amber" /></div>
          <h3 class="card-title">{{ t('factory.card4Title') }}</h3>
          <p class="card-desc">{{ t('factory.card4Desc') }}</p>
        </div>

        <!-- 5. Pneumatic & Hydraulic Systems -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Gauge class="tech-icon text-cyan" /></div>
          <h3 class="card-title">{{ t('factory.card5Title') }}</h3>
          <p class="card-desc">{{ t('factory.card5Desc') }}</p>
        </div>

        <!-- 6. Factory Modernization & Retrofitting -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><RefreshCw class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('factory.card6Title') }}</h3>
          <p class="card-desc">{{ t('factory.card6Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- Industrial Execution Standards -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          :badge="t('factory.processBadge')"
          :title="t('factory.processTitle')"
          :highlightTitle="t('factory.processHighlight')"
          :description="t('factory.processDesc')"
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">01</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('factory.step1Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('factory.step1Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('factory.step2Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('factory.step2Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-amber">03</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('factory.step3Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('factory.step3Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">04</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('factory.step4Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('factory.step4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('factory.faqBadge')" :title="t('factory.faqTitle')" :highlightTitle="t('factory.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-emerald" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('factory.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('factory.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Factory+Hardware" class="btn-primary">
            <Factory class="btn-icon" /> <span>{{ t('factory.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Factory, Wrench, Settings, Cpu, Zap, Gauge, RefreshCw, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const faqs = computed(() => [
  {
    question: t('factory.q1'),
    answer: t('factory.a1')
  },
  {
    question: t('factory.q2'),
    answer: t('factory.a2')
  },
  {
    question: t('factory.q3'),
    answer: t('factory.a3')
  }
]);
</script>

<style scoped>
.border-emerald {
  border: 1px solid rgba(16, 185, 129, 0.3);
}
</style>
