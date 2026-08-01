<template>
  <div class="page-wrapper">
    
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">DJO BROTHERS LIMITED — SERVICE MATRIX</div>
          <h1 class="page-title">
            Integrated Engineering & <span class="gradient-text">Security Divisions</span>
          </h1>
          <p class="page-subtitle">
            DJO Brothers Limited provides innovative solutions to complex engineering problems. Explore our 7 specialized engineering and security divisions.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Overview Matrix -->
    <section class="section-padding container space-y-12">
      
      <!-- 1. Flagship Security Hardware Division -->
      <div class="glass-panel flagship-box">
        <div class="flagship-badge-top">★ Primary Flagship Division</div>

        <div class="grid lg-grid-cols-12 gap-10 items-center">
          <div class="col-span-7 space-y-6">
            <div class="badge-tech badge-flagship">
              <ShieldCheck class="b-icon" /> Primary Core Specialization
            </div>

            <h2 class="div-title">Security Hardware, Defense Radar & LiDAR</h2>

            <p class="text-muted leading-relaxed">
              DJO Brothers Limited installs, calibrates, and maintains high-level defense radar, solid-state 3D LiDAR point cloud scanners, optical/thermal PTZ camera arrays, perimeter intrusion detection systems (PIDS), and centralized C4ISR command centers.
            </p>

            <div class="grid md-grid-cols-3 gap-3">
              <div class="sub-feature"><Radio class="f-icon text-sky" /> Defense 3D Radar</div>
              <div class="sub-feature"><Eye class="f-icon text-sky" /> Solid-State LiDAR</div>
              <div class="sub-feature"><Video class="f-icon text-sky" /> 4K & Thermal PTZ</div>
              <div class="sub-feature"><Zap class="f-icon text-sky" /> Fibre PIDS Hardware</div>
              <div class="sub-feature"><Fingerprint class="f-icon text-sky" /> Biometrics & Speed Gates</div>
              <div class="sub-feature"><Cpu class="f-icon text-sky" /> C4ISR Command Matrix</div>
            </div>

            <div>
              <router-link to="/services/security-hardware" class="btn-primary">
                <span>Explore Security Hardware Division</span>
                <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>

          <div class="col-span-5 side-card">
            <h4 class="side-title"><ShieldCheck class="f-icon text-sky" /> Key Applications</h4>
            <ul class="app-list">
              <li class="app-item"><span>Defense & Perimeter Boundaries</span> <span class="app-tag">Radar / LiDAR</span></li>
              <li class="app-item"><span>Oil Depots & Refineries</span> <span class="app-tag">ATEX Thermal</span></li>
              <li class="app-item"><span>Airports & Ports</span> <span class="app-tag">3D Point Cloud</span></li>
              <li class="app-item"><span>Command Centers</span> <span class="app-tag">PSIM Integration</span></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 2. Cybersecurity Consultation -->
      <div class="glass-panel sec-box indigo-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-indigo bg-indigo-light"><Lock class="b-icon" /> Cybersecurity Division</div>
            <h2 class="div-title">Cybersecurity Consultation & Infrastructure Defense</h2>
            <p class="text-muted text-sm">OT/ICS network hardening, SCADA security audits, cyber-physical hardware encryption, zero-trust network design, and penetration testing.</p>
            <div class="pt-2">
              <router-link to="/services/cybersecurity-consultation" class="btn-secondary">
                <span>View Cybersecurity Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-indigo font-bold text-sm">Industrial OT Defense</div>
            <p class="text-muted text-xs">Protecting physical IP hardware and SCADA control subnets from cyber intrusion.</p>
            <div class="roi-box"><span>Compliance Standard</span> <span class="text-indigo font-bold">IEC 62443 / ISO 27001</span></div>
          </div>
        </div>
      </div>

      <!-- 3. Factory Hardware Installation -->
      <div class="glass-panel sec-box emerald-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-emerald bg-emerald-light"><Factory class="b-icon" /> Industrial Division</div>
            <h2 class="div-title">Installation of Factory Hardware</h2>
            <p class="text-muted text-sm">Industrial plant equipment assembly, precision laser positioning, SCADA/PLC control panel mounting, power distribution, and automated assembly line setups.</p>
            <div class="pt-2">
              <router-link to="/services/factory-hardware-installation" class="btn-secondary">
                <span>View Factory Hardware Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-emerald font-bold text-sm">Turnkey Industrial Rigging</div>
            <p class="text-muted text-xs">Millwright assembly, hydraulic piping, and electrical commissioning.</p>
            <div class="roi-box"><span>Precision Tolerance</span> <span class="text-emerald font-bold">&lt; 0.05mm Laser Alignment</span></div>
          </div>
        </div>
      </div>

      <!-- 4. Hardware Sales & Technical Procurement -->
      <div class="glass-panel sec-box purple-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-purple bg-purple-light"><ShoppingBag class="b-icon" /> Technical Sourcing</div>
            <h2 class="div-title">Hardware Provision (Sales) & Procurement</h2>
            <p class="text-muted text-sm">Direct sales of specialized security hardware, factory components, civil equipment, OEM sourcing, pre-shipment FAT testing, and global logistics.</p>
            <div class="pt-2">
              <router-link to="/services/hardware-procurement-sales" class="btn-secondary">
                <span>View Procurement Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-purple font-bold text-sm">Global Supply Network</div>
            <p class="text-muted text-xs">Certified OEM hardware sales and expedited door-to-door delivery.</p>
            <div class="roi-box"><span>OEM Warranty</span> <span class="text-purple font-bold">100% Certified Direct</span></div>
          </div>
        </div>
      </div>

      <!-- 5. Civil Engineering & Problem Solving -->
      <div class="glass-panel sec-box amber-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-amber bg-amber-light"><HardHat class="b-icon" /> Engineering Division</div>
            <h2 class="div-title">Civil Engineering & Problem Solutions</h2>
            <p class="text-muted text-sm">Heavy civil infrastructure, highway road construction, site earthworks, drainage systems, and tailored engineering problem-solving.</p>
            <div class="pt-2">
              <router-link to="/services/civil-engineering" class="btn-secondary">
                <span>View Civil Engineering Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-amber font-bold text-sm">Engineering Problem Solvers</div>
            <p class="text-muted text-xs">Customized engineering design for complex terrain and structural challenges.</p>
            <div class="roi-box"><span>Code Compliance</span> <span class="text-amber font-bold">Eurocode & ASTM Compliant</span></div>
          </div>
        </div>
      </div>

      <!-- 6. Heavy Machinery & Barge Hire -->
      <div class="glass-panel sec-box cyan-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-cyan bg-cyan-light"><Ship class="b-icon" /> Heavy Fleet Rental</div>
            <h2 class="div-title">Hiring of Heavy Duty Machineries & Barges</h2>
            <p class="text-muted text-sm">Onshore construction equipment rental (cranes, excavators, dozers) and marine barge fleet chartering (flat-deck, spud, and crane barges).</p>
            <div class="pt-2">
              <router-link to="/services/heavy-machinery-barge-hire" class="btn-secondary">
                <span>View Machinery & Barge Hire</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-cyan font-bold text-sm">Onshore & Marine Logistics</div>
            <p class="text-muted text-xs">Certified operator crews and mobile maintenance support.</p>
            <div class="roi-box"><span>Deck Capacity</span> <span class="text-cyan font-bold">Up to 5,000 Ton Barges</span></div>
          </div>
        </div>
      </div>

      <!-- 7. Solar Power Systems -->
      <div class="glass-panel sec-box yellow-border">
        <div class="grid lg-grid-cols-12 gap-8 items-center">
          <div class="col-span-7 space-y-4">
            <div class="badge-tech text-yellow bg-yellow-light"><Sun class="b-icon" /> Clean Energy</div>
            <h2 class="div-title">Solar Installation & Microgrids</h2>
            <p class="text-muted text-sm">Commercial, industrial, and utility solar arrays with containerized lithium battery storage (BESS) for off-grid power stability.</p>
            <div class="pt-2">
              <router-link to="/services/solar-installation" class="btn-secondary">
                <span>View Solar Division</span> <ArrowRight class="btn-icon" />
              </router-link>
            </div>
          </div>
          <div class="col-span-5 side-card">
            <div class="text-yellow font-bold text-sm">Energy Independence</div>
            <p class="text-muted text-xs">Lower operational utility costs with high-yield solar power.</p>
            <div class="roi-box"><span>Storage Chemistry</span> <span class="text-yellow font-bold">LiFePO4 Containerized BESS</span></div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ShieldCheck, Lock, Factory, ShoppingBag, HardHat, Ship, Sun, Radio, Eye, Video, Zap, Fingerprint, Cpu, ArrowRight } from 'lucide-vue-next';
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
.app-item { padding: 0.6rem; background: var(--bg-navy-950); border-radius: 8px; border: 1px solid var(--glass-border); display: flex; justify-between: space-between; align-items: center; }
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
