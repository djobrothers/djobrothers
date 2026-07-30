<template>
  <div class="page-wrapper">
    
    <!-- Flagship Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech badge-flagship">
            <ShieldCheck class="b-icon" /> FLAGSHIP DISCIPLINE — SECURITY HARDWARE & DEFENSE SYSTEMS
          </div>

          <h1 class="flagship-hero-title">
            Security Hardware, Defense Radar <br />
            <span class="gradient-text-flagship">& LiDAR Systems Installation</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited designs, installs, configures, and maintains high-level defense radar, solid-state 3D LiDAR, perimeter intruder detection hardware, and integrated command center infrastructure for government, industrial, and critical energy assets.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Security+Hardware" class="btn-primary hero-btn">
              <Shield class="btn-icon" /> <span>Consult Security Hardware Engineers</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Defense Radar & LiDAR Highlight Section -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Defense-Grade Hardware"
        title="Installation & Configuration of"
        highlightTitle="High-Level Radar & LiDAR Systems"
        description="DJO Brothers Limited specializes in turnkey physical deployment, fine-grained sensor calibration, microwave alignment, and multi-sensor fusion for high-security environments."
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
              <span class="text-xs uppercase tracking-widest text-sky font-bold">Specialized Capability</span>
              <h3 class="card-title text-2xl">High-Level Defense Radar Systems</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            We install and configure military and industrial-grade 3D Doppler & Pulsed Radar systems capable of detecting land, maritime, and low-altitude aerial threats up to 10 kilometers. Our field engineers handle precision physical mounting, frequency calibration, target trajectory filtering, and seamless integration with PTZ camera slewing.
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Radar Frequencies</span>
              <span class="spec-val text-sky font-bold">X-Band & Ku-Band Pulsed Doppler</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Target Tracking Capacity</span>
              <span class="spec-val text-sky font-bold">Up to 500 Simultaneous Targets</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Weather Immunity</span>
              <span class="spec-val text-teal font-bold">100% Zero-Visibility Tracking (Fog, Rain, Sandstorm)</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Anti-Drone Defense</span>
              <span class="spec-val text-amber font-bold">Micro-UAV Detection & RF Countermeasure Cueing</span>
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
              <span class="text-xs uppercase tracking-widest text-teal font-bold">Specialized Capability</span>
              <h3 class="card-title text-2xl">Solid-State 3D LiDAR Hardware</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            DJO Brothers Limited deploys state-of-the-art solid-state 3D LiDAR (Light Detection and Ranging) sensor arrays that project millions of laser pulses per second. This generates real-time high-density 3D volumetric point clouds, enabling millimeter-level perimeter breach detection with zero privacy intrusion.
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Spatial Resolution</span>
              <span class="spec-val text-teal font-bold">High-Density 3D Point Cloud Mesh</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">False Alarm Suppression</span>
              <span class="spec-val text-teal font-bold">Volumetric AI Object Classification</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Field of View</span>
              <span class="spec-val text-sky font-bold">360° Horizontal x 90° Vertical Scan</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Use Cases</span>
              <span class="spec-val text-emerald font-bold">Perimeter Fences, Airports, Nuclear & Oil Depots</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Comprehensive Security Hardware Ecosystem -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Hardware Deployment"
        title="Complete Security & Defense"
        highlightTitle="Hardware Spectrum"
        description="From physical perimeter barriers to AI camera sensors and C4ISR control centers, DJO Brothers Limited provides end-to-end physical hardware installation."
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. AI CCTV & PTZ Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Video class="tech-icon text-sky" /></div>
          <h3 class="card-title">4K Optical & Thermal PTZ Cameras</h3>
          <p class="card-desc">Ruggedized explosion-proof IP68 camera housings equipped with 50x optical zoom, long-range laser IR illuminators, uncooled radiometric thermal sensors, and automated pan-tilt motors.</p>
        </div>

        <!-- 2. Perimeter Intrusion Detection (PIDS) -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Zap class="tech-icon text-sky" /></div>
          <h3 class="card-title">Fibre-Optic & Seismic PIDS Hardware</h3>
          <p class="card-desc">Physical trenching, mounting, and termination of fibre-optic acoustic fence sensors, buried seismic vibration transducers, and active microwave barrier links across extended boundaries.</p>
        </div>

        <!-- 3. Biometric Access Control & Speed Gates -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Fingerprint class="tech-icon text-sky" /></div>
          <h3 class="card-title">Biometric & Barrier Gate Hardware</h3>
          <p class="card-desc">Turnkey installation of heavy-duty hydraulic crash turnstiles, anti-ram bollards, automated speed gates, 3D facial recognition access terminals, and biometric lock systems.</p>
        </div>

        <!-- 4. C4ISR Command Center Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Cpu class="tech-icon text-sky" /></div>
          <h3 class="card-title">Command & Control (C4ISR) Hardware</h3>
          <p class="card-desc">Design and assembly of multi-screen LED video walls, rack-mounted server hardware, failover power systems, and real-time PSIM physical security management consoles.</p>
        </div>

        <!-- 5. Emergency Communication Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Activity class="tech-icon text-sky" /></div>
          <h3 class="card-title">Industrial Intercom & Public Address</h3>
          <p class="card-desc">Weatherproof emergency call boxes, high-decibel acoustic sound cannons, mass notification speakers, and hardened voice-over-IP intercom nodes for industrial complexes.</p>
        </div>

        <!-- 6. Power & Enclosure Hardware -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><ShieldCheck class="tech-icon text-sky" /></div>
          <h3 class="card-title">Solar & Off-Grid Sensor Power Hubs</h3>
          <p class="card-desc">Self-contained solar power enclosures, lithium backup battery banks, and hardened PoE switches engineered for remote boundary radar and LiDAR installations.</p>
        </div>

      </div>
    </section>

    <!-- Engineering Methodology -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          badge="Execution Methodology"
          title="Turnkey Security Hardware"
          highlightTitle="Deployment Workflow"
          description="How DJO Brothers Limited ensures flawless hardware installation from initial radar field calibration to final commissioning."
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">01</span>
            <h4 class="font-bold text-lg text-slate-100">Site Survey & RF Mapping</h4>
            <p class="text-xs text-muted leading-relaxed">Comprehensive radio frequency spectrum analysis, line-of-sight elevation mapping, and LiDAR scan zone optimization.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">02</span>
            <h4 class="font-bold text-lg text-slate-100">Civil & Mast Mount Setup</h4>
            <p class="text-xs text-muted leading-relaxed">Structural tower construction, concrete pad pouring, electrical conduit laying, and heavy-duty vibration-damped mounting.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">03</span>
            <h4 class="font-bold text-lg text-slate-100">Hardware Integration & Tuning</h4>
            <p class="text-xs text-muted leading-relaxed">Wiring, radar Doppler frequency tuning, LiDAR 3D mesh calibration, and seamless camera tracking slewing alignment.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">FAT / SAT Commissioning</h4>
            <p class="text-xs text-muted leading-relaxed">Factory & Site Acceptance Testing, intruder simulation verification, zero-false-alarm tuning, and handover documentation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Security Hardware" :center="true" />
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
        <h2 class="card-title font-bold text-2xl justify-center">Need Defense-Grade Radar & LiDAR Security Hardware?</h2>
        <p class="text-muted text-sm">Consult directly with DJO Brothers Limited security hardware engineers to review your site parameters, technical specs, or tender requirements.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Security+Hardware" class="btn-primary">
            <ShieldCheck class="btn-icon" /> <span>Request Security Hardware Audit</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Shield, ShieldCheck, Radio, Eye, Video, Zap, Fingerprint, Cpu, Activity, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const faqs = [
  {
    question: "Does DJO Brothers Limited install and configure defense radar and LiDAR systems?",
    answer: "Yes, absolutely. DJO Brothers Limited specializes in the end-to-end physical installation, structural mounting, wiring, doppler frequency tuning, 3D point cloud mesh configuration, and camera slewing integration for both high-level defense radar and solid-state LiDAR systems."
  },
  {
    question: "What is the difference between Radar and LiDAR security hardware?",
    answer: "Radar uses radio/microwave frequency waves for long-range early warning detection (up to 10km) across all weather conditions. LiDAR uses laser pulses to construct precise 3D volumetric spatial meshes for high-accuracy perimeter breach tracking without privacy invasion."
  },
  {
    question: "Can your security hardware integrate with existing client command centers?",
    answer: "Yes. All hardware installed by DJO Brothers Limited complies with open industry standards (ONVIF, RTSP, Pelco-D, Modbus, IP) allowing native integration with existing PSIM platforms like Genetec, Milestone, and Honeywell."
  }
];
</script>

<style scoped>
.border-sky {
  border: 1px solid rgba(56, 189, 248, 0.3);
}
.border-teal {
  border: 1px solid rgba(20, 184, 166, 0.3);
}
</style>
