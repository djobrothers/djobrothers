<template>
  <div class="home-page">
    
    <!-- Hero Section -->
    <section class="hero-section bg-tech-grid">
      <div class="glow-bg glow-1 animate-pulse-glow"></div>
      <div class="glow-bg glow-2"></div>

      <div class="container relative">
        <div class="hero-grid">
          
          <!-- Left Column -->
          <div class="hero-content">
            <div class="badge-tech badge-flagship">
              <Wrench class="badge-icon" />
              <span>{{ t('hero.badge') }}</span>
            </div>

            <h1 class="hero-title">
              {{ t('hero.titleLine1') }} <br />
              <span class="gradient-text-flagship">{{ t('hero.titleLine2') }}</span>
            </h1>

            <p class="hero-subtitle">
              {{ t('hero.subtitle') }}
            </p>

            <!-- Hero Actions -->
            <div class="hero-actions">
              <router-link to="/contact" class="btn-primary hero-btn">
                <span>{{ t('hero.getInTouch') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>

              <router-link to="/services" class="btn-secondary hero-btn">
                <span>{{ t('hero.exploreServices') }}</span>
                <ChevronRight class="btn-icon text-muted" />
              </router-link>
            </div>

            <!-- Stats -->
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-num text-sky">{{ t('home.stats.divsNum') }}</div>
                <div class="stat-label">{{ t('home.stats.divsLabel') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-teal">{{ t('home.stats.projNum') }}</div>
                <div class="stat-label">{{ t('home.stats.projLabel') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-amber">{{ t('home.stats.solvedNum') }}</div>
                <div class="stat-label">{{ t('home.stats.solvedLabel') }}</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-emerald">{{ t('home.stats.isoNum') }}</div>
                <div class="stat-label">{{ t('home.stats.isoLabel') }}</div>
              </div>
            </div>
          </div>

          <!-- Right Column Card -->
          <div class="hero-visual">
            <div class="glass-panel visual-card">
              <div class="visual-header">
                <div class="live-status">
                  <div class="live-dot"></div>
                  <span class="status-label">{{ t('home.hub.statusLabel') }}</span>
                </div>
                <span class="status-badge">{{ t('home.hub.matrixActive') }}</span>
              </div>

              <!-- Interactive Node Info -->
              <div class="node-box">
                <div class="node-target">
                  <span>{{ t('home.hub.scopeLabel') }}</span>
                  <span class="target-status">{{ t('home.hub.operational') }}</span>
                </div>

                <div class="node-grid">
                  <div class="node-card">
                    <div class="node-title">
                      <span>{{ t('home.hub.radarTitle') }}</span>
                      <Radio class="node-icon text-sky" />
                    </div>
                    <div class="node-val">{{ t('home.hub.radarSub') }}</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>{{ t('home.hub.fleetTitle') }}</span>
                      <Ship class="node-icon text-teal" />
                    </div>
                    <div class="node-val">{{ t('home.hub.fleetSub') }}</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>{{ t('home.hub.factoryTitle') }}</span>
                      <Factory class="node-icon text-emerald" />
                    </div>
                    <div class="node-val">{{ t('home.hub.factorySub') }}</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>{{ t('home.hub.cyberTitle') }}</span>
                      <Lock class="node-icon text-indigo" />
                    </div>
                    <div class="node-val">{{ t('home.hub.cyberSub') }}</div>
                  </div>
                </div>

                <div class="node-ai">
                  <div class="ai-label">
                    <Cpu class="ai-icon" />
                    <span>{{ t('home.hub.aiLabel') }}</span>
                  </div>
                  <span class="ai-time">{{ t('home.hub.aiTime') }}</span>
                </div>
              </div>

              <div class="visual-footer">
                <router-link to="/services" class="btn-primary w-full justify-center">
                  <Wrench class="btn-icon" />
                  <span>{{ t('home.hub.btnExplore') }}</span>
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section-padding overview-section">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-content space-y-4">
            <div class="badge-tech">{{ t('home.overview.badge') }}</div>
            <h2 class="section-title">
              {{ t('home.overview.title') }} <span class="gradient-text">{{ t('home.overview.titleHighlight') }}</span>
            </h2>
            <p class="section-desc">
              {{ t('home.overview.desc1') }}
            </p>
            <p class="section-desc-secondary">
              {{ t('home.overview.desc2') }}
            </p>

            <div class="overview-cards-row">
              <div class="overview-mini-card">
                <ShieldCheck class="mini-icon text-sky" />
                <h4 class="mini-title">{{ t('home.overview.card1Title') }}</h4>
                <p class="mini-desc">{{ t('home.overview.card1Desc') }}</p>
              </div>

              <div class="overview-mini-card">
                <Award class="mini-icon text-teal" />
                <h4 class="mini-title">{{ t('home.overview.card2Title') }}</h4>
                <p class="mini-desc">{{ t('home.overview.card2Desc') }}</p>
              </div>
            </div>
          </div>

          <div class="overview-matrix">
            <div class="glass-panel matrix-card">
              <h3 class="matrix-title">
                <Activity class="matrix-header-icon" />
                {{ t('home.matrix.title') }}
              </h3>

              <div class="space-y-5">
                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Shield class="p-icon text-sky" /> {{ t('home.matrix.item1Name') }}</span>
                    <span class="text-sky font-bold">{{ t('home.matrix.item1Tag') }}</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill flagship-fill"></div>
                  </div>
                </div>

                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Sun class="p-icon text-amber" /> {{ t('home.matrix.item2Name') }}</span>
                    <span class="text-amber font-bold">{{ t('home.matrix.item2Tag') }}</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill solar-fill"></div>
                  </div>
                </div>

                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Building2 class="p-icon text-teal" /> {{ t('home.matrix.item3Name') }}</span>
                    <span class="text-teal font-bold">{{ t('home.matrix.item3Tag') }}</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill construction-fill"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Division Showcase Section (Flagship Highlighted) -->
    <section class="section-padding divisions-section">
      <div class="container">
        <SectionHeader
          :badge="t('home.divisions.badge')"
          :title="t('home.divisions.title')"
          :highlightTitle="t('home.divisions.titleHighlight')"
          :description="t('home.divisions.desc')"
          :center="true"
        />

        <div class="divisions-grid">
          
          <!-- Flagship Card -->
          <div class="glass-panel flagship-card">
            <div class="flagship-top-tag">{{ t('home.divisions.flagshipTag') }}</div>

            <div class="flagship-card-grid">
              <div class="flagship-left space-y-4">
                <div class="badge-tech badge-flagship">
                  <ShieldCheck class="badge-icon" />
                  <span>{{ t('home.divisions.flagshipBadge') }}</span>
                </div>

                <h3 class="flagship-card-title">{{ t('home.divisions.flagshipTitle') }}</h3>

                <p class="flagship-card-desc">
                  {{ t('home.divisions.flagshipDesc') }}
                </p>

                <div class="flagship-features-grid">
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat1') }}</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat2') }}</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat3') }}</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat4') }}</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat5') }}</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> {{ t('home.divisions.feat6') }}</div>
                </div>

                <div class="flagship-actions">
                  <router-link to="/services/security-hardware" class="btn-primary">
                    <span>{{ t('home.divisions.btnExplore') }}</span>
                    <ArrowRight class="btn-icon" />
                  </router-link>
                  <router-link to="/contact?service=Security+Hardware" class="btn-secondary">
                    <span>{{ t('home.divisions.btnAudit') }}</span>
                  </router-link>
                </div>
              </div>

              <!-- Graphic Preview -->
              <div class="flagship-preview">
                <div class="preview-header">
                  <span class="preview-title"><Lock class="preview-icon" /> {{ t('home.divisions.previewTitle') }}</span>
                  <span class="preview-status">{{ t('home.divisions.previewStatus') }}</span>
                </div>
                <div class="preview-list">
                  <div class="preview-item">
                    <div>
                      <div class="item-name">{{ t('home.divisions.pItem1Name') }}</div>
                      <div class="item-sub">{{ t('home.divisions.pItem1Sub') }}</div>
                    </div>
                    <span class="item-badge">{{ t('home.divisions.pItem1Badge') }}</span>
                  </div>
                  <div class="preview-item">
                    <div>
                      <div class="item-name">{{ t('home.divisions.pItem2Name') }}</div>
                      <div class="item-sub">{{ t('home.divisions.pItem2Sub') }}</div>
                    </div>
                    <span class="item-badge">{{ t('home.divisions.pItem2Badge') }}</span>
                  </div>
                  <div class="preview-item">
                    <div>
                      <div class="item-name">{{ t('home.divisions.pItem3Name') }}</div>
                      <div class="item-sub">{{ t('home.divisions.pItem3Sub') }}</div>
                    </div>
                    <span class="item-badge text-teal">{{ t('home.divisions.pItem3Badge') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary Divisions Cards (All Services) -->
          <div class="secondary-grid">
            <!-- 1. Cybersecurity -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box sky-box"><Lock class="sec-icon text-indigo" /></div>
              <h3 class="sec-title">{{ t('home.cards.cyberTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.cyberDesc') }}</p>
              <router-link to="/services/cybersecurity-consultation" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.cyberBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 2. Factory Hardware -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box teal-box"><Factory class="sec-icon text-emerald" /></div>
              <h3 class="sec-title">{{ t('home.cards.factoryTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.factoryDesc') }}</p>
              <router-link to="/services/factory-hardware-installation" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.factoryBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 3. Hardware Procurement -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><ShoppingBag class="sec-icon text-purple" /></div>
              <h3 class="sec-title">{{ t('home.cards.procurementTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.procurementDesc') }}</p>
              <router-link to="/services/hardware-procurement-sales" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.procurementBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 4. Civil Engineering -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><HardHat class="sec-icon text-amber" /></div>
              <h3 class="sec-title">{{ t('home.cards.civilTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.civilDesc') }}</p>
              <router-link to="/services/civil-engineering" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.civilBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 5. Heavy Machinery & Barge Hire -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box sky-box"><Ship class="sec-icon text-cyan" /></div>
              <h3 class="sec-title">{{ t('home.cards.bargeTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.bargeDesc') }}</p>
              <router-link to="/services/heavy-machinery-barge-hire" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.bargeBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 6. Solar Installation -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><Sun class="sec-icon text-yellow" /></div>
              <h3 class="sec-title">{{ t('home.cards.solarTitle') }}</h3>
              <p class="sec-desc">{{ t('home.cards.solarDesc') }}</p>
              <router-link to="/services/solar-installation" class="btn-secondary w-full justify-between">
                <span>{{ t('home.cards.solarBtn') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Enquiry Form Preview -->
    <section class="section-padding enquiry-preview-section">
      <div class="container">
        <div class="enquiry-grid">
          <div class="enquiry-text space-y-4">
            <div class="badge-tech badge-flagship">{{ t('home.enquiry.badge') }}</div>
            <h2 class="section-title">
              {{ t('home.enquiry.title') }} <span class="gradient-text">{{ t('home.enquiry.titleHighlight') }}</span>
            </h2>
            <p class="section-desc">
              {{ t('home.enquiry.desc') }}
            </p>
          </div>

          <div class="enquiry-form-wrapper">
            <EnquiryForm initialService="Security & Surveillance" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Shield, ShieldCheck, Sun, Building2, Cpu, Eye, Radio, ChevronRight, ArrowRight, CheckCircle, Lock, Award, Activity, Factory, ShoppingBag, HardHat, Ship, Wrench } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';
import EnquiryForm from '../components/contact/EnquiryForm.vue';
import { t } from '../i18n';
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding-top: 9rem;
  padding-bottom: 5.5rem;
  background-color: var(--bg-navy-950);
  transition: background-color 0.3s ease;
  overflow: hidden;
}

.glow-bg {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.glow-1 {
  top: 15%;
  left: 5%;
  width: 500px;
  height: 500px;
  background: rgba(2, 132, 199, 0.1);
  filter: blur(120px);
}

.glow-2 {
  bottom: 10%;
  right: 5%;
  width: 400px;
  height: 400px;
  background: rgba(13, 148, 136, 0.06);
  filter: blur(100px);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 640px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.hero-btn {
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--glass-border);
}

@media (min-width: 640px) {
  .hero-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-num {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1;
}

.stat-label {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  margin-top: 0.35rem;
  font-weight: 500;
}

/* Right Card */
.visual-card {
  padding: 1.75rem;
  border-color: var(--color-border-glow);
  box-shadow: var(--shadow-card-hover);
}

.visual-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--glass-border);
}

.live-status {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #10B981;
  box-shadow: 0 0 10px #10B981;
  animation: pulse 2s infinite;
}

.status-label {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.status-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-electric-600);
  background: var(--color-electric-light);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.node-box {
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.node-target {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.target-status {
  color: #10B981;
}

.node-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

.node-card {
  padding: 0.85rem;
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.node-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.775rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.node-icon {
  width: 16px;
  height: 16px;
}

.node-val {
  font-size: 0.725rem;
  color: var(--color-text-muted);
}

.node-ai {
  padding: 0.85rem 1rem;
  background: linear-gradient(90deg, rgba(2, 132, 199, 0.1), rgba(13, 148, 136, 0.1));
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
}

.ai-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.ai-icon {
  width: 18px;
  height: 18px;
  color: var(--color-electric-600);
}

.ai-time {
  font-size: 0.75rem;
  color: var(--color-electric-600);
  font-weight: 700;
}

.visual-footer {
  padding-top: 1rem;
  border-top: 1px solid var(--glass-border);
}

/* Overview Section */
.overview-section {
  background-color: var(--bg-navy-900);
  transition: background-color 0.3s ease;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .overview-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.overview-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.75rem;
  }
}

.section-desc {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.section-desc-secondary {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.overview-cards-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 1rem;
}

@media (min-width: 640px) {
  .overview-cards-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.overview-mini-card {
  padding: 1.25rem;
  background: var(--bg-navy-950);
  border: 1px solid var(--glass-border);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mini-icon {
  width: 24px;
  height: 24px;
}

.mini-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.mini-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* Matrix Card */
.matrix-card {
  padding: 2rem;
}

.matrix-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--glass-border);
  margin-bottom: 1.5rem;
}

.matrix-header-icon {
  width: 22px;
  height: 22px;
  color: var(--color-electric-600);
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 600;
}

.progress-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-primary);
}

.p-icon {
  width: 16px;
  height: 16px;
}

.progress-bar-bg {
  height: 8px;
  background: var(--bg-navy-900);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 999px;
}

.flagship-fill {
  width: 100%;
  background: linear-gradient(90deg, #0284C7, #0D9488);
}

.solar-fill {
  width: 85%;
  background: linear-gradient(90deg, #F59E0B, #D97706);
}

.construction-fill {
  width: 88%;
  background: linear-gradient(90deg, #0D9488, #059669);
}

/* Divisions Section */
.divisions-section {
  background-color: var(--bg-navy-950);
  transition: background-color 0.3s ease;
}

.divisions-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.flagship-card {
  position: relative;
  border-color: var(--color-border-glow);
  padding: 2.5rem;
  overflow: hidden;
  background: var(--glass-bg);
}

.flagship-top-tag {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, #0284C7, #0D9488);
  color: #FFFFFF;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.4rem 1.25rem;
  border-bottom-left-radius: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.flagship-card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .flagship-card-grid {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.flagship-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.flagship-card-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.flagship-card-desc {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.flagship-features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.75rem;
  padding: 0.5rem 0;
}

@media (min-width: 640px) {
  .flagship-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  padding: 0.5rem 0.85rem;
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
}

.tag-icon {
  width: 16px;
  height: 16px;
  color: var(--color-electric-600);
}

.flagship-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
}

/* Flagship Preview */
.flagship-preview {
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--glass-border);
}

.preview-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-icon {
  width: 16px;
  height: 16px;
  color: var(--color-electric-600);
}

.preview-status {
  font-size: 0.75rem;
  font-weight: 700;
  color: #10B981;
}

.preview-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.preview-item {
  padding: 0.85rem;
  background: var(--bg-navy-950);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-name {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.item-sub {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.item-badge {
  font-size: 0.725rem;
  font-weight: 700;
  color: var(--color-electric-600);
  background: var(--color-electric-light);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

/* Secondary Grid */
.secondary-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .secondary-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .secondary-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.secondary-card {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sec-icon-box {
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

.amber-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.sec-icon {
  width: 24px;
  height: 24px;
}

.sec-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.sec-desc {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex-grow: 1;
}

/* Enquiry Section */
.enquiry-preview-section {
  background-color: var(--bg-navy-900);
  transition: background-color 0.3s ease;
}

.enquiry-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .enquiry-grid {
    grid-template-columns: 0.9fr 1.1fr;
  }
}

.enquiry-text {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
