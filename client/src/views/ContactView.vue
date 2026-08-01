<template>
  <div class="page-wrapper">
    <!-- Banner -->
    <section class="page-banner bg-tech-grid">
      <div class="container">
        <div class="banner-content space-y-4">
          <div class="badge-tech">Global Headquarters & Support</div>
          <h1 class="page-title">Connect with Our <span class="gradient-text">Engineering Team</span></h1>
          <p class="page-subtitle">Have a project specification, RFP, security site assessment, or general enquiry? Submit your message below or reach our technical support offices directly.</p>
        </div>
      </div>
    </section>

    <!-- Main Section -->
    <section class="section-padding container">
      <div class="grid lg-grid-cols-12 gap-12 items-start">
        
        <!-- Info Column -->
        <div class="col-span-5 space-y-8">
          <div class="glass-panel info-card">
            <h3 class="card-title pb-5 border-b">Corporate Headquarters</h3>
            
            <ul class="info-list">
              <li class="info-item">
                <div class="info-icon-box"><MapPin class="icon text-sky" /></div>
                <div>
                  <h4 class="info-title">Office Address</h4>
                  <p class="info-desc">54 Enerhen Road, Enerhen,<br />Warri, Delta State, Nigeria</p>
                </div>
              </li>

              <li class="info-item">
                <div class="info-icon-box"><Phone class="icon text-sky" /></div>
                <div>
                  <h4 class="info-title">Telephone Desk</h4>
                  <p class="info-desc">+234 905 197 4366</p>
                </div>
              </li>

              <li class="info-item">
                <div class="info-icon-box"><Mail class="icon text-sky" /></div>
                <div>
                  <h4 class="info-title">Electronic Mail</h4>
                  <p class="info-desc">contact@djobrothers.com</p>
                </div>
              </li>

              <li class="info-item">
                <div class="info-icon-box teal-box"><Clock class="icon text-teal" /></div>
                <div>
                  <h4 class="info-title">Business Hours</h4>
                  <p class="info-desc">Mon - Fri: 08:00 - 18:00 GMT+1</p>
                  <span class="sla-tag">24/7 Security SLA Active</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="priority-box">
            <div class="flex items-center gap-2 text-sky font-bold text-sm">
              <ShieldCheck class="icon text-sky" /> Flagship Priority Desk
            </div>
            <p class="text-muted text-xs leading-relaxed">
              Security & Surveillance enquiries trigger priority assignment to a senior solution architect within 4 business hours.
            </p>
          </div>
        </div>

        <!-- Form Column -->
        <div class="col-span-7">
          <EnquiryForm :initialService="selectedService" />
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-vue-next';
import EnquiryForm from '../components/contact/EnquiryForm.vue';

const route = useRoute();
const selectedService = ref('Security Hardware');

const updateServiceFromQuery = () => {
  if (route.query.service) {
    selectedService.value = String(route.query.service);
  }
};

onMounted(() => { updateServiceFromQuery(); });
watch(() => route.query.service, () => { updateServiceFromQuery(); });
</script>

<style scoped>
.page-wrapper { padding-top: 5rem; padding-bottom: 5rem; }
.page-banner { padding: 4rem 0; background: var(--bg-navy-950); border-bottom: 1px solid var(--glass-border); transition: background-color 0.3s ease; }
.banner-content { max-width: 800px; display: flex; flex-direction: column; gap: 1rem; }
.page-title { font-size: 3rem; font-weight: 800; color: var(--color-text-primary); line-height: 1.1; }
.page-subtitle { font-size: 1.15rem; color: var(--color-text-secondary); line-height: 1.6; }

.info-card { padding: 2.5rem; border-color: var(--glass-border); background: var(--glass-bg); border-radius: 20px; }
.card-title { font-size: 1.5rem; font-weight: 800; color: var(--color-text-primary); }
.border-b { border-bottom: 1px solid var(--glass-border); }

.info-list { list-style: none; display: flex; flex-direction: column; gap: 2rem; margin-top: 1.75rem; }
.info-item { display: flex; gap: 1.25rem; align-items: flex-start; }
.info-icon-box { width: 44px; height: 44px; border-radius: 12px; background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(2, 132, 199, 0.25); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.teal-box { background: rgba(13, 148, 136, 0.1); border: 1px solid rgba(13, 148, 136, 0.25); }
.icon { width: 22px; height: 22px; }

.info-title { font-size: 1.05rem; font-weight: 700; color: var(--color-text-primary); }
.info-desc { font-size: 0.9rem; color: var(--color-text-secondary); margin-top: 0.35rem; line-height: 1.5; }

.sla-tag { display: inline-block; margin-top: 0.5rem; font-size: 0.75rem; font-weight: 700; color: #0284C7; background: rgba(2, 132, 199, 0.12); padding: 0.25rem 0.6rem; border-radius: 6px; }

.priority-box { padding: 1.75rem; border-radius: 16px; background: var(--glass-bg); border: 1px solid var(--glass-border); display: flex; flex-direction: column; gap: 0.75rem; box-shadow: var(--shadow-card); }
.space-y-4 > * + * { margin-top: 1rem; }
.space-y-8 > * + * { margin-top: 2rem; }
</style>
