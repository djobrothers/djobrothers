<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <HardHat class="b-icon text-amber" /> CIVIL ENGINEERING & STRUCTURAL INFRASTRUCTURE
          </div>

          <h1 class="flagship-hero-title">
            Civil Engineering & Turnkey <br />
            <span class="gradient-text">& Solutions to Complex Engineering Problems</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited delivers end-to-end civil engineering solutions, structural design, highway road construction, site earthworks, drainage systems, and tailored engineering problem-solving for public and private sector projects.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Civil+Engineering" class="btn-primary hero-btn">
              <HardHat class="btn-icon" /> <span>Consult Civil Engineering Team</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Solving Spotlight -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Engineering Problem Solvers"
        title="Customized Engineering"
        highlightTitle="Solutions Matrix"
        description="At DJO Brothers Limited, every project begins with a fundamental question: how can engineering overcome the challenge at hand?"
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. Infrastructure Construction -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Building2 class="w-6 h-6" /></div>
          <h3 class="card-title">Commercial & Industrial Building Construction</h3>
          <p class="card-desc">Design and construction of reinforced concrete structures, steel frame industrial warehouses, security towers, and commercial office complexes.</p>
        </div>

        <!-- 2. Road & Highway Engineering -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Compass class="w-6 h-6" /></div>
          <h3 class="card-title">Highway & Heavy Road Infrastructure</h3>
          <p class="card-desc">Asphalt paving, subgrade stabilization, highway bypass networks, industrial access roads, culvert installations, and bridge abutments.</p>
        </div>

        <!-- 3. Complex Engineering Problem Solving -->
        <div class="glass-panel tech-card border-amber">
          <div class="tech-icon-box bg-amber-900/30 text-amber-400"><Cpu class="w-6 h-6" /></div>
          <h3 class="card-title">Engineering Problem Solving & Remediation</h3>
          <p class="card-desc">Diagnosing structural failures, soil erosion remediation, slope stabilization, heavy load foundation re-engineering, and retrofitting compromised structures.</p>
        </div>

        <!-- 4. Site Preparation & Earthworks -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Shovel class="tech-icon text-sky" /></div>
          <h3 class="card-title">Site Excavation & Mass Earthworks</h3>
          <p class="card-desc">Land clearing, bulk excavation, cut-and-fill grading, soil compaction testing, and site leveling for large industrial facilities.</p>
        </div>

        <!-- 5. Stormwater & Drainage Engineering -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Droplets class="tech-icon text-teal" /></div>
          <h3 class="card-title">Stormwater Drainage & Flood Mitigation</h3>
          <p class="card-desc">Hydrological modeling, concrete retention basins, subterranean drainage channels, erosion control barriers, and flood protection embankments.</p>
        </div>

        <!-- 6. EPC Project Management -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Briefcase class="tech-icon text-emerald" /></div>
          <h3 class="card-title">Turnkey EPC Project Delivery</h3>
          <p class="card-desc">Engineering, Procurement, and Construction (EPC) management guaranteeing strict timeline compliance, quality control, and budget adherence.</p>
        </div>

      </div>
    </section>

    <!-- Engineering Methodology -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          badge="Disciplined Execution"
          title="Civil Engineering & Problem Solving"
          highlightTitle="Workflow"
          description="How DJO Brothers Limited resolves complex structural and civil challenges."
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-amber">01</span>
            <h4 class="font-bold text-lg text-slate-100">Geotechnical & Site Analysis</h4>
            <p class="text-xs text-muted leading-relaxed">Soil bore sample testing, topographical elevation surveying, structural load calculation, and environmental impact assessment.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">Structural Design & CAD Modeling</h4>
            <p class="text-xs text-muted leading-relaxed">Developing BIM 3D CAD models, structural calculations, concrete mix formulations, and municipal permit documentation.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">Heavy Civil Execution</h4>
            <p class="text-xs text-muted leading-relaxed">Mobilization of heavy machinery fleets, foundation piling, rebar placement, concrete pouring, and quality assurance inspection.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">Handover & Structural Certification</h4>
            <p class="text-xs text-muted leading-relaxed">As-built drawing validation, load testing verification, safety sign-off, and structural warranty handover.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Civil Engineering" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-amber" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">Have a Complex Civil Engineering Challenge?</h2>
        <p class="text-muted text-sm">Consult with DJO Brothers Limited senior civil engineers to evaluate your site, design custom solutions, and execute turnkey construction.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Civil+Engineering" class="btn-primary">
            <HardHat class="btn-icon" /> <span>Consult Civil Engineers</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { HardHat, Building2, Compass, Cpu, Droplets, Briefcase, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const Shovel = HardHat; // fallback cleanly to HardHat

const faqs = [
  {
    question: "What does 'providing solutions to engineering problems' mean for DJO Brothers Limited?",
    answer: "It means we don't just build standard structures; we diagnose and solve complex, non-standard engineering challenges — such as unstable soil foundations, extreme weather drainage issues, structural retrofits, and high-security facility integration."
  },
  {
    question: "Do you handle both building construction and road infrastructure?",
    answer: "Yes. DJO Brothers Limited undertakes heavy civil works including highways, access roads, drainage culverts, industrial factories, high-security command buildings, and structural foundations."
  },
  {
    question: "Are your civil engineering designs compliant with international building codes?",
    answer: "Yes. All structural calculations and designs produced by DJO Brothers Limited conform strictly to Eurocodes, BS Standards, and local structural regulations."
  }
];
</script>

<style scoped>
.border-amber {
  border: 1px solid rgba(245, 158, 11, 0.3);
}
</style>
