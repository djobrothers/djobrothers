<template>
  <div class="page-wrapper">
    
    <!-- Hero Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-6">
          <div class="badge-tech">
            <Lock class="b-icon text-indigo" /> CYBERSECURITY CONSULTATION & INFRASTRUCTURE DEFENSE
          </div>

          <h1 class="flagship-hero-title">
            Enterprise Cybersecurity Consultation <br />
            <span class="gradient-text">& Cyber-Physical Protection</span>
          </h1>

          <p class="page-subtitle">
            DJO Brothers Limited delivers strategic cybersecurity consultation, OT/ICS network hardening, penetration testing, and cyber-physical security integration to safeguard critical assets against sophisticated cyber threats.
          </p>

          <div class="banner-actions">
            <router-link to="/contact?service=Cybersecurity+Consultation" class="btn-primary hero-btn">
              <Shield class="btn-icon" /> <span>Schedule Cybersecurity Consultation</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Capabilities -->
    <section class="section-padding container space-y-12">
      <SectionHeader
        badge="Consultation & Defense"
        title="Comprehensive Cyber"
        highlightTitle="Defense Services"
        description="We bridge the gap between IT cybersecurity and Operational Technology (OT) hardware security to build impenetrable digital perimeters."
        :center="true"
      />

      <div class="grid md-grid-cols-3 gap-8">
        
        <!-- 1. OT/ICS Security -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><Server class="w-6 h-6" /></div>
          <h3 class="card-title">OT & SCADA Network Hardening</h3>
          <p class="card-desc">Specialized consultation for industrial control systems (ICS/SCADA), PLC controllers, and factory automation networks to isolate operational technology from public network vectors.</p>
        </div>

        <!-- 2. Cyber-Physical Convergence -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><ShieldAlert class="w-6 h-6" /></div>
          <h3 class="card-title">Cyber-Physical Hardware Security</h3>
          <p class="card-desc">Securing physical surveillance sensors, defense radar data feeds, LiDAR controllers, and biometric access control nodes against firmware tampering and data interception.</p>
        </div>

        <!-- 3. Penetration Testing & Audits -->
        <div class="glass-panel tech-card border-indigo">
          <div class="tech-icon-box bg-indigo-900/30 text-indigo-400"><SearchCode class="w-6 h-6" /></div>
          <h3 class="card-title">Vulnerability & Penetration Audits</h3>
          <p class="card-desc">Simulated cyber-attack ethical hacking assessments identifying architectural vulnerabilities across enterprise networks, cloud endpoints, and IoT hardware.</p>
        </div>

        <!-- 4. Zero-Trust Architecture -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><KeyRound class="tech-icon text-sky" /></div>
          <h3 class="card-title">Zero-Trust Network Design</h3>
          <p class="card-desc">Implementation of strict identity verification micro-segmentation, multi-factor authentication, and encrypted tunnel protocols across distributed corporate environments.</p>
        </div>

        <!-- 5. Continuous Threat Monitoring -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><Activity class="tech-icon text-teal" /></div>
          <h3 class="card-title">24/7 Security Operations Center (SOC)</h3>
          <p class="card-desc">SIEM log aggregation, automated threat intelligence detection, anomaly response, and real-time incident response consultation for high-value targets.</p>
        </div>

        <!-- 6. Regulatory & ISO Compliance -->
        <div class="glass-panel tech-card">
          <div class="tech-icon-box"><FileCheck class="tech-icon text-emerald" /></div>
          <h3 class="card-title">Compliance & Risk Consultation</h3>
          <p class="card-desc">Guidance on achieving compliance with international cybersecurity frameworks including ISO/IEC 27001, NIST SP 800-53, IEC 62443, and NERC CIP standards.</p>
        </div>

      </div>
    </section>

    <!-- Consultation Process -->
    <section class="section-padding section-alt border-y">
      <div class="container space-y-10">
        <SectionHeader
          badge="Engagement Strategy"
          title="Cybersecurity Consultation"
          highlightTitle="Lifecycle"
          description="How DJO Brothers Limited systematically audits, secures, and maintains your digital assets."
          :center="true"
        />

        <div class="grid md-grid-cols-4 gap-6">
          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-indigo">01</span>
            <h4 class="font-bold text-lg text-slate-100">Asset Discovery & Risk Audit</h4>
            <p class="text-xs text-muted leading-relaxed">Inventorying all network endpoints, OT equipment, IP hardware, and evaluating existing security posture gaps.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-sky">02</span>
            <h4 class="font-bold text-lg text-slate-100">Threat Modeling & Design</h4>
            <p class="text-xs text-muted leading-relaxed">Architecting custom zero-trust networks, encrypted conduits, firewall policies, and isolation zones.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-teal">03</span>
            <h4 class="font-bold text-lg text-slate-100">Hardening & Implementation</h4>
            <p class="text-xs text-muted leading-relaxed">Deploying IDS/IPS platforms, updating firmware, configuring VPNs, and establishing secure telemetry conduits.</p>
          </div>

          <div class="glass-panel space-y-3">
            <span class="text-3xl font-extrabold text-emerald">04</span>
            <h4 class="font-bold text-lg text-slate-100">Continuous Monitoring</h4>
            <p class="text-xs text-muted leading-relaxed">Ongoing threat intelligence monitoring, periodic vulnerability re-scanning, and rapid breach mitigation support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding container max-w-4xl space-y-8">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" highlightTitle="Cybersecurity" :center="true" />
      <div class="space-y-4">
        <div v-for="(faq, idx) in faqs" :key="idx" class="glass-panel faq-card">
          <h4 class="faq-q"><HelpCircle class="faq-icon text-indigo" /> {{ faq.question }}</h4>
          <p class="faq-a">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section-padding container text-center max-w-3xl">
      <div class="glass-panel space-y-6">
        <h2 class="card-title font-bold text-2xl justify-center">Protect Your Enterprise Against Cyber Threats</h2>
        <p class="text-muted text-sm">Schedule a confidential consultation with DJO Brothers Limited cybersecurity experts today.</p>
        <div class="flex justify-center">
          <router-link to="/contact?service=Cybersecurity+Consultation" class="btn-primary">
            <Lock class="btn-icon" /> <span>Request Security Consultation</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Shield, Lock, Server, ShieldAlert, KeyRound, Activity, FileCheck, HelpCircle } from 'lucide-vue-next';
import SectionHeader from '../components/common/SectionHeader.vue';

const SearchCode = Lock; // fallback cleanly to Lock

const faqs = [
  {
    question: "Why does an engineering hardware company provide cybersecurity consultation?",
    answer: "Modern engineering is deeply interconnected. Hardware such as defense radar, LiDAR sensors, factory PLCs, and power grids rely on network telemetry. DJO Brothers Limited provides end-to-end protection across both physical hardware and digital networks."
  },
  {
    question: "How do you protect industrial SCADA networks from internet threats?",
    answer: "We employ unidirectional data diodes, strict air-gapped subnets, IEC 62443 industrial cybersecurity protocols, and deep packet inspection firewalls specifically configured for industrial automation protocols."
  },
  {
    question: "Do you offer compliance audits for government or critical infrastructure tenders?",
    answer: "Yes. Our senior consultants conduct risk assessments and generate full audit reports compliant with ISO 27001, NIST SP 800-53, and international infrastructure guidelines."
  }
];
</script>

<style scoped>
.border-indigo {
  border: 1px solid rgba(99, 102, 241, 0.3);
}
</style>
