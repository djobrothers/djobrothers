<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <ShoppingBag class="b-icon text-purple" /> GLOBAL TECHNICAL PROCUREMENT & HARDWARE PROVISION
          </div>

          <h1 class="flagship-hero-title">
            Hardware Provision (Sales) <br />
            <span class="gradient-text">& Global Technical Procurement</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited provides direct hardware sales, OEM equipment sourcing, technical procurement, and global supply chain logistics for specialized defense systems, industrial plant hardware, and civil engineering machinery.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Hardware+Procurement" class="btn-primary hero-btn">
              <ShoppingBag class="btn-icon" /> <span>Submit Hardware RFQ</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Procurement Capabilities"
        title="Direct Sales & Sourcing for"
        highlightTitle="Mission-Critical Hardware"
        description="We eliminate procurement friction through verified global OEM partnerships, rigorous quality inspection, and door-to-door delivery."
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Security & Defense Hardware Sales -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><ShieldCheck class="w-6 h-6" /></div>
          <h3 class="card-title">Security & Defense Hardware Provision</h3>
          <p class="card-desc">Direct sales of defense 3D Doppler radars, solid-state LiDAR sensors, thermal PTZ cameras, biometric access control turnstiles, and command center LED wall displays.</p>
        </div>

        <!-- 2. Factory & Industrial Hardware Supply -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><Factory class="w-6 h-6" /></div>
          <h3 class="card-title">Factory Equipment & Component Sales</h3>
          <p class="card-desc">Sourcing and provision of industrial PLC controllers, variable frequency drives (VFD), hydraulic power units, industrial motors, high-pressure valves, and sensor arrays.</p>
        </div>

        <!-- 3. Heavy Civil & Machinery Sourcing -->
        <div class="glass-panel tech-card border-purple">
          <div class="tech-icon-box bg-purple-900/30 text-purple-400"><Truck class="w-6 h-6" /></div>
          <h3 class="card-title">Construction Equipment & Vessel Sourcing</h3>
          <p class="card-desc">Procurement of heavy earthmoving machinery, mobile cranes, diesel generators, marine barges, and specialized civil engineering tools from top global OEMs.</p>
        </div>

        <!-- 4. Global Supply Chain & Logistics -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Globe class="tech-icon text-sky" /></div>
          <h3 class="card-title">Turnkey International Logistics</h3>
          <p class="card-desc">End-to-end freight forwarding, freight insurance, customs clearance handling, and tax compliance for overseas equipment delivery.</p>
        </div>

        <!-- 5. Quality Assurance & Factory Inspection -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><CheckCircle2 class="tech-icon text-emerald" /></div>
          <h3 class="card-title">Pre-Shipment Quality Testing (FAT)</h3>
          <p class="card-desc">On-site factory acceptance testing, compliance verification against ISO standards, physical inspection, and certified calibration before dispatch.</p>
        </div>

        <!-- 6. Critical Spare Parts Management -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Layers class="tech-icon text-amber" /></div>
          <h3 class="card-title">Consignment & Spare Parts Inventory</h3>
          <p class="card-desc">Stocking critical replacement modules, specialized radar ICs, optical lenses, hydraulic seals, and emergency replacement hardware to ensure zero client downtime.</p>
        </div>

      </div>
    </section>

    <!-- Procurement Workflow -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          badge="Sourcing Framework"
          title="End-to-End Procurement"
          highlightTitle="Lifecycle"
          description="How DJO Brothers Limited delivers genuine, certified hardware from manufacturer to site destination."
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-purple">01</span>
            <h4 class="font-bold text-lg text-slate-100">Specification & RFQ Review</h4>
            <p class="text-xs text-muted leading-relaxed">Analyzing client engineering specifications, verifying part compatibility, and issuing global tender requests.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">OEM Negotiation & QA</h4>
            <p class="text-xs text-muted leading-relaxed">Contract negotiation with Tier-1 OEMs, price optimization, warranty securing, and pre-production vetting.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">Inspection & Shipping</h4>
            <p class="text-xs text-muted leading-relaxed">Pre-shipment verification, export licensing, marine/air cargo booking, and real-time shipment GPS tracking.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">Customs & On-Site Delivery</h4>
            <p class="text-xs text-muted leading-relaxed">Customs duty clearance, offloading at project site, final inspection sign-off, and warranty documentation handover.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Hardware Procurement" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-purple" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">Looking to Procure Industrial or Security Hardware?</h2>
        <p class="text-muted text-sm">Send your bill of quantities (BOQ) or equipment requirements to DJO Brothers Limited procurement team for competitive pricing and guaranteed delivery schedules.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Hardware+Procurement" class="btn-primary">
            <ShoppingBag class="btn-icon" /> <span>Request Hardware Quote</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ShoppingBag, ShieldCheck, Factory, Truck, Globe, CheckCircle2, Layers, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const faqs = [
  {
    question: "Does DJO Brothers Limited sell hardware directly to clients?",
    answer: "Yes. DJO Brothers Limited provides direct provision (sales) of certified security hardware, factory machinery, electrical components, and heavy equipment, backed by OEM warranties and full technical support."
  },
  {
    question: "Can you procure hard-to-find legacy or specialized engineering hardware?",
    answer: "Yes. Our global procurement network spans Europe, North America, Asia, and the Middle East, enabling us to source specialized components, OEM spare parts, and custom-manufactured hardware."
  },
  {
    question: "How do you ensure hardware authenticity and quality?",
    answer: "We only source directly from authorized Tier-1 OEMs and certified distributors. Every shipment undergoes Factory Acceptance Testing (FAT) and visual quality inspection before dispatch."
  }
];
</script>

<style scoped>
.border-purple {
  border: 1px solid rgba(168, 85, 247, 0.3);
}
</style>
