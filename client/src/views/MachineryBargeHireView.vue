<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Ship class="b-icon text-cyan" /> HEAVY EQUIPMENT & MARINE FLEET RENTAL
          </div>

          <h1 class="flagship-hero-title">
            Hiring of Heavy Duty Machineries <br />
            <span class="gradient-text">& Marine Barges Fleet</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited operates a high-capacity rental fleet of heavy-duty earthmoving machinery, heavy lift cranes, and marine barges (flat-deck, spud, and crane barges) for onshore and offshore civil, security, and industrial engineering projects.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Machinery+and+Barge+Hire" class="btn-primary hero-btn">
              <Ship class="btn-icon" /> <span>Request Machinery & Barge Hire Quote</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Breakdown -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Equipment Fleet"
        title="Heavy Machinery & Marine"
        highlightTitle="Barge Hire Portfolio"
        description="Our heavy machinery and marine fleet is maintained to rigorous international safety standards, available for short-term project lease or long-term charter."
        :center="true"
      />

      <div class="grid md-grid-cols-2 gap-8">
        
        <!-- Marine Barges Fleet -->
        <div class="glass-panel space-y-6 p-8 border-cyan">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-cyan-900/30 text-cyan-400">
              <Ship class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-cyan font-bold">Marine Logistics</span>
              <h3 class="card-title text-2xl">Marine Barges & Offshore Fleet Hire</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            We provide specialized marine barges designed for coastal construction, river transport, offshore heavy equipment mobilization, and marine piling operations. All barges are fully certified, seaworthy, and equipped with heavy deck load capacities.
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Flat-Deck Cargo Barges</span>
              <span class="spec-val text-cyan font-bold">1,000 Ton to 5,000 Ton DWT</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Spud Barges & Piling Barges</span>
              <span class="spec-val text-sky font-bold">Heavy Anchoring & Marine Piling Rigs</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Crane Barges</span>
              <span class="spec-val text-teal font-bold">Integrated 150-Ton Offshore Heavy Lift Crane</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Charter Options</span>
              <span class="spec-val text-emerald font-bold">Bareboat & Fully Crewed Wet Charter</span>
            </div>
          </div>
        </div>

        <!-- Heavy Duty Machineries Fleet -->
        <div class="glass-panel space-y-6 p-8 border-amber">
          <div class="flex items-center gap-4">
            <div class="tech-icon-box bg-amber-900/30 text-amber-400">
              <Truck class="w-8 h-8" />
            </div>
            <div>
              <span class="text-xs uppercase tracking-widest text-amber font-bold">Onshore Heavy Machinery</span>
              <h3 class="card-title text-2xl">Heavy Duty Earthmoving & Lift Equipment</h3>
            </div>
          </div>

          <p class="text-muted text-sm leading-relaxed">
            DJO Brothers Limited supplies top-tier heavy construction equipment for land clearing, deep excavation, road grading, steel erection, and industrial foundation piling, complete with certified operators and on-site mechanics.
          </p>

          <div class="spec-list space-y-3 pt-2">
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Heavy Excavators (20T - 50T)</span>
              <span class="spec-val text-amber font-bold">CAT, Komatsu, Volvo High-Reach Rigs</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Mobile & Crawler Cranes</span>
              <span class="spec-val text-sky font-bold">50 Ton to 300 Ton Lift Capacity</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Bulldozers & Motor Graders</span>
              <span class="spec-val text-teal font-bold">GPS-Guided Earthmoving & Road Grading</span>
            </div>
            <div class="spec-item">
              <span class="font-semibold text-slate-200">Piling Rigs & Dump Trucks</span>
              <span class="spec-val text-emerald font-bold">Hydraulic Rotary Rigs & 30T Articulated Haulers</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Rental Services Features -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Why Rent With Us"
        title="Fleet Standards & Support"
        highlightTitle="Key Benefits"
        description="We ensure your project encounters zero downtime through immaculate fleet maintenance and certified operator crews."
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Certified Operators -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><ShieldCheck class="tech-icon text-sky" /></div>
          <h3 class="card-title">Certified Heavy Equipment Operators</h3>
          <p class="card-desc">Every piece of machinery can be supplied with certified, highly trained operators possessing extensive onshore and marine civil engineering experience.</p>
        </div>

        <!-- 2. Rapid Site Mobilization -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Truck class="tech-icon text-cyan" /></div>
          <h3 class="card-title">Rapid Site Mobilization Logistics</h3>
          <p class="card-desc">Our dedicated lowbed heavy haulers and tugboat fleet transport machinery and barges to remote onshore sites or offshore waterways rapidly.</p>
        </div>

        <!-- 3. Rigorous HSE & Maintenance -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Wrench class="tech-icon text-emerald" /></div>
          <h3 class="card-title">24/7 Mobile Field Mechanics</h3>
          <p class="card-desc">On-site preventative maintenance support and mobile field mechanics dedicated to ensuring 100% equipment availability and zero work stoppage.</p>
        </div>

      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Machinery & Barge Hire" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-cyan" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">Need Heavy Machinery or Barges for Your Next Project?</h2>
        <p class="text-muted text-sm">Contact DJO Brothers Limited equipment fleet management team for availability, rates, and mobilization timelines.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Machinery+and+Barge+Hire" class="btn-primary">
            <Ship class="btn-icon" /> <span>Request Hire Quotation</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Ship, Truck, ShieldCheck, Wrench, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const faqs = [
  {
    question: "What types of barges are available for hire at DJO Brothers Limited?",
    answer: "We offer flat-deck cargo barges, spud barges (for anchoring & piling), crane barges equipped with heavy lift cranes, and hopper barges for dredging operations."
  },
  {
    question: "Do you offer wet charter (with crew and fuel) or dry charter (equipment only)?",
    answer: "We provide both wet and dry charter options tailored to client project requirements, including certified barge masters, marine engineers, and heavy machine operators."
  },
  {
    question: "How fast can heavy machinery and barges be mobilized to site?",
    answer: "Mobilization timelines depend on location, but with our dedicated lowbed transporters and marine tugboats, onshore equipment can typically be mobilized within 24-48 hours."
  }
];
</script>

<style scoped>
.border-cyan {
  border: 1px solid rgba(6, 182, 212, 0.3);
}
.border-amber {
  border: 1px solid rgba(245, 158, 11, 0.3);
}
</style>
