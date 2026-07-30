<template>
  <div class="page-wrapper">
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">Engineering Portfolio</div>
          <h1 class="page-title">
            Integrated Engineering & <span class="gradient-text">Technology Divisions</span>
          </h1>
          <p class="page-subtitle">
            From defense-grade surveillance systems to utility-scale solar farms and heavy civil construction, DJO Brothers delivers turnkey infrastructure.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding container space-y-12">
      
      <!-- Flagship Division -->
      <div class="glass-panel flagship-box">
        <div class="flagship-badge-top">★ Flagship Service Division</div>

        <div class="grid lg-grid-cols-12 gap-10 items-center">
          <div class="col-span-7 space-y-6">
            <div class="badge-tech badge-flagship">
              <ShieldCheck class="b-icon" /> Primary Core Division
            </div>

            <h2 class="div-title">Security & Surveillance Systems</h2>

            <p class="text-muted leading-relaxed">
              Our flagship division designs, installs, and maintains enterprise surveillance architecture for critical national infrastructure, oil & gas facilities, government complexes, smart cities, and industrial plants.
            </p>

            <div class="grid md-grid-cols-3 gap-3">
              <div class="sub-feature"><Cpu class="f-icon text-sky" /> AI Video Analytics</div>
              <div class="sub-feature"><Eye class="f-icon text-sky" /> Thermal & PTZ Cameras</div>
              <div class="sub-feature"><Radio class="f-icon text-sky" /> LiDAR & Radar</div>
              <div class="sub-feature"><Lock class="f-icon text-sky" /> Command Centers</div>
              <div class="sub-feature"><Shield class="f-icon text-sky" /> Pipeline Security</div>
              <div class="sub-feature"><Activity class="f-icon text-sky" /> Autonomous Drones</div>
            </div>

            <div>
              <router-link to="/services/security-surveillance" class="btn-primary">
                <span>Explore Full Flagship Service Page</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>

          <div class="col-span-5 side-card">
            <h4 class="side-title"><ShieldCheck class="f-icon text-sky" /> Key Applications</h4>
            <ul class="app-list">
              <li class="app-item"><span>Critical Infrastructure Defense</span> <span class="app-tag">Defense-Grade</span></li>
              <li class="app-item"><span>Oil & Gas Pipelines</span> <span class="app-tag">ATEX Thermal</span></li>
              <li class="app-item"><span>Government Installations</span> <span class="app-tag">High-Security</span></li>
              <li class="app-item"><span>Smart Cities & Traffic</span> <span class="app-tag">Centralized</span></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Solar Division -->
      <div class="glass-panel sec-box amber-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-amber bg-amber-light"><Sun class="b-icon" /> Renewable Energy Division</div>
            <h2 class="div-title">Solar Power Installation</h2>
            <p class="text-muted text-sm">Commercial, industrial, and utility-scale solar energy systems providing complete energy independence with custom lithium storage banks.</p>
            <div class="pt-2">
              <router-link to="/services/solar-installation" class="btn-secondary">
                <span>View Solar Solutions</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-amber font-bold text-sm">Solar ROI Payback</div>
            <p class="text-muted text-xs">Drastically reduce operational energy costs with clean, scalable solar arrays.</p>
            <div class="roi-box"><span>Avg Payback Period</span> <span class="text-amber font-bold">3.5 - 4.8 Years</span></div>
          </div>
        </div>
      </div>

      <!-- Construction Division -->
      <div class="glass-panel sec-box teal-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-teal bg-teal-light"><Building2 class="b-icon" /> Civil Engineering Division</div>
            <h2 class="div-title">Road & Building Construction</h2>
            <p class="text-muted text-sm">Heavy civil engineering and general contracting for highway road paving, commercial complexes, residential developments, and project management.</p>
            <div class="pt-2">
              <router-link to="/services/construction" class="btn-secondary">
                <span>View Construction Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-teal font-bold text-sm">Civil Standards</div>
            <p class="text-muted text-xs">Executed under strict ASTM structural engineering codes with heavy machinery fleets.</p>
            <div class="roi-box"><span>HSE Incident Rate</span> <span class="text-teal font-bold">Zero LTI Benchmark</span></div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ShieldCheck, Sun, Building2, Cpu, Eye, Radio, Lock, Activity, Shield, ArrowRight } from 'lucide-vue-next';
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background-color: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.page-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }

.flagship-box { position: relative; border-color: var(--color-border-glow); background: var(--glass-bg); padding: 2.5rem; overflow: hidden; }
.flagship-badge-top { position: absolute; top: 0; right: 0; background: linear-gradient(90deg, #0284C7, #0D9488); color: #FFFFFF; font-weight: 800; font-size: 0.75rem; padding: 0.4rem 1.25rem; border-bottom-left-radius: 14px; text-transform: uppercase; }
.div-title { font-size: 2.25rem; font-weight: 800; color: var(--color-text-primary); }
.b-icon { width: 16px; height: 16px; }

.sub-feature { padding: 0.6rem; background: var(--bg-navy-900); border: 1px solid var(--glass-border); border-radius: 8px; font-size: 0.8rem; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem; }
.f-icon { width: 16px; height: 16px; flex-shrink: 0; }

.side-card { background: var(--bg-navy-900); border: 1px solid var(--glass-border); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.side-title { font-size: 0.9rem; font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase; }
.app-list { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.8rem; color: var(--color-text-secondary); }
.app-item { padding: 0.6rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-between: space-between; align-items: center; }
.app-tag { color: var(--color-electric-600); font-weight: 600; }

.sec-box { padding: 2rem; }
.amber-border { border-color: rgba(245,158,11,0.3); }
.teal-border { border-color: rgba(20,184,166,0.3); }
.bg-amber-light { background: rgba(245,158,11,0.1); border-color: rgba(245,158,11,0.3); }
.bg-teal-light { background: rgba(20,184,166,0.1); border-color: rgba(20,184,166,0.3); }
.roi-box { padding: 0.75rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-content: space-between; font-size: 0.85rem; margin-top: 0.5rem; color: var(--color-text-primary); }
.btn-icon { width: 16px; height: 16px; }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.space-y-12 > * + * { margin-top: 3rem; }
</style>
