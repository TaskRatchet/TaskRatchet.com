<script lang="ts">
    import { onMount } from "svelte";
    import Button from "./Button.svelte";

    let theme: string;
    let isMenuOpen = false;

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

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    function closeMenu() {
        isMenuOpen = false;
        document.body.style.overflow = "";
    }
</script>

{#if isMenuOpen}
    <div
        class="backdrop"
        onclick={closeMenu}
        onkeydown={(e) => e.key === "Escape" && closeMenu()}
        aria-hidden="true"
    ></div>
{/if}
<header class="site-header">
    <div class="container">
        <div class="logo-section">
            <img src="/logo.png" alt="TaskRatchet Logo" class="header-logo" />
            <span class="site-name">TaskRatchet</span>
        </div>
        <nav class:active={isMenuOpen}>
            <div class="nav-links">
                <a href="https://docs.taskratchet.com/help/faq.html">FAQ</a>
                <a href="https://docs.taskratchet.com/">Docs</a>
            </div>
            <div class="nav-actions">
                <Button
                    href="https://app.taskratchet.com/login"
                    variant="secondary">Sign In</Button
                >
                <button
                    class="theme-toggle"
                    aria-label="Toggle theme"
                    onclick={toggleTheme}
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
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"
                        ></line>
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
                        <path
                            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
        <button
            class="menu-toggle"
            aria-label="Toggle menu"
            onclick={toggleMenu}
        >
            <span class="hamburger"></span>
        </button>
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

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        position: relative;
        width: 40px;
        height: 40px;
    }

    .hamburger {
        position: relative;
        display: block;
        width: 24px;
        height: 2px;
        background: var(--text-primary);
        transition: all 0.3s ease;
    }

    .hamburger::before,
    .hamburger::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        background: var(--text-primary);
        transition: all 0.3s ease;
    }

    .hamburger::before {
        top: -6px;
    }

    .hamburger::after {
        bottom: -6px;
    }

    .backdrop {
        display: none;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
            z-index: 110;
        }

        .backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 90;
            backdrop-filter: blur(2px);
        }

        nav {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            background: var(--bg-card);
            padding: 5rem 2rem 2rem;
            width: 300px;
            flex-direction: column;
            gap: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 100;
        }

        nav.active {
            transform: translateX(0);
        }

        .nav-links {
            flex-direction: column;
            align-items: center;
            font-size: 1.25rem;
        }

        .nav-actions {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        /* Hamburger animation */
        .menu-toggle .hamburger,
        .menu-toggle .hamburger::before,
        .menu-toggle .hamburger::after {
            transition: all 0.3s ease;
        }

        .menu-toggle .hamburger {
            background: var(--text-primary);
        }

        .menu-toggle .hamburger::before,
        .menu-toggle .hamburger::after {
            background: var(--text-primary);
        }

        :global(nav.active) ~ .menu-toggle .hamburger {
            background: transparent !important;
        }

        :global(nav.active) ~ .menu-toggle .hamburger::before {
            transform: rotate(45deg) !important;
            top: 0 !important;
        }

        :global(nav.active) ~ .menu-toggle .hamburger::after {
            transform: rotate(-45deg) !important;
            bottom: 0 !important;
        }
    }
</style>
