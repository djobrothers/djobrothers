<template>
  <div class="lang-selector-wrapper" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      class="lang-trigger-btn"
      :aria-expanded="isOpen"
      aria-label="Select Language"
      type="button"
    >
      <span class="flag-icon" v-html="currentFlagSvg"></span>
      <span class="lang-code">{{ currentLocale.toUpperCase() }}</span>
      <ChevronDown class="chevron-icon" :class="{ 'rotate-180': isOpen }" />
    </button>

    <Transition name="fade-slide">
      <div v-if="isOpen" class="lang-dropdown-menu">
        <button
          v-for="item in availableLocales"
          :key="item.code"
          @click="selectLang(item.code)"
          :class="['lang-option', { active: currentLocale === item.code }]"
          type="button"
        >
          <span class="flag-icon" v-html="getFlagSvg(item.flag)"></span>
          <span class="lang-name">{{ item.name }}</span>
          <Check v-if="currentLocale === item.code" class="check-icon" />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ChevronDown, Check } from 'lucide-vue-next';
import { currentLocale, setLocale, availableLocales } from '../../i18n';

const isOpen = ref(false);
const dropdownRef = ref(null);

const flags = {
  GB: `<svg viewBox="0 0 60 30" width="20" height="14" style="border-radius: 2px; overflow: hidden; display: inline-block; vertical-align: middle;"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>`,
  ES: `<svg viewBox="0 0 60 40" width="20" height="14" style="border-radius: 2px; overflow: hidden; display: inline-block; vertical-align: middle;"><rect width="60" height="40" fill="#AA151B"/><rect y="10" width="60" height="20" fill="#F1BF00"/><rect y="30" width="60" height="10" fill="#AA151B"/></svg>`,
  RU: `<svg viewBox="0 0 60 40" width="20" height="14" style="border-radius: 2px; overflow: hidden; display: inline-block; vertical-align: middle;"><rect width="60" height="40" fill="#fff"/><rect y="13.3" width="60" height="13.4" fill="#0039A6"/><rect y="26.7" width="60" height="13.3" fill="#D52B1E"/></svg>`,
  DE: `<svg viewBox="0 0 60 40" width="20" height="14" style="border-radius: 2px; overflow: hidden; display: inline-block; vertical-align: middle;"><rect width="60" height="40" fill="#000"/><rect y="13.3" width="60" height="13.4" fill="#DD0000"/><rect y="26.7" width="60" height="13.3" fill="#FFCC00"/></svg>`,
  CN: `<svg viewBox="0 0 60 40" width="20" height="14" style="border-radius: 2px; overflow: hidden; display: inline-block; vertical-align: middle;"><rect width="60" height="40" fill="#EE1C25"/><polygon points="10,5 12,11 18,11 13,15 15,21 10,17 5,21 7,15 2,11 8,11" fill="#FFFF00"/></svg>`
};

const getFlagSvg = (flagCode) => flags[flagCode] || flags.GB;

const currentFlagSvg = computed(() => {
  const loc = availableLocales.find(l => l.code === currentLocale.value);
  return getFlagSvg(loc ? loc.flag : 'GB');
});

function selectLang(code) {
  setLocale(code);
  isOpen.value = false;
}

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.lang-selector-wrapper {
  position: relative;
  display: inline-block;
}

.lang-trigger-btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.75rem;
  background: var(--glass-bg, rgba(15, 23, 42, 0.65));
  border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.12));
  border-radius: 9999px;
  color: var(--text-primary, #f8fafc);
  font-size: 0.815rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

.lang-trigger-btn:hover {
  border-color: #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
}

.flag-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.lang-code {
  letter-spacing: 0.05em;
  font-family: inherit;
}

.chevron-icon {
  width: 14px;
  height: 14px;
  color: #94a3b8;
  transition: transform 0.2s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.lang-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 150px;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.35rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.15);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 2px;
  backdrop-filter: blur(16px);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: none;
  background: transparent;
  color: #cbd5e1;
  font-size: 0.835rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}

.lang-option:hover {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
}

.lang-option.active {
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
  font-weight: 600;
}

.check-icon {
  width: 14px;
  height: 14px;
  margin-left: auto;
  color: #38bdf8;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
