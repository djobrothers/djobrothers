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
              <span>MULTIDISCIPLINARY ENGINEERING & SOLUTIONS FIRM</span>
            </div>

            <h1 class="hero-title">
              Innovative Solution to <br />
              <span class="gradient-text-flagship">Complex Engineering Problems</span>
            </h1>

            <p class="hero-subtitle">
              DJO Brothers Limited provides end-to-end engineering solutions — combining defense-grade security hardware, cybersecurity consultation, industrial factory installation, technical procurement, civil infrastructure, heavy machinery & barge hiring, and solar energy under one master engineering framework.
            </p>

            <!-- Hero Actions -->
            <div class="hero-actions">
              <router-link to="/contact" class="btn-primary hero-btn">
                <span>Request Solution Consultation</span>
                <ArrowRight class="btn-icon" />
              </router-link>

              <router-link to="/services" class="btn-secondary hero-btn">
                <span>Explore All 7 Divisions</span>
                <ChevronRight class="btn-icon text-muted" />
              </router-link>
            </div>

            <!-- Stats -->
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-num text-sky">7 Core</div>
                <div class="stat-label">Engineering Divisions</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-teal">500+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-amber">100%</div>
                <div class="stat-label">Problem Solved Rate</div>
              </div>
              <div class="stat-item">
                <div class="stat-num text-emerald">ISO 9001</div>
                <div class="stat-label">Certified Precision</div>
              </div>
            </div>
          </div>

          <!-- Right Column Card -->
          <div class="hero-visual">
            <div class="glass-panel visual-card">
              <div class="visual-header">
                <div class="live-status">
                  <div class="live-dot"></div>
                  <span class="status-label">Engineering Operations Hub</span>
                </div>
                <span class="status-badge">Matrix Active</span>
              </div>

              <!-- Interactive Node Info -->
              <div class="node-box">
                <div class="node-target">
                  <span>Scope: Integrated Engineering & Security</span>
                  <span class="target-status">Operational</span>
                </div>

                <div class="node-grid">
                  <div class="node-card">
                    <div class="node-title">
                      <span>Defense Radar & LiDAR</span>
                      <Radio class="node-icon text-sky" />
                    </div>
                    <div class="node-val">High-Level Installation</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>Civil & Marine Fleet</span>
                      <Ship class="node-icon text-teal" />
                    </div>
                    <div class="node-val">Roads & Barge Charter</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>Factory Hardware</span>
                      <Factory class="node-icon text-emerald" />
                    </div>
                    <div class="node-val">Industrial SCADA & Assembly</div>
                  </div>

                  <div class="node-card">
                    <div class="node-title">
                      <span>Cybersecurity & Solar</span>
                      <Lock class="node-icon text-indigo" />
                    </div>
                    <div class="node-val">OT Hardening & Microgrids</div>
                  </div>
                </div>

                <div class="node-ai">
                  <div class="ai-label">
                    <Cpu class="ai-icon" />
                    <span>Multidisciplinary Engineering Problem Solving</span>
                  </div>
                  <span class="ai-time">Turnkey Delivery</span>
                </div>
              </div>

              <div class="visual-footer">
                <router-link to="/services" class="btn-primary w-full justify-center">
                  <Wrench class="btn-icon" />
                  <span>Explore All Engineering Divisions</span>
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
            <div class="badge-tech">Company Overview</div>
            <h2 class="section-title">
              Solutions to Engineering Problems & <span class="gradient-text">Defense Security Systems</span>
            </h2>
            <p class="section-desc">
              DJO Brothers Limited is a premier engineering solutions firm dedicated to solving complex technical and structural challenges. We specialize in defense radar & LiDAR security hardware, cybersecurity consultation, industrial factory installation, technical procurement, civil engineering, and heavy machinery & barge hiring.
            </p>
            <p class="section-desc-secondary">
              Our flagship Security Hardware division installs and configures high-level defense radar and solid-state 3D LiDAR systems, empowering governments, industrial complexes, oil & gas operators, and critical infrastructure with uncompromised situational defense.
            </p>

            <div class="overview-cards-row">
              <div class="overview-mini-card">
                <ShieldCheck class="mini-icon text-sky" />
                <h4 class="mini-title">Defense Radar & LiDAR</h4>
                <p class="mini-desc">High-level defense radar, solid-state 3D LiDAR & PTZ</p>
              </div>

              <div class="overview-mini-card">
                <Award class="mini-icon text-teal" />
                <h4 class="mini-title">ISO Engineering</h4>
                <p class="mini-desc">Certified compliance, strict HSE safety protocols</p>
              </div>
            </div>
          </div>

          <div class="overview-matrix">
            <div class="glass-panel matrix-card">
              <h3 class="matrix-title">
                <Activity class="matrix-header-icon" />
                Core Capabilities Matrix
              </h3>

              <div class="space-y-5">
                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Shield class="p-icon text-sky" /> Security & Surveillance (Flagship)</span>
                    <span class="text-sky font-bold">Primary Core</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill flagship-fill"></div>
                  </div>
                </div>

                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Sun class="p-icon text-amber" /> Commercial & Industrial Solar</span>
                    <span class="text-amber font-bold">Secondary Core</span>
                  </div>
                  <div class="progress-bar-bg">
                    <div class="progress-bar-fill solar-fill"></div>
                  </div>
                </div>

                <div class="progress-item">
                  <div class="progress-header">
                    <span class="progress-name"><Building2 class="p-icon text-teal" /> Road & Civil Construction</span>
                    <span class="text-teal font-bold">Secondary Core</span>
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
          badge="Engineering Divisions"
          title="Turnkey Solutions for"
          highlightTitle="Critical Infrastructure"
          description="Explore our specialized divisions, spearheaded by our industry-leading Security & Surveillance engineering suite."
          :center="true"
        />

        <div class="divisions-grid">
          
          <!-- Flagship Card -->
          <div class="glass-panel flagship-card">
            <div class="flagship-top-tag">★ Flagship Service Division</div>

            <div class="flagship-card-grid">
              <div class="flagship-left space-y-4">
                <div class="badge-tech badge-flagship">
                  <ShieldCheck class="badge-icon" />
                  <span>Primary Engineering Specialization</span>
                </div>

                <h3 class="flagship-card-title">Security Hardware, Defense Radar & LiDAR</h3>

                <p class="flagship-card-desc">
                  DJO Brothers Limited installs and configures high-level 3D Doppler defense radar, solid-state LiDAR scanners, 4K thermal PTZ camera arrays, perimeter intrusion detection systems (PIDS), and C4ISR command centers.
                </p>

                <div class="flagship-features-grid">
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> Defense 3D Doppler Radar</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> Solid-State 3D LiDAR</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> 4K Optical & Thermal PTZ</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> Command (C4ISR) Centers</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> Biometrics & Speed Gates</div>
                  <div class="feature-tag"><CheckCircle class="tag-icon" /> Perimeter Intrusion (PIDS)</div>
                </div>

                <div class="flagship-actions">
                  <router-link to="/services/security-hardware" class="btn-primary">
                    <span>Explore Security Hardware Page</span>
                    <ArrowRight class="btn-icon" />
                  </router-link>
                  <router-link to="/contact?service=Security+Hardware" class="btn-secondary">
                    <span>Request Security Audit</span>
                  </router-link>
                </div>
              </div>

              <!-- Graphic Preview -->
              <div class="flagship-preview">
                <div class="preview-header">
                  <span class="preview-title"><Lock class="preview-icon" /> Defense Radar & LiDAR Status</span>
                  <span class="preview-status">Operational</span>
                </div>
                <div class="preview-list">
                  <div class="preview-item">
                    <div>
                      <div class="item-name">3D Doppler Defense Radar</div>
                      <div class="item-sub">10km Early Warning Array</div>
                    </div>
                    <span class="item-badge">Calibrated</span>
                  </div>
                  <div class="preview-item">
                    <div>
                      <div class="item-name">Solid-State 3D LiDAR Mesh</div>
                      <div class="item-sub">High-density Point Cloud Scanning</div>
                    </div>
                    <span class="item-badge">Calibrated</span>
                  </div>
                  <div class="preview-item">
                    <div>
                      <div class="item-name">C4ISR Video Wall Console</div>
                      <div class="item-sub">PSIM Real-Time Telemetry Stream</div>
                    </div>
                    <span class="item-badge text-teal">Connected</span>
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
              <h3 class="sec-title">Cybersecurity</h3>
              <p class="sec-desc">OT/ICS SCADA security audits, zero-trust network design, and cyber-physical hardware hardening.</p>
              <router-link to="/services/cybersecurity-consultation" class="btn-secondary w-full justify-between">
                <span>View Cybersecurity</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 2. Factory Hardware -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box teal-box"><Factory class="sec-icon text-emerald" /></div>
              <h3 class="sec-title">Factory Hardware</h3>
              <p class="sec-desc">Industrial equipment assembly, precision laser positioning, PLC cabinets, and conveyor lines.</p>
              <router-link to="/services/factory-hardware-installation" class="btn-secondary w-full justify-between">
                <span>View Factory Hardware</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 3. Hardware Procurement -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><ShoppingBag class="sec-icon text-purple" /></div>
              <h3 class="sec-title">Hardware Sales & Procurement</h3>
              <p class="sec-desc">Provision (sales) of specialized security, factory, and engineering hardware with global logistics.</p>
              <router-link to="/services/hardware-procurement-sales" class="btn-secondary w-full justify-between">
                <span>View Procurement</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 4. Civil Engineering -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><HardHat class="sec-icon text-amber" /></div>
              <h3 class="sec-title">Civil Engineering</h3>
              <p class="sec-desc">Infrastructure construction, highway paving, structural design, and custom engineering problem-solving.</p>
              <router-link to="/services/civil-engineering" class="btn-secondary w-full justify-between">
                <span>View Civil Engineering</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 5. Heavy Machinery & Barge Hire -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box sky-box"><Ship class="sec-icon text-cyan" /></div>
              <h3 class="sec-title">Machinery & Barge Hire</h3>
              <p class="sec-desc">Heavy duty construction machinery rental and marine flat-deck & spud barge chartering.</p>
              <router-link to="/services/heavy-machinery-barge-hire" class="btn-secondary w-full justify-between">
                <span>View Fleet Hire</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>

            <!-- 6. Solar Installation -->
            <div class="glass-panel glass-panel-interactive secondary-card">
              <div class="sec-icon-box amber-box"><Sun class="sec-icon text-yellow" /></div>
              <h3 class="sec-title">Solar Power Systems</h3>
              <p class="sec-desc">Turnkey commercial and industrial solar arrays with containerized lithium battery (BESS) storage.</p>
              <router-link to="/services/solar-installation" class="btn-secondary w-full justify-between">
                <span>View Solar Solutions</span>
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
            <div class="badge-tech badge-flagship">Direct Technical Line</div>
            <h2 class="section-title">
              Ready to Secure Your <span class="gradient-text">Assets & Infrastructure?</span>
            </h2>
            <p class="section-desc">
              Connect directly with our solutions team for a comprehensive technical proposal, site audit, or project estimate.
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

.badge-icon {
  width: 16px;
  height: 16px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.12;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.25rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  max-width: 580px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 0.25rem;
}

.hero-btn {
  padding: 0.9rem 1.85rem;
  font-size: 1rem;
  border-radius: 12px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--glass-border);
  max-width: 540px;
}

.stat-num {
  font-size: 1.6rem;
  font-weight: 800;
  font-family: var(--font-heading);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-top: 2px;
}

/* Visual Card */
.visual-card {
  padding: 2.25rem;
  border-color: var(--glass-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.visual-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 1rem;
}

.live-status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #34D399;
  box-shadow: 0 0 10px #34D399;
}

.status-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
}

.status-badge {
  font-size: 0.7rem;
  font-family: monospace;
  color: #0284C7;
  background: rgba(2, 132, 199, 0.12);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--glass-border);
}

.node-box {
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.node-target {
  display: flex;
  justify-content: space-between;
  font-size: 0.775rem;
  color: var(--color-text-secondary);
  font-weight: 600;
}

.target-status {
  color: #10B981;
  font-weight: 700;
}

.node-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

.node-card {
  background: var(--bg-navy-950);
  padding: 0.9rem;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
}

.node-title {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 600;
}

.node-icon {
  width: 15px;
  height: 15px;
}

.node-val {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-top: 4px;
}

.node-ai {
  padding: 0.85rem 1rem;
  background: rgba(2, 132, 199, 0.08);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ai-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.775rem;
  font-weight: 600;
  color: #0284C7;
}

.ai-icon {
  width: 16px;
  height: 16px;
}

.ai-time {
  font-size: 0.65rem;
  font-family: monospace;
  color: #0284C7;
  font-weight: 700;
}

/* Company Overview Section */
.overview-section {
  background-color: var(--bg-navy-900);
  border-top: 1px solid var(--glass-border);
  border-bottom: 1px solid var(--glass-border);
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
    grid-template-columns: repeat(2, 1fr);
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

.section-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.section-desc-secondary {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.overview-cards-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
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
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.mini-desc {
  font-size: 0.775rem;
  color: var(--color-text-secondary);
}

.matrix-card {
  padding: 2.25rem;
  border-color: var(--glass-border);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-radius: 20px;
}

.matrix-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.matrix-header-icon {
  width: 20px;
  height: 20px;
  color: #0284C7;
}

.progress-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.progress-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.p-icon {
  width: 16px;
  height: 16px;
}

.progress-bar-bg {
  width: 100%;
  height: 10px;
  background: var(--bg-navy-950);
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid var(--glass-border);
}

.progress-bar-fill {
  height: 100%;
  border-radius: 9999px;
}

.flagship-fill {
  width: 100%;
  background: linear-gradient(90deg, #0284C7, #38BDF8);
}

.solar-fill {
  width: 85%;
  background: linear-gradient(90deg, #D97706, #F59E0B);
}

.construction-fill {
  width: 80%;
  background: linear-gradient(90deg, #0D9488, #2DD4BF);
}

/* Division Cards */
.divisions-section {
  background: var(--bg-navy-950);
}

.divisions-grid {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.flagship-card {
  position: relative;
  border-color: var(--color-border-glow);
  background: var(--glass-bg);
  box-shadow: var(--shadow-card);
  padding: 3rem;
  border-radius: 24px;
  overflow: hidden;
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
    grid-template-columns: 1.2fr 0.8fr;
  }
}

.flagship-left {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.flagship-card-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.flagship-card-desc {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.flagship-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .flagship-features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-tag {
  padding: 0.65rem 0.85rem;
  background: var(--bg-navy-950);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  font-size: 0.775rem;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-icon {
  width: 15px;
  height: 15px;
  color: #0284C7;
  flex-shrink: 0;
}

.flagship-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.5rem;
}

.flagship-preview {
  background: var(--bg-navy-950);
  padding: 1.75rem;
  border-radius: 18px;
  border: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  border-bottom: 1px solid var(--glass-border);
  padding-bottom: 0.85rem;
}

.preview-title {
  font-weight: 700;
  color: #0284C7;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.preview-icon {
  width: 16px;
  height: 16px;
}

.preview-status {
  color: #10B981;
  font-weight: 600;
}

.preview-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.preview-item {
  padding: 0.85rem 1rem;
  background: var(--bg-navy-900);
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.775rem;
}

.item-name {
  font-weight: 700;
  color: var(--color-text-primary);
}

.item-sub {
  color: var(--color-text-secondary);
  font-size: 0.7rem;
}

.item-badge {
  color: #0284C7;
  font-family: monospace;
  font-size: 11px;
}

.secondary-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .secondary-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.secondary-card {
  padding: 2.25rem;
  border-radius: 20px;
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

.amber-box { background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); }
.teal-box { background: rgba(20, 184, 166, 0.1); border: 1px solid rgba(20, 184, 166, 0.3); }
.sky-box { background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); }

.sec-icon { width: 24px; height: 24px; }
.sec-title { font-size: 1.5rem; font-weight: 700; color: var(--color-text-primary); }
.sec-desc { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; flex-grow: 1; }

.enquiry-preview-section {
  background: var(--bg-navy-900);
  border-top: 1px solid var(--glass-border);
  transition: background-color 0.3s ease;
}

.enquiry-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .enquiry-grid {
    grid-template-columns: 0.8fr 1.2fr;
  }
}
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-5 > * + * { margin-top: 1.25rem; }
</style>
