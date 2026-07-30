<template>
  <div :class="['section-header', { 'text-center': center }]">
    <div v-if="badge" :class="['badge-tech', { 'badge-flagship': isFlagship }]">
      <component :is="badgeIcon" v-if="badgeIcon" class="badge-icon" />
      <span>{{ badge }}</span>
    </div>
    
    <h2 class="header-title">
      {{ title }}
      <span v-if="highlightTitle" class="gradient-text highlight-block">
        {{ highlightTitle }}
      </span>
    </h2>

    <p v-if="description" class="header-desc">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { Shield, Sparkles, Sun, Building2, Cpu } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
  badge: { type: String, default: '' },
  title: { type: String, required: true },
  highlightTitle: { type: String, default: '' },
  description: { type: String, default: '' },
  center: { type: Boolean, default: false },
  isFlagship: { type: Boolean, default: false },
  icon: { type: String, default: 'Shield' }
});

const badgeIcon = computed(() => {
  switch (props.icon) {
    case 'Sun': return Sun;
    case 'Building2': return Building2;
    case 'Cpu': return Cpu;
    case 'Sparkles': return Sparkles;
    case 'Shield':
    default: return Shield;
  }
});
</script>

<style scoped>
.section-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
  max-width: 720px;
}

.section-header.text-center {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
}

.badge-icon {
  width: 16px;
  height: 16px;
}

.header-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.25;
}

@media (min-width: 768px) {
  .header-title {
    font-size: 3rem;
  }
}

.highlight-block {
  display: block;
}

@media (min-width: 640px) {
  .highlight-block {
    display: inline;
    margin-left: 0.4rem;
  }
}

.header-desc {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
