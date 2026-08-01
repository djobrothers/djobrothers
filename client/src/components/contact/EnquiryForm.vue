<template>
  <div class="glass-panel form-card">
    <div class="form-header space-y-3">
      <div class="badge-tech badge-flagship">
        <Send class="badge-icon" />
        <span>Engineering Enquiry Portal</span>
      </div>
      <h3 class="form-title">Request an Enterprise Consultation</h3>
      <p class="form-subtitle">
        Submit your project specifications or security assessment request. Our team responds within 24 business hours.
      </p>
    </div>

    <!-- Floating Toast Notifications (Teleported to Body for top viewport visibility on mobile & desktop) -->
    <teleport to="body">
      <transition name="toast-slide">
        <div
          v-if="successMessage"
          class="toast-notification toast-success"
          role="alert"
          aria-live="polite"
        >
          <div class="toast-content">
            <CheckCircle2 class="toast-icon text-emerald" />
            <div class="toast-text">
              <h4 class="toast-title">Submission Successful!</h4>
              <p class="toast-desc">{{ successMessage }}</p>
            </div>
            <button @click="dismissNotification" class="toast-close" aria-label="Close notification">
              <X class="close-icon" />
            </button>
          </div>
        </div>
      </transition>

      <transition name="toast-slide">
        <div
          v-if="errorMessage"
          class="toast-notification toast-error"
          role="alert"
          aria-live="assertive"
        >
          <div class="toast-content">
            <AlertCircle class="toast-icon text-rose" />
            <div class="toast-text">
              <h4 class="toast-title">Submission Notice</h4>
              <p class="toast-desc">{{ errorMessage }}</p>
            </div>
            <button @click="dismissNotification" class="toast-close" aria-label="Close notification">
              <X class="close-icon" />
            </button>
          </div>
        </div>
      </transition>
    </teleport>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="enquiry-form" novalidate>
      <div class="form-row">
        <!-- Full Name -->
        <div class="form-field">
          <label for="full_name" class="form-label">Full Name <span class="required">*</span></label>
          <div class="input-wrapper">
            <User class="field-icon" />
            <input
              id="full_name"
              v-model="form.full_name"
              type="text"
              placeholder="e.g. Alexander Mercer"
              :class="['form-input', { 'input-error': fieldErrors.full_name }]"
            />
          </div>
          <span v-if="fieldErrors.full_name" class="error-msg">{{ fieldErrors.full_name }}</span>
        </div>

        <!-- Email -->
        <div class="form-field">
          <label for="email" class="form-label">Work Email Address <span class="required">*</span></label>
          <div class="input-wrapper">
            <Mail class="field-icon" />
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="alexander@company.com"
              :class="['form-input', { 'input-error': fieldErrors.email }]"
            />
          </div>
          <span v-if="fieldErrors.email" class="error-msg">{{ fieldErrors.email }}</span>
        </div>
      </div>

      <div class="form-row">
        <!-- Phone Number -->
        <div class="form-field">
          <label for="phone_number" class="form-label">Phone Number <span class="required">*</span></label>
          <div class="input-wrapper">
            <Phone class="field-icon" />
            <input
              id="phone_number"
              v-model="form.phone_number"
              type="tel"
              placeholder="+234 801 234 5678"
              :class="['form-input', { 'input-error': fieldErrors.phone_number }]"
            />
          </div>
          <span v-if="fieldErrors.phone_number" class="error-msg">{{ fieldErrors.phone_number }}</span>
        </div>

        <!-- Service Select -->
        <div class="form-field">
          <label for="service" class="form-label">Service Required <span class="required">*</span></label>
          <div class="input-wrapper">
            <Shield class="field-icon text-sky" />
            <select
              id="service"
              v-model="form.service"
              :class="['form-input select-input', { 'input-error': fieldErrors.service }]"
            >
              <option value="Security Hardware">Security Hardware (Defense Radar & LiDAR)</option>
              <option value="Cybersecurity Consultation">Cybersecurity Consultation & OT Defense</option>
              <option value="Factory Hardware">Installation of Factory Hardware</option>
              <option value="Hardware Procurement">Hardware Provision (Sales) & Procurement</option>
              <option value="Civil Engineering">Civil Engineering & Problem Solutions</option>
              <option value="Machinery and Barge Hire">Hiring of Heavy Duty Machinery & Barges</option>
              <option value="Solar Installation">Solar Power & Renewable Energy</option>
              <option value="General Enquiry">General Corporate Enquiry</option>
            </select>
            <ChevronDown class="select-chevron" />
          </div>
          <span v-if="fieldErrors.service" class="error-msg">{{ fieldErrors.service }}</span>
        </div>
      </div>

      <!-- Message -->
      <div class="form-field">
        <label for="message" class="form-label">Project Details / Requirements <span class="required">*</span></label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          placeholder="Briefly describe your project requirements..."
          :class="['form-input textarea-input', { 'input-error': fieldErrors.message }]"
        ></textarea>
        <span v-if="fieldErrors.message" class="error-msg">{{ fieldErrors.message }}</span>
      </div>

      <!-- Submit Button -->
      <div class="submit-wrapper">
        <button type="submit" :disabled="isSubmitting" class="btn-primary submit-btn">
          <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
            <span>Submit Engineering Enquiry</span>
            <Send class="btn-icon" />
          </span>
          <span v-else class="flex items-center justify-center gap-2">
            <Loader2 class="spinner-icon" />
            <span>Processing...</span>
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onUnmounted } from 'vue';
import { submitEnquiry } from '../../services/api';
import { User, Mail, Phone, Shield, ChevronDown, Send, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-vue-next';

const props = defineProps({
  initialService: { type: String, default: 'Security Hardware' }
});

const form = reactive({
  full_name: '',
  email: '',
  phone_number: '',
  service: props.initialService,
  message: ''
});

watch(() => props.initialService, (newVal) => {
  if (newVal) form.service = newVal;
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const fieldErrors = reactive({});

let autoDismissTimer = null;

const dismissNotification = () => {
  if (autoDismissTimer) clearTimeout(autoDismissTimer);
  successMessage.value = '';
  errorMessage.value = '';
};

const triggerAutoDismiss = (seconds = 7) => {
  if (autoDismissTimer) clearTimeout(autoDismissTimer);
  autoDismissTimer = setTimeout(() => {
    successMessage.value = '';
    errorMessage.value = '';
  }, seconds * 1000);
};

onUnmounted(() => {
  if (autoDismissTimer) clearTimeout(autoDismissTimer);
});

const validateClientSide = () => {
  Object.keys(fieldErrors).forEach(key => delete fieldErrors[key]);
  let isValid = true;

  if (!form.full_name || form.full_name.trim().length < 2) {
    fieldErrors.full_name = 'Full name must be at least 2 characters.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email.trim())) {
    fieldErrors.email = 'Please provide a valid work email address.';
    isValid = false;
  }

  const phoneRegex = /^[\+\d\s\-\(\)]{7,25}$/;
  if (!form.phone_number || !phoneRegex.test(form.phone_number.trim())) {
    fieldErrors.phone_number = 'Enter a valid phone number (e.g. +234 905 197 4366).';
    isValid = false;
  }

  if (!form.service) {
    fieldErrors.service = 'Please select a service option.';
    isValid = false;
  }

  if (!form.message || form.message.trim().length < 10) {
    fieldErrors.message = 'Please provide project details (minimum 10 characters).';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  dismissNotification();

  if (!validateClientSide()) {
    errorMessage.value = 'Please correct highlighted form errors below.';
    triggerAutoDismiss(5);
    return;
  }

  isSubmitting.value = true;

  try {
    const res = await submitEnquiry({
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone_number: form.phone_number.trim(),
      service: form.service,
      message: form.message.trim()
    });

    successMessage.value = res.message || 'Your enquiry has been submitted successfully! Our engineering team will contact you shortly.';
    triggerAutoDismiss(8);

    form.full_name = '';
    form.email = '';
    form.phone_number = '';
    form.message = '';
    form.service = props.initialService;
  } catch (err) {
    if (err.errors && Array.isArray(err.errors)) {
      err.errors.forEach(e => { fieldErrors[e.field] = e.message; });
      errorMessage.value = err.message || 'Validation failed. Please check highlighted fields.';
    } else {
      errorMessage.value = err.message || 'Failed to submit enquiry. Please check network connection and try again.';
    }
    triggerAutoDismiss(7);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.form-card {
  padding: 2.5rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-card);
  border-radius: 20px;
}

@media (min-width: 768px) {
  .form-card {
    padding: 3rem;
  }
}

.form-header {
  margin-bottom: 2.25rem;
}

.badge-icon {
  width: 14px;
  height: 14px;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.25;
}

.form-subtitle {
  font-size: 0.925rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Floating Toast Styles (Teleported to viewport top) */
.toast-notification {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  width: calc(100% - 2rem);
  max-width: 520px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  pointer-events: auto;
}

.toast-success {
  background: rgba(11, 19, 43, 0.96);
  border: 1.5px solid #10B981;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.25);
}

.toast-error {
  background: rgba(11, 19, 43, 0.96);
  border: 1.5px solid #EF4444;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(239, 68, 68, 0.25);
}

.toast-content {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
}

.toast-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.text-emerald { color: #10B981; }
.text-rose { color: #F43F5E; }

.toast-text {
  flex-grow: 1;
}

.toast-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
}

.toast-desc {
  font-size: 0.825rem;
  color: #CBD5E1;
  line-height: 1.4;
  margin-top: 2px;
}

.toast-close {
  background: transparent;
  border: none;
  color: #94A3B8;
  padding: 4px;
  cursor: pointer;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.toast-close:hover {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.15);
}

.close-icon {
  width: 16px;
  height: 16px;
}

/* Toast Slide Animation */
.toast-slide-enter-active, .toast-slide-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast-slide-enter-from {
  opacity: 0;
  transform: translate(-50%, -100%) scale(0.95);
}
.toast-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -35px) scale(0.95);
}

.enquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.form-label {
  font-size: 0.775rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-secondary);
}

.required {
  color: var(--color-electric-500);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.field-icon {
  position: absolute;
  left: 1rem;
  width: 18px;
  height: 18px;
  color: var(--color-text-muted);
  pointer-events: none;
}

.form-input {
  width: 100%;
  padding: 0.9rem 1.1rem 0.9rem 2.75rem;
  background: var(--bg-navy-900);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  line-height: 1.5;
}

.form-input::placeholder {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.form-input:focus {
  border-color: var(--color-electric-500);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
}

.select-input {
  appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.select-input option {
  background-color: var(--bg-navy-900);
  color: var(--color-text-primary);
  padding: 0.5rem;
}

.select-chevron {
  position: absolute;
  right: 1rem;
  width: 18px;
  height: 18px;
  color: var(--color-text-muted);
  pointer-events: none;
}

.textarea-input {
  padding-left: 1.1rem;
  resize: vertical;
  min-height: 120px;
}

.input-error {
  border-color: #EF4444 !important;
}

.error-msg {
  font-size: 0.775rem;
  color: #DC2626;
  font-weight: 600;
  margin-top: 2px;
}

.submit-wrapper {
  margin-top: 0.5rem;
}

.submit-btn {
  width: 100%;
  padding: 1.1rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 12px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.spinner-icon {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.space-y-3 > * + * { margin-top: 0.75rem; }
</style>
