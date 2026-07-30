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

    <!-- Success Message -->
    <transition name="fade">
      <div v-if="successMessage" class="alert-box alert-success">
        <CheckCircle2 class="alert-icon" />
        <div>
          <h4 class="alert-title">Submission Successful</h4>
          <p class="alert-desc">{{ successMessage }}</p>
        </div>
      </div>
    </transition>

    <!-- Error Message -->
    <transition name="fade">
      <div v-if="errorMessage" class="alert-box alert-error">
        <AlertCircle class="alert-icon" />
        <div>
          <h4 class="alert-title">Unable to Submit</h4>
          <p class="alert-desc">{{ errorMessage }}</p>
        </div>
      </div>
    </transition>

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
              <option value="Security & Surveillance">Security & Surveillance (Flagship)</option>
              <option value="Solar Installation">Solar Installation</option>
              <option value="Road & Building Construction">Road & Building Construction</option>
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
import { ref, reactive, watch } from 'vue';
import { submitEnquiry } from '../../services/api';
import { User, Mail, Phone, Shield, ChevronDown, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-vue-next';

const props = defineProps({
  initialService: { type: String, default: 'Security & Surveillance' }
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

  const phoneRegex = /^\+?[1-9]\d{6,14}$/;
  if (!form.phone_number || !phoneRegex.test(form.phone_number.trim())) {
    fieldErrors.phone_number = 'Enter a valid phone number (e.g. +234 801 234 5678).';
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
  successMessage.value = '';
  errorMessage.value = '';

  if (!validateClientSide()) return;

  isSubmitting.value = true;

  try {
    const res = await submitEnquiry({
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone_number: form.phone_number.trim(),
      service: form.service,
      message: form.message.trim()
    });

    successMessage.value = res.message || 'Your enquiry has been received successfully.';
    form.full_name = '';
    form.email = '';
    form.phone_number = '';
    form.message = '';
    form.service = props.initialService;
  } catch (err) {
    if (err.errors && Array.isArray(err.errors)) {
      err.errors.forEach(e => { fieldErrors[e.field] = e.message; });
      errorMessage.value = err.message || 'Validation failed. Please correct highlighted fields.';
    } else {
      errorMessage.value = err.message || 'Failed to submit enquiry. Please try again.';
    }
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

.alert-box {
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.alert-success {
  background: rgba(13, 148, 136, 0.12);
  border: 1px solid rgba(20, 184, 166, 0.4);
  color: var(--color-teal-600);
}

.alert-error {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #DC2626;
}

.alert-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.alert-title {
  font-size: 0.875rem;
  font-weight: 700;
}

.alert-desc {
  font-size: 0.8rem;
  margin-top: 2px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.space-y-3 > * + * { margin-top: 0.75rem; }
</style>
