<script lang="ts">
  import Button from './Button.svelte';
</script>

<section class="hero">
  <div class="hero-background"></div>
  <div class="container">
    <div class="hero-content">
      <h1>TaskRatchet</h1>
      <p class="tagline">Your Partner in Getting Things Done</p>
      <p class="description">
        Transform your productivity journey with a todo list that truly
        understands what motivates you. Because sometimes, we all need that extra
        push.
      </p>
      <div class="cta-buttons">
        <Button href="https://app.taskratchet.com/register" variant="primary">Sign Up</Button>
        <Button href="#how-it-works" variant="secondary">How It Works</Button>
      </div>
    </div>
    <div class="hero-image">
      <img 
        src="/midjourney-a_woman_working_late_into_the_night_at_her_computer.png" 
        alt="A woman working at her computer"
        class="feature-image"
      />
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 600px;
    background: linear-gradient(135deg, var(--gray-50) 0%, white 100%);
    padding: 14rem 0 6rem;
    margin-top: -4rem;
    position: relative;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 25%),
                      radial-gradient(circle at 80% 80%, var(--secondary) 0%, transparent 25%);
    opacity: 0.1;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content {
    text-align: left;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .tagline {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .description {
    max-width: 600px;
    margin-bottom: 2rem;
    color: var(--text-secondary);
    font-size: 1.125rem;
    line-height: 1.6;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
  }

  .hero-image {
    position: relative;
  }

  .feature-image {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transform: perspective(1000px) rotateY(-5deg);
    transition: transform 0.3s ease;
  }

  .feature-image:hover {
    transform: perspective(1000px) rotateY(-2deg) translateY(-5px);
  }

  :global(.button) {
    display: inline-block;
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  :global(.button:hover) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  :global(.button.primary) {
    background-color: var(--primary);
    color: white;
    font-weight: 600;
  }

  :global(.button.primary:hover) {
    background-color: var(--primary-dark);
  }

  :global(.button.secondary) {
    background-color: var(--bg-card);
    color: var(--text-primary);
  }

  :global(.button.secondary:hover) {
    background-color: var(--gray-200);
  }

  /* Dark mode adjustments */
  :global([data-theme="dark"]) .hero {
    background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%);
  }

  :global([data-theme="dark"]) .hero-background {
    opacity: 0.05;
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }

    .hero-content {
      text-align: center;
    }

    .description {
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      justify-content: center;
    }

    .feature-image {
      transform: none;
      max-width: 600px;
      margin: 0 auto;
    }

    .feature-image:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 10rem 0 4rem;
    }

    .cta-buttons {
      flex-direction: column;
      gap: 1rem;
    }

    :global(.button) {
      width: 100%;
      text-align: center;
    }
  }
</style>
