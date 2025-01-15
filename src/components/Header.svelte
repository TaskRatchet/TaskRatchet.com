<script lang="ts">
  import { onMount } from "svelte";

  let theme: string;

  onMount(() => {
    theme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
  });

  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme =
      html.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
      <div class="nav-links">
        <a href="https://docs.taskratchet.com/">Docs</a>
      </div>
      <div class="nav-actions">
        <a href="https://app.taskratchet.com/login" class="button secondary"
          >Sign In</a
        >
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
      </div>
    </nav>
  </div>
</header>

<style>
  .site-header {
    padding: 1rem 0;
    background: var(--bg-header);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .header-logo {
    width: 40px;
    height: 40px;
    transition: transform 0.2s ease;
    aspect-ratio: 1;
    object-fit: contain;
  }

  .site-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--logo-text);
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: var(--primary);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--text-primary);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .theme-toggle:hover {
    background: var(--bg-card);
  }

  :global([data-theme="dark"]) .sun-icon {
    display: none;
  }

  :global([data-theme="light"]) .moon-icon {
    display: none;
  }
</style>
