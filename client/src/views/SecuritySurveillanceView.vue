<template>
  <div class="page-wrapper">
    
    <!-- Flagship Banner -->
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
            <router-link to="/contact?service=Security+%26+Surveillance" class="btn-primary hero-btn">
              <Shield class="btn-icon" /> <span>{{ t('nav.requestConsultation') }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Grid -->
    <section class="section-padding container space-y-12" id="technologies">
      <SectionHeader
        :badge="t('secHardware.sectionBadge')"
        :title="t('secHardware.sectionTitle')"
        :highlightTitle="t('secHardware.sectionHighlight')"
        :description="t('secHardware.sectionDesc')"
        :center="true"
        :isFlagship="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. AI Video Analytics -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Cpu class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.radarTitle') }}</h3>
          <p class="card-desc">{{ t('secHardware.radarDesc') }}</p>
        </div>

        <!-- 2. CCTV & PTZ -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Video class="tech-icon text-sky" /></div>
          <h3 class="card-title">{{ t('secHardware.lidarTitle') }}</h3>
          <p class="card-desc">{{ t('secHardware.lidarDesc') }}</p>
        </div>

        <!-- 3. Thermal Imaging -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Eye class="tech-icon text-sky" /></div>
          <h3 class="card-title">Thermal Cameras & Radiometry</h3>
          <p class="card-desc">Long-range uncooled thermal sensor arrays providing zero-light visibility, smoke penetration, and temperature radiometric monitoring.</p>
        </div>

        <!-- 4. LiDAR & Radar -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Radio class="tech-icon text-sky" /></div>
          <h3 class="card-title">LiDAR & Radar Surveillance</h3>
          <p class="card-desc">Solid-state 3D LiDAR scanners and millimeter-wave security radars offering 360-degree spatial tracking and weather-immune target trajectory mapping up to 5km.</p>
        </div>

        <!-- 5. Biometrics & Access Control -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Fingerprint class="tech-icon text-sky" /></div>
          <h3 class="card-title">Biometrics & Access Control</h3>
          <p class="card-desc">Multi-factor biometric access control incorporating touchless 3D facial verification, palm vein scanning, RFID cards, and speed gate turnstiles.</p>
        </div>

        <!-- 6. Perimeter Intrusion Detection -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Zap class="tech-icon text-sky" /></div>
          <h3 class="card-title">Perimeter Intrusion Detection (PIDS)</h3>
          <p class="card-desc">Fibre-optic acoustic fence sensors, buried seismic vibration cables, and microwave barrier lines designed for near-zero false alarm intrusion reporting.</p>
        </div>

      </div>
    </section>

    <!-- Command Centers -->
    <section class="section-padding section-alt border-y">
      <div class="container">
        <div class="grid lg-grid-cols-12 gap-12 items-center">
          <div class="col-span-7 space-y-6">
            <div class="badge-tech badge-flagship">Command & Control Centers (C4I)</div>
            <h2 class="section-title">Centralized Command & <span class="gradient-text font-extrabold">Autonomous Drones</span></h2>
            <p class="text-muted text-sm leading-relaxed">
              We design state-of-the-art C4I control rooms with multi-screen video walls, PSIM software, and automated drone nesting dock integration.
            </p>
          </div>

          <div class="col-span-5">
            <div class="glass-panel space-y-4">
              <h3 class="card-title"><Activity class="f-icon text-sky" /> C4I Command Matrix</h3>
              <div class="spec-list space-y-2">
                <div class="spec-item"><span>PSIM Platform</span> <span class="spec-val text-sky">Genetec / Milestone</span></div>
                <div class="spec-item"><span>Video Latency</span> <span class="spec-val text-sky">&lt; 100ms H.265</span></div>
                <div class="spec-item"><span>Drone Dispatch</span> <span class="spec-val text-teal">Automated &lt; 45s</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Security Systems" :center="true" />
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
        <h2 class="card-title font-bold text-2xl justify-center">Ready to Deploy Defense-Grade Security?</h2>
        <p class="text-muted text-sm">Speak directly with a lead security architect to evaluate your site parameters or request an RFP proposal.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Security+%26+Surveillance" class="btn-primary">
            <ShieldCheck class="btn-icon" /> <span>Request Flagship Consultation</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Shield, ShieldCheck, Cpu, Video, Eye, Radio, Fingerprint, Zap, Activity, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import { t } from '../i18n';

const faqs = [
  {
    question: "Why is Security & Surveillance the flagship service of DJO Brothers?",
    answer: "Our founding leadership specializes in defense-grade surveillance, AI vision processing, and critical infrastructure protection across over 500 enterprise and government locations."
  },
  {
    question: "Can your video analytics integrate with our existing legacy CCTV cameras?",
    answer: "Yes. Our AI video analytics platforms connect with RTSP/ONVIF compliant legacy IP cameras through edge gateway servers, upgrading existing optical hardware without replacing cameras."
  },
  {
    question: "How do thermal and radar sensors function in remote pipeline environments?",
    answer: "We deploy ATEX explosion-proof thermal PTZ cameras paired with 360-degree ground surveillance radar. The radar detects intruders up to 5km away and automatically commands thermal cameras to track targets."
  }
];
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background-color: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.flagship-hero-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }
.banner-actions { display: flex; gap: 1rem; margin-top: 0.5rem; }

.tech-card { display: flex; flex-direction: column; gap: 1rem; }
.tech-icon-box { width: 48px; height: 48px; border-radius: 12px; background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(2, 132, 199, 0.25); display: flex; align-items: center; justify-content: center; }
.tech-icon { width: 24px; height: 24px; }
.card-title { font-size: 1.25rem; font-weight: 700; color: var(--color-text-primary); }
.card-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }

.section-alt { background-color: var(--bg-navy-900); transition: background-color 0.3s ease; }

.spec-item { padding: 0.75rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--color-text-primary); }
.spec-val { font-weight: 700; }

.faq-card { display: flex; flex-direction: column; gap: 0.5rem; padding: 1.5rem; }
.faq-q { font-size: 1rem; font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem; }
.faq-icon { width: 20px; height: 20px; flex-shrink: 0; }
.faq-a { font-size: 0.875rem; color: var(--color-text-secondary); padding-left: 1.75rem; line-height: 1.6; }

.btn-icon { width: 16px; height: 16px; }
.b-icon { width: 16px; height: 16px; }
.f-icon { width: 20px; height: 20px; }
.section-title { font-size: 2.25rem; font-weight: 800; color: var(--color-text-primary); }
.max-w-4xl { max-width: 896px; margin-left: auto; margin-right: auto; }
.max-w-3xl { max-width: 768px; margin-left: auto; margin-right: auto; }
.border-y { border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-8 > * + * { margin-top: 2rem; }
.space-y-12 > * + * { margin-top: 3rem; }
</style>
