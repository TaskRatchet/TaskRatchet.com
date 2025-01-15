<script lang="ts">
  export let href: string | undefined = undefined;
  export let variant: 'primary' | 'secondary' = 'primary';
  export let type: 'button' | 'submit' | 'reset' | undefined = undefined;
  export let onClick: (() => void) | undefined = undefined;
</script>

{#if href}
  <a {href} class="button {variant}">
    <slot />
  </a>
{:else}
  <button class="button {variant}" {type} on:click={onClick}>
    <slot />
  </button>
{/if}

<style>
  .button {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
    font-size: inherit;
    line-height: inherit;
  }

  .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .primary {
    background-color: var(--primary);
    color: white;
    font-weight: 600;
  }

  .primary:hover {
    background-color: var(--primary-dark);
  }

  .secondary {
    background-color: var(--bg-card);
    color: var(--text-primary);
  }

  .secondary:hover {
    background-color: var(--gray-200);
  }

  :global([data-theme="dark"]) .secondary:hover {
    background-color: var(--gray-700);
    color: var(--gray-50);
  }
</style>
