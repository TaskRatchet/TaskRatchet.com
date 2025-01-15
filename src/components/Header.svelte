<script lang="ts">
  import { onMount } from 'svelte';

  let theme: string;

  onMount(() => {
    theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    theme = newTheme;
  }
</script>

<header class="site-header">
  <div class="container">
    <div class="logo-section">
      <img src="/logo.png" alt="TaskRatchet Logo" class="header-logo" />
      <span class="site-name">TaskRatchet</span>
    </div>
    <nav>
    <a href="https://docs.taskratchet.com/" class="button secondary">Docs</a>
    <button
        class="theme-toggle"
        aria-label="Toggle theme"
        on:click={toggleTheme}
      >
        <svg
          class="sun-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          class="moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
      <a href="https://app.taskratchet.com/login" class="button secondary"
        >Sign In</a
      >
    </nav>
  </div>
</header>

<style>
  .header-logo {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease;
    /* Prevent layout shift during image load */
    aspect-ratio: 1;
    object-fit: contain;
  }
</style>
