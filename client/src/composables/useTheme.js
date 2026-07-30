import { ref, onMounted } from 'vue';

const isDark = ref(true);

export function useTheme() {
  const initTheme = () => {
    const savedTheme = localStorage.getItem('djo-theme');
    if (savedTheme === 'light') {
      isDark.value = false;
      document.documentElement.classList.add('light-mode');
    } else {
      isDark.value = true;
      document.documentElement.classList.remove('light-mode');
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('djo-theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('djo-theme', 'light');
    }
  };

  onMounted(() => {
    initTheme();
  });

  return {
    isDark,
    toggleTheme
  };
}
