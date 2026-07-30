<template>
  <div class="page-wrapper">
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech text-amber bg-amber-light"><Sun class="b-icon" /> Renewable Energy Division</div>
          <h1 class="page-title">Commercial, Industrial & <span class="gradient-text">Utility Solar</span></h1>
          <p class="page-subtitle">DJO Brothers Engineering delivers turnkey solar power installations, high-capacity lithium storage banks, microgrids, and long-term maintenance contracts.</p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding container">
      <div class="grid md-grid-cols-3 gap-8">
        <div class="glass-panel card-box">
          <div class="icon-box amber-box"><Sun class="box-icon text-amber" /></div>
          <h3 class="card-title">Rooftop & Industrial Solar</h3>
          <p class="card-desc">High-efficiency Tier-1 monocrystalline PERC/TOPCon solar arrays for factories, office towers, warehouses, and commercial estates.</p>
        </div>

        <div class="glass-panel card-box">
          <div class="icon-box amber-box"><BatteryCharging class="box-icon text-amber" /></div>
          <h3 class="card-title">BESS Lithium Storage</h3>
          <p class="card-desc">Containerized Battery Energy Storage Systems (BESS) using LiFePO4 chemistry for 24/7 uninterrupted power during grid blackouts.</p>
        </div>

        <div class="glass-panel card-box">
          <div class="icon-box amber-box"><Zap class="box-icon text-amber" /></div>
          <h3 class="card-title">Hybrid Microgrids</h3>
          <p class="card-desc">Intelligent energy management system (EMS) integrating solar, battery, diesel generators, and main grid into a single automatic transfer network.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="cta-title">Transition Your Estate to Renewable Power</h2>
        <p class="text-muted text-sm">Our solar engineers conduct load profile analysis and financial payback modeling for your facility.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Solar+Installation" class="btn-primary">
            <span>Request Solar Audit</span> <ArrowRight class="btn-icon" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Sun, BatteryCharging, Zap, ArrowRight } from 'lucide-vue-next';
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background-color: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.page-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }

.bg-amber-light { background: rgba(245,158,11,0.1); border-color: rgba(245,158,11,0.3); }
.b-icon { width: 16px; height: 16px; }

.card-box { display: flex; flex-direction: column; gap: 1rem; }
.icon-box { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
.amber-box { background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.25); }
.box-icon { width: 24px; height: 24px; }
.card-title { font-size: 1.25rem; font-weight: 700; color: var(--color-text-primary); }
.card-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }

.cta-title { font-size: 1.75rem; font-weight: 800; color: var(--color-text-primary); }
.btn-icon { width: 16px; height: 16px; }
.max-w-3xl { max-width: 768px; margin-left: auto; margin-right: auto; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
</style>
