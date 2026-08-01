<template>
  <div class="page-wrapper">
    
    <!-- Flagship Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech badge-flagship">
            <ShieldCheck class="b-icon" /> {{ t('secHardware.badge') }}
          </div>

          <h1 class="flagship-hero-title">
            {{ t('secHardware.heroTitle') }} <br />
            <span class="gradient-text-flagship">{{ t('secHardware.heroTitleHighlight') }}</span>
          </h1>

          <p class="page-subtitle">
            {{ t('secHardware.heroDesc') }}
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Security+Hardware" class="btn-primary hero-btn">
              <Shield class="btn-icon" /> <span>{{ t('secHardware.btnConsult') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Defense Radar & LiDAR Highlight Section -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('secHardware.sectionBadge')"
        :title="t('secHardware.sectionTitle')"
        :highlightTitle="t('secHardware.sectionHighlight')"
        :description="t('secHardware.sectionDesc')"
        :center="true"
        :isFlagship="true"
      />

      <div class="grid lg-grid-cols-2 gap-8">
        
        <!-- Radar Installation Box -->
        <div class="glass-panel space-y-6 p-8 border-sky">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-sky-900/30 text-sky-400">
              <Radio class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-sky font-bold">{{ t('secHardware.radarCapability') }}</span>
              <h3 class="card-title text-2xl">{{ t('secHardware.radarTitle') }}</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            {{ t('secHardware.radarDesc') }}
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.radarFreqLabel') }}</span>
              <span class="spec-val text-sky font-bold">{{ t('secHardware.radarFreqVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.radarTargetLabel') }}</span>
              <span class="spec-val text-sky font-bold">{{ t('secHardware.radarTargetVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.radarWeatherLabel') }}</span>
              <span class="spec-val text-teal font-bold">{{ t('secHardware.radarWeatherVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.radarDroneLabel') }}</span>
              <span class="spec-val text-amber font-bold">{{ t('secHardware.radarDroneVal') }}</span>
            </div>
          </div>
        </div>

        <!-- LiDAR Scanning Box -->
        <div class="glass-panel space-y-6 p-8 border-teal">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-teal-900/30 text-teal-400">
              <Eye class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-teal font-bold">{{ t('secHardware.lidarCapability') }}</span>
              <h3 class="card-title text-2xl">{{ t('secHardware.lidarTitle') }}</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            {{ t('secHardware.lidarDesc') }}
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.lidarResLabel') }}</span>
              <span class="spec-val text-teal font-bold">{{ t('secHardware.lidarResVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.lidarRangeLabel') }}</span>
              <span class="spec-val text-teal font-bold">{{ t('secHardware.lidarRangeVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.lidarPrivacyLabel') }}</span>
              <span class="spec-val text-sky font-bold">{{ t('secHardware.lidarPrivacyVal') }}</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">{{ t('secHardware.lidarFusionLabel') }}</span>
              <span class="spec-val text-emerald font-bold">{{ t('secHardware.lidarFusionVal') }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Comprehensive Security Hardware Ecosystem -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        :badge="t('secHardware.spectrumBadge')"
        :title="t('secHardware.spectrumTitle')"
        :highlightTitle="t('secHardware.spectrumHighlight')"
        :description="t('secHardware.spectrumDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. AI CCTV & PTZ Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Video class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card1Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card1Desc') }}</p>
        </div>

        <!-- 2. Perimeter Intrusion Detection (PIDS) -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Zap class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card2Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card2Desc') }}</p>
        </div>

        <!-- 3. Biometric Access Control & Speed Gates -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Fingerprint class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card3Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card3Desc') }}</p>
        </div>

        <!-- 4. C4ISR Command Center Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Cpu class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card4Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card4Desc') }}</p>
        </div>

        <!-- 5. Emergency Communication Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Activity class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card5Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card5Desc') }}</p>
        </div>

        <!-- 6. Power & Enclosure Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><ShieldCheck class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.card6Title') }}</h3>
          <p class="card-desc">{{ t('secHardware.card6Desc') }}</p>
        </div>

      </div>
    </section>

    <!-- Engineering Methodology -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          :badge="t('secHardware.workflowBadge')"
          :title="t('secHardware.workflowTitle')"
          :highlightTitle="t('secHardware.workflowHighlight')"
          :description="t('secHardware.workflowDesc')"
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">01</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('secHardware.step1Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('secHardware.step1Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">02</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('secHardware.step2Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('secHardware.step2Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">03</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('secHardware.step3Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('secHardware.step3Desc') }}</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">{{ t('secHardware.step4Title') }}</h4>
            <p class="text-xs text-muted leading-relaxed">{{ t('secHardware.step4Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader :badge="t('secHardware.faqBadge')" :title="t('secHardware.faqTitle')" :highlightTitle="t('secHardware.faqHighlight')" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-sky" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">{{ t('secHardware.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('secHardware.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Security+Hardware" class="btn-primary">
            <ShieldCheck class="btn-icon" /> <span>{{ t('secHardware.ctaBtn') }}</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Shield, ShieldCheck, Radio, Eye, Video, Zap, Fingerprint, Cpu, Activity, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const faqs = computed(() => [
  {
    question: t('secHardware.q1'),
    answer: t('secHardware.a1')
  },
  {
    question: t('secHardware.q2'),
    answer: t('secHardware.a2')
  },
  {
    question: t('secHardware.q3'),
    answer: t('secHardware.a3')
  }
]);
</script>

<style scoped>
.border-sky {
  border: 1px solid rgba(56, 189, 248, 0.3);
}
.border-teal {
  border: 1px solid rgba(20, 184, 166, 0.3);
}
</style>
