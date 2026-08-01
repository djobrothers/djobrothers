<template>
  <div class="page-wrapper">
    <!-- Header Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">{{ t('aboutPage.badge') }}</div>
          <h1 class="page-title">
            {{ t('aboutPage.heroTitle') }} <span class="gradient-text">{{ t('aboutPage.heroTitleHighlight') }}</span>
          </h1>
          <p class="page-subtitle">
            {{ t('aboutPage.heroDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding container">
      <div class="grid lg-grid-cols-12 gap-12 items-center">
        <div class="col-span-7 space-y-6">
          <div class="badge-tech">{{ t('aboutPage.legacyBadge') }}</div>
          <h2 class="section-title">{{ t('aboutPage.legacyTitle') }}</h2>
          <p class="text-muted leading-relaxed">
            {{ t('aboutPage.legacyP1') }}
          </p>
          <p class="text-muted text-sm leading-relaxed">
            {{ t('aboutPage.legacyP2') }}
          </p>
        </div>

        <div class="col-span-5">
          <div class="glass-panel space-y-4">
            <h3 class="card-title"><Award class="icon text-sky" /> {{ t('aboutPage.capabilitiesTitle') }}</h3>
            <div class="benchmark-list">
              <div class="benchmark-item">
                <ShieldCheck class="b-icon text-sky" />
                <div>
                  <h4 class="b-title">{{ t('aboutPage.cap1Title') }}</h4>
                  <p class="b-desc">{{ t('aboutPage.cap1Desc') }}</p>
                </div>
              </div>
              <div class="benchmark-item">
                <Sun class="b-icon text-amber" />
                <div>
                  <h4 class="b-title">{{ t('aboutPage.cap2Title') }}</h4>
                  <p class="b-desc">{{ t('aboutPage.cap2Desc') }}</p>
                </div>
              </div>
              <div class="benchmark-item">
                <Building2 class="b-icon text-teal" />
                <div>
                  <h4 class="b-title">{{ t('aboutPage.cap3Title') }}</h4>
                  <p class="b-desc">{{ t('aboutPage.cap3Desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section-padding section-alt border-y" id="mission">
      <div class="container">
        <div class="grid md-grid-cols-2 gap-8">
          <div class="glass-panel space-y-4">
            <div class="icon-box sky-box"><Target class="box-icon text-sky" /></div>
            <h3 class="card-title">{{ t('aboutPage.missionTitle') }}</h3>
            <p class="text-muted text-sm">
              {{ t('aboutPage.missionDesc') }}
            </p>
          </div>

          <div class="glass-panel space-y-4">
            <div class="icon-box teal-box"><Eye class="box-icon text-teal" /></div>
            <h3 class="card-title">{{ t('aboutPage.visionTitle') }}</h3>
            <p class="text-muted text-sm">
              {{ t('aboutPage.visionDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section-padding container">
      <SectionHeader
        :badge="t('aboutPage.valuesBadge')"
        :title="t('aboutPage.valuesTitle')"
        :highlightTitle="t('aboutPage.valuesHighlight')"
        :description="t('aboutPage.valuesDesc')"
        :center="true"
      />

      <div class="grid md-grid-cols-4 gap-6">
        <div class="glass-panel value-card">
          <CheckCircle2 class="v-icon text-sky" />
          <h4 class="v-title">{{ t('aboutPage.val1Title') }}</h4>
          <p class="v-desc">{{ t('aboutPage.val1Desc') }}</p>
        </div>
        <div class="glass-panel value-card">
          <Cpu class="v-icon text-sky" />
          <h4 class="v-title">{{ t('aboutPage.val2Title') }}</h4>
          <p class="v-desc">{{ t('aboutPage.val2Desc') }}</p>
        </div>
        <div class="glass-panel value-card">
          <Lock class="v-icon text-teal" />
          <h4 class="v-title">{{ t('aboutPage.val3Title') }}</h4>
          <p class="v-desc">{{ t('aboutPage.val3Desc') }}</p>
        </div>
        <div class="glass-panel value-card">
          <Award class="v-icon text-amber" />
          <h4 class="v-title">{{ t('aboutPage.val4Title') }}</h4>
          <p class="v-desc">{{ t('aboutPage.val4Desc') }}</p>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="cta-title">{{ t('aboutPage.ctaTitle') }}</h2>
        <p class="text-muted text-sm">{{ t('aboutPage.ctaDesc') }}</p>
        <div class="flex justify-center">
          <router-link to="/contact" class="btn-primary">
            <span>{{ t('aboutPage.ctaBtn') }}</span>
            <ArrowRight class="btn-icon" />
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ShieldCheck, Award, Target, Eye, CheckCircle2, Sun, Building2, Cpu, Lock, ArrowRight } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';
</script>

<style scoped>
.page-wrapper {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.page-banner {
  padding: 4rem 0;
  background-color: var(--bg-navy-950);
  border-bottom: 1px solid var(--glass-border);
  transition: background-color 0.3s ease;
}

.banner-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.1;
}

.page-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  width: 20px;
  height: 20px;
}

.benchmark-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.benchmark-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
}

.b-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.b-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.b-desc {
  font-size: 0.825rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
  line-height: 1.5;
}

.section-alt {
  background-color: var(--bg-navy-900);
  transition: background-color 0.3s ease;
}

.border-y {
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sky-box {
  background: rgba(2, 132, 199, 0.1);
  border: 1px solid rgba(2, 132, 199, 0.25);
}

.teal-box {
  background: rgba(13, 148, 136, 0.1);
  border: 1px solid rgba(13, 148, 136, 0.25);
}

.box-icon {
  width: 22px;
  height: 22px;
}

.value-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.v-icon {
  width: 28px;
  height: 28px;
}

.v-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.v-desc {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.cta-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
</style>
