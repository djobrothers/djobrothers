<template>
  <div class="page-wrapper">
    <!-- Header Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">About DJO Brothers</div>
          <h1 class="page-title">
            Pioneering High-Tech Infrastructure & <span class="gradient-text">Defense Systems</span>
          </h1>
          <p class="page-subtitle">
            DJO Brothers Engineering & Technology is an international engineering company dedicated to protecting critical assets through flagship surveillance technology while building sustainable energy grids and heavy civil infrastructure.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="section-padding container">
      <div class="grid lg-grid-cols-12 gap-12 items-center">
        <div class="col-span-7 space-y-6">
          <div class="badge-tech">Company Legacy</div>
          <h2 class="section-title">Built on Technical Precision & Uncompromising Standards</h2>
          <p class="text-muted leading-relaxed">
            Founded by a multidisciplinary team of systems engineers, security specialists, and civil infrastructure pioneers, DJO Brothers was formed to address the growing complexity of modern enterprise risk and energy demands.
          </p>
          <p class="text-muted text-sm leading-relaxed">
            Over the past decade, we have established our <strong>Security & Surveillance</strong> division as our primary flagship specialization—deploying AI video analytics, thermal tracking, and centralized command centers across high-security environments, oil fields, government infrastructure, and industrial complexes.
          </p>
        </div>

        <div class="col-span-5">
          <div class="glass-panel space-y-4">
            <h3 class="card-title"><Award class="icon text-sky" /> Engineering Benchmarks</h3>
            <div class="benchmark-list">
              <div class="benchmark-item">
                <ShieldCheck class="b-icon text-sky" />
                <div>
                  <h4 class="b-title">Flagship Security Excellence</h4>
                  <p class="b-desc">Design, installation, and commissioning of defense-grade surveillance networks across 500+ sensitive sites.</p>
                </div>
              </div>
              <div class="benchmark-item">
                <Sun class="b-icon text-amber" />
                <div>
                  <h4 class="b-title">Renewable Energy Matrix</h4>
                  <p class="b-desc">Over 150MW of installed commercial and industrial solar capacity with integrated storage battery banks.</p>
                </div>
              </div>
              <div class="benchmark-item">
                <Building2 class="b-icon text-teal" />
                <div>
                  <h4 class="b-title">Civil Infrastructure</h4>
                  <p class="b-desc">More than 1.2 million m² of commercial facilities, industrial structures, and highway paving completed.</p>
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
            <h3 class="card-title">Our Mission</h3>
            <p class="text-muted text-sm">
              To deliver intelligent, enterprise-grade security systems, resilient renewable power, and world-class civil infrastructure that protect lives, secure critical national assets, and power sustainable economic growth.
            </p>
          </div>

          <div class="glass-panel space-y-4">
            <div class="icon-box teal-box"><Eye class="box-icon text-teal" /></div>
            <h3 class="card-title">Our Vision</h3>
            <p class="text-muted text-sm">
              To be the global engineering benchmark in AI-powered surveillance technology, clean energy systems, and high-performance civil construction, setting the standard for technical excellence, safety, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section-padding container">
      <SectionHeader
        badge="Governance & Culture"
        title="Our Guiding"
        highlightTitle="Core Values"
        description="Every project we engineer is governed by strict core values that define our operational ethos."
        :center="true"
      />

      <div class="grid md-grid-cols-4 gap-6">
        <div class="glass-panel value-card">
          <CheckCircle2 class="v-icon text-sky" />
          <h4 class="v-title">Absolute Integrity</h4>
          <p class="v-desc">Honesty, transparent communication, and uncompromised compliance in every contract and partnership.</p>
        </div>
        <div class="glass-panel value-card">
          <Cpu class="v-icon text-sky" />
          <h4 class="v-title">Continuous Innovation</h4>
          <p class="v-desc">Integrating edge AI, thermal optics, LiDAR sensors, and smart grid software ahead of industry shifts.</p>
        </div>
        <div class="glass-panel value-card">
          <Lock class="v-icon text-teal" />
          <h4 class="v-title">Defense Reliability</h4>
          <p class="v-desc">Engineering fail-safe systems with redundant architecture designed for zero downtime in high-risk zones.</p>
        </div>
        <div class="glass-panel value-card">
          <Award class="v-icon text-amber" />
          <h4 class="v-title">Engineering Precision</h4>
          <p class="v-desc">Meticulous CAD drafting, site surveys, structural calculations, and rigorous pre-commissioning testing.</p>
        </div>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="cta-title">Partner with DJO Brothers Today</h2>
        <p class="text-muted text-sm">Connect with our senior engineering team to discuss your security, solar, or construction requirements.</p>
        <div class="flex justify-center">
          <router-link to="/contact" class="btn-primary">
            <span>Contact Solution Architects</span>
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

.section-alt {
  background-color: var(--bg-navy-900);
  transition: background-color 0.3s ease;
}

.benchmark-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.benchmark-item {
  padding: 1rem;
  background-color: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: background-color 0.3s ease;
}

.b-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.b-title {
  font-weight: 700;
  color: var(--color-text-primary);
  font-size: 0.95rem;
}

.b-desc {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.icon-box {
  width: 48px;
  height: 48px;
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
  width: 24px;
  height: 24px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.value-card {
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
  font-size: 0.825rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.btn-icon {
  width: 16px;
  height: 16px;
}

.max-w-3xl {
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
}

.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.border-y {
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
}
</style>
