<template>
  <div class="page-wrapper">
    
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">{{ t('servicesPage.badge') }}</div>
          <h1 class="page-title">
            {{ t('servicesPage.heroTitle') }} <span class="gradient-text">{{ t('servicesPage.heroTitleHighlight') }}</span>
          </h1>
          <p class="page-subtitle">
            {{ t('servicesPage.heroDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview Matrix -->
    <section class="section-padding container space-y-12">
      
      <!-- 1. Flagship Security Hardware Division -->
      <div class="glass-panel flagship-box">
        <div class="flagship-badge-top">★ {{ t('nav.flagship') }}</div>

        <div class="grid lg-grid-cols-12 gap-10 items-center">
          <div class="col-span-7 space-y-6">
            <div class="badge-tech badge-flagship">
              <ShieldCheck class="b-icon" /> {{ t('secHardware.badge') }}
            </div>

            <h2 class="div-title">{{ t('header.securityHardware') }}</h2>

            <p class="text-muted leading-relaxed">
              {{ t('secHardware.heroDesc') }}
            </p>

            <div class="grid md-grid-cols-3 gap-3">
              <div class="sub-feature"><Radio class="f-icon text-sky" /> {{ t('servicesPage.sub1') }}</div>
              <div class="sub-feature"><Eye class="f-icon text-sky" /> {{ t('servicesPage.sub2') }}</div>
              <div class="sub-feature"><Video class="f-icon text-sky" /> {{ t('servicesPage.sub3') }}</div>
              <div class="sub-feature"><Zap class="f-icon text-sky" /> {{ t('servicesPage.sub4') }}</div>
              <div class="sub-feature"><Fingerprint class="f-icon text-sky" /> {{ t('servicesPage.sub5') }}</div>
              <div class="sub-feature"><Cpu class="f-icon text-sky" /> {{ t('servicesPage.sub6') }}</div>
            </div>

            <div>
              <router-link to="/services/security-hardware" class="btn-primary">
                <span>{{ t('common.viewDetails') }}</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>

          <div class="col-span-5 side-card">
            <h4 class="side-title"><ShieldCheck class="f-icon text-sky" /> {{ t('servicesPage.appsTitle') }}</h4>
            <ul class="app-list">
              <li class="app-item"><span>{{ t('servicesPage.app1') }}</span> <span class="app-tag">{{ t('servicesPage.app1Tag') }}</span></li>
              <li class="app-item"><span>{{ t('servicesPage.app2') }}</span> <span class="app-tag">{{ t('servicesPage.app2Tag') }}</span></li>
              <li class="app-item"><span>{{ t('servicesPage.app3') }}</span> <span class="app-tag">{{ t('servicesPage.app3Tag') }}</span></li>
              <li class="app-item"><span>{{ t('servicesPage.app4') }}</span> <span class="app-tag">{{ t('servicesPage.app4Tag') }}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 2. Cybersecurity Consultation -->
      <div class="glass-panel sec-box indigo-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-indigo bg-indigo-light"><Lock class="b-icon" /> {{ t('servicesPage.div2Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div2Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div2Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/cybersecurity-consultation" class="btn-secondary">
                <span>{{ t('servicesPage.div2Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-indigo font-bold text-sm">{{ t('servicesPage.div2SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div2SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div2RoiLabel') }}</span> <span class="text-indigo font-bold">{{ t('servicesPage.div2RoiVal') }}</span></div>
          </div>
        </div>
      </div>

      <!-- 3. Factory Hardware Installation -->
      <div class="glass-panel sec-box emerald-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-emerald bg-emerald-light"><Factory class="b-icon" /> {{ t('servicesPage.div3Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div3Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div3Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/factory-hardware-installation" class="btn-secondary">
                <span>{{ t('servicesPage.div3Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-emerald font-bold text-sm">{{ t('servicesPage.div3SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div3SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div3RoiLabel') }}</span> <span class="text-emerald font-bold">{{ t('servicesPage.div3RoiVal') }}</span></div>
          </div>
        </div>
      </div>

      <!-- 4. Hardware Sales & Technical Procurement -->
      <div class="glass-panel sec-box purple-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-purple bg-purple-light"><ShoppingBag class="b-icon" /> {{ t('servicesPage.div4Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div4Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div4Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/hardware-procurement-sales" class="btn-secondary">
                <span>{{ t('servicesPage.div4Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-purple font-bold text-sm">{{ t('servicesPage.div4SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div4SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div4RoiLabel') }}</span> <span class="text-purple font-bold">{{ t('servicesPage.div4RoiVal') }}</span></div>
          </div>
        </div>
      </div>

      <!-- 5. Civil Engineering & Problem Solving -->
      <div class="glass-panel sec-box amber-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-amber bg-amber-light"><HardHat class="b-icon" /> {{ t('servicesPage.div5Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div5Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div5Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/civil-engineering" class="btn-secondary">
                <span>{{ t('servicesPage.div5Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-amber font-bold text-sm">{{ t('servicesPage.div5SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div5SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div5RoiLabel') }}</span> <span class="text-amber font-bold">{{ t('servicesPage.div5RoiVal') }}</span></div>
          </div>
        </div>
      </div>

      <!-- 6. Heavy Machinery & Barge Hire -->
      <div class="glass-panel sec-box cyan-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-cyan bg-cyan-light"><Ship class="b-icon" /> {{ t('servicesPage.div6Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div6Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div6Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/heavy-machinery-barge-hire" class="btn-secondary">
                <span>{{ t('servicesPage.div6Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-cyan font-bold text-sm">{{ t('servicesPage.div6SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div6SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div6RoiLabel') }}</span> <span class="text-cyan font-bold">{{ t('servicesPage.div6RoiVal') }}</span></div>
          </div>
        </div>
      </div>

      <!-- 7. Solar Power Systems -->
      <div class="glass-panel sec-box yellow-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-yellow bg-yellow-light"><Sun class="b-icon" /> {{ t('servicesPage.div7Badge') }}</div>
            <h2 class="div-title">{{ t('servicesPage.div7Title') }}</h2>
            <p class="text-muted text-sm">{{ t('servicesPage.div7Desc') }}</p>
            <div class="pt-2">
              <router-link to="/services/solar-installation" class="btn-secondary">
                <span>{{ t('servicesPage.div7Btn') }}</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-yellow font-bold text-sm">{{ t('servicesPage.div7SideTitle') }}</div>
            <p class="text-muted text-xs">{{ t('servicesPage.div7SideDesc') }}</p>
            <div class="roi-box"><span>{{ t('servicesPage.div7RoiLabel') }}</span> <span class="text-yellow font-bold">{{ t('servicesPage.div7RoiVal') }}</span></div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ShieldCheck, Lock, Factory, ShoppingBag, HardHat, Ship, Sun, Radio, Eye, Video, Zap, Fingerprint, Cpu, ArrowRight } from 'lucide-vue-next';
import { t } from '../i18n';
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background-color: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.page-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }

.flagship-box { position: relative; border-color: var(--color-border-glow); background: var(--glass-bg); padding: 2.5rem; overflow: hidden; }
.flagship-badge-top { position: absolute; top: 0; right: 0; background: linear-gradient(90deg, #0284C7, #0D9488); color: #FFFFFF; font-weight: 800; font-size: 0.75rem; padding: 0.4rem 1.25rem; border-bottom-left-radius: 14px; text-transform: uppercase; }
.div-title { font-size: 2rem; font-weight: 800; color: var(--color-text-primary); }
.b-icon { width: 16px; height: 16px; }

.sub-feature { padding: 0.6rem; background: var(--bg-navy-900); border: 1px solid var(--glass-border); border-radius: 8px; font-size: 0.8rem; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem; }
.f-icon { width: 16px; height: 16px; flex-shrink: 0; }

.side-card { background: var(--bg-navy-900); border: 1px solid var(--glass-border); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.side-title { font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase; }
.app-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.8rem; color: var(--color-text-secondary); }
.app-item { padding: 0.6rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center; }
.app-tag { color: var(--color-electric-600); font-weight: 600; }

.sec-box { padding: 2rem; }
.indigo-border { border-color: rgba(99, 102, 241, 0.3); }
.emerald-border { border-color: rgba(16, 185, 129, 0.3); }
.purple-border { border-color: rgba(168, 85, 247, 0.3); }
.amber-border { border-color: rgba(245, 158, 11, 0.3); }
.cyan-border { border-color: rgba(6, 182, 212, 0.3); }
.yellow-border { border-color: rgba(234, 179, 8, 0.3); }

.bg-indigo-light { background: rgba(99, 102, 241, 0.1); border-color: rgba(99, 102, 241, 0.3); }
.bg-emerald-light { background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3); }
.bg-purple-light { background: rgba(168, 85, 247, 0.1); border-color: rgba(168, 85, 247, 0.3); }
.bg-amber-light { background: rgba(245, 158, 11, 0.1); border-color: rgba(245, 158, 11, 0.3); }
.bg-cyan-light { background: rgba(6, 182, 212, 0.1); border-color: rgba(6, 182, 212, 0.3); }
.bg-yellow-light { background: rgba(234, 179, 8, 0.1); border-color: rgba(234, 179, 8, 0.3); }

.roi-box { padding: 0.75rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-content: space-between; font-size: 0.85rem; margin-top: 0.5rem; color: var(--color-text-primary); }
.btn-icon { width: 16px; height: 16px; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-12 > * + * { margin-top: 3rem; }
</style>
