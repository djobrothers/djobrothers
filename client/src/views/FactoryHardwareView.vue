<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Factory class="b-icon text-emerald" /> INDUSTRIAL ENGINEERING & FACTORY HARDWARE
          </div>

          <h1 class="flagship-hero-title">
            Installation of Factory Hardware <br />
            <span class="gradient-text">& Industrial Plant Systems</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited delivers turnkey industrial factory hardware installation, mechanical machinery assembly, PLC/SCADA control panel mounting, and electrical power integration for manufacturing plants, processing facilities, and automated factories.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Factory+Hardware" class="btn-primary hero-btn">
              <Factory class="btn-icon" /> <span>Discuss Factory Installation Project</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Breakdown -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Industrial Solutions"
        title="Comprehensive Factory"
        highlightTitle="Hardware Installation"
        description="Our multi-disciplinary mechanical, electrical, and control engineers execute complex factory setups with mathematical precision."
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Heavy Machine & Plant Assembly -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Wrench class="w-6 h-6" /></div>
          <h3 class="card-title">Machinery Assembly & Precision Positioning</h3>
          <p class="card-desc">Offloading, positioning, vibration isolation, and laser-guided alignment of heavy manufacturing machinery, stamping presses, extruders, and turbines.</p>
        </div>

        <!-- 2. Conveyor & Automated Line Assembly -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Settings class="w-6 h-6" /></div>
          <h3 class="card-title">Automated Assembly & Conveyor Systems</h3>
          <p class="card-desc">Mechanical erection of roller conveyors, robotic arm workstations, automated guided vehicle (AGV) tracks, and high-speed packaging lines.</p>
        </div>

        <!-- 3. SCADA & Control Cabinet Installation -->
        <div class="glass-panel tech-card border-emerald">
          <div class="tech-icon-box bg-emerald-900/30 text-emerald-400"><Cpu class="w-6 h-6" /></div>
          <h3 class="card-title">SCADA & PLC Cabinet Mounting</h3>
          <p class="card-desc">Installation and field wiring of programmable logic controller (PLC) cabinets, motor control centers (MCC), variable frequency drives (VFD), and HMI touch panels.</p>
        </div>

        <!-- 4. Factory Power & Substation Wiring -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Zap class="tech-icon text-amber" /></div>
          <h3 class="card-title">Industrial Power Distribution</h3>
          <p class="card-desc">Installation of heavy busbars, industrial transformers, main switchgear panels, cable tray routing, and backup generator transfer systems.</p>
        </div>

        <!-- 5. Pneumatic & Hydraulic Systems -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Gauge class="tech-icon text-cyan" /></div>
          <h3 class="card-title">Pneumatic & Hydraulic Hardware</h3>
          <p class="card-desc">High-pressure fluid piping, hydraulic power unit (HPU) installation, pneumatic actuator manifold setups, and air compressor station piping.</p>
        </div>

        <!-- 6. Factory Modernization & Retrofitting -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><RefreshCw class="tech-icon text-sky" /></div>
          <h3 class="card-title">Plant Retrofit & Hardware Upgrades</h3>
          <p class="card-desc">Replacing legacy factory equipment, upgrading sensor networks for Industrial IoT (IIoT), and re-engineering production floor layouts for optimal throughput.</p>
        </div>

      </div>
    </section>

    <!-- Industrial Execution Standards -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          badge="Engineering Excellence"
          title="Factory Installation"
          highlightTitle="Execution Process"
          description="How DJO Brothers Limited ensures safety, compliance, and minimal production downtime during installation."
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">01</span>
            <h4 class="font-bold text-lg text-slate-100">Engineering Layout & Rigging</h4>
            <p class="text-xs text-muted leading-relaxed">Structural load evaluation, rigging pathway planning, crane positioning, and utility connection mapping.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">Physical Rigging & Anchoring</h4>
            <p class="text-xs text-muted leading-relaxed">Precision offloading using heavy gantry cranes, floor foundation anchoring, seismic bracing, and chemical epoxy bolting.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-amber">03</span>
            <h4 class="font-bold text-lg text-slate-100">Utility & Electrical Wiring</h4>
            <p class="text-xs text-muted leading-relaxed">Cable tray installation, power connection, compressed air line jointing, PLC IO point checks, and earthing grounding.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">04</span>
            <h4 class="font-bold text-lg text-slate-100">Cold & Hot Commissioning</h4>
            <p class="text-xs text-muted leading-relaxed">No-load rotation tests, sensor loop validation, full load trial production runs, and safety interlock sign-off.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Factory Hardware" :center="true" />
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
        <h2 class="card-title font-bold text-2xl justify-center">Planning a New Factory Hardware Installation?</h2>
        <p class="text-muted text-sm">Partner with DJO Brothers Limited industrial engineers to ensure seamless execution, zero safety compromise, and maximum uptime.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Factory+Hardware" class="btn-primary">
            <Factory class="btn-icon" /> <span>Consult Industrial Engineers</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Factory, Wrench, Settings, Cpu, Zap, Gauge, RefreshCw, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const faqs = [
  {
    question: "What types of factories does DJO Brothers Limited serve?",
    answer: "We install hardware across manufacturing plants, food & beverage processing facilities, oil & gas refineries, pharmaceutical packaging plants, automotive assembly complexes, and heavy industrial mills."
  },
  {
    question: "Do you handle both mechanical rigging and electrical control wiring?",
    answer: "Yes. DJO Brothers Limited offers single-source accountability, providing mechanical millwrights, rigging crews, industrial electricians, and control systems engineers under one unified management structure."
  },
  {
    question: "Can installation take place during active factory operation?",
    answer: "Yes. We design phased execution schedules, working during scheduled plant turnarounds or night shifts to minimize disruption to live production lines."
  }
];
</script>

<style scoped>
.border-emerald {
  border: 1px solid rgba(16, 185, 129, 0.3);
}
</style>
