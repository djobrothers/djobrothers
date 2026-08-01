import { ref, onMounted } from 'vue';

const isDark = ref(true);

export function useTheme() {
  const applyTheme = (dark) => {
    isDark.value = dark;
    if (dark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem('djo-theme');
    if (savedTheme === 'light') {
      applyTheme(false);
    } else if (savedTheme === 'dark') {
      applyTheme(true);
    } else {
      // Auto mode based on user's local time:
      // 7:00 AM (07:00) to 6:59 PM (18:59) -> Default to Light theme
      // 7:00 PM (19:00) to 6:59 AM (06:59) -> Default to Dark theme
      const currentHour = new Date().getHours();
      const isDaytime = currentHour >= 7 && currentHour < 19;
      applyTheme(!isDaytime);
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark.value;
    applyTheme(newIsDark);
    localStorage.setItem('djo-theme', newIsDark ? 'dark' : 'light');
  };

  onMounted(() => {
    initTheme();
  });

  return {
    isDark,
    toggleTheme,
    initTheme
  };
}
