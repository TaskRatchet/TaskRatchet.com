<section class="features">
  <div class="container">
    <h2>Features</h2>
    <div class="features-grid">
      <div class="feature">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <h2>Deadlines with Consequences</h2>
        <p>
          Turn your goals into achievements with TaskRatchet's unique approach.
          Set meaningful deadlines, choose your own motivation level, and watch
          as your productivity soars. We're here to help you follow through on
          what matters most to you.
        </p>
      </div>

      <div class="feature">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <h2>Stake Real Money</h2>
        <p>
          You're in control - choose a stake that feels right for each task.
          Life happens, and we understand that. If you've completed your task
          but forgot to mark it, no worries! Just let us know, and we'll make
          sure you're not charged. Your success is our priority.
        </p>
      </div>

      <div class="feature">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </div>
        <h2>Integrates with Beeminder</h2>
        <p>
          Love Beeminder? So do we! Connect your account to create a seamless
          productivity ecosystem. We'll automatically sync your progress,
          helping you build lasting habits while staying accountable.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .features {
    padding: 2.5rem 0 4rem;
    background-color: var(--bg-main);
  }

  h2 {
    text-align: center;
    font-size: var(--text-3xl);
    margin: 0 0 2.5rem;
    color: var(--text-primary);
    letter-spacing: var(--tracking-tight);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .feature {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 1rem;
    transition: transform 0.2s ease;
  }

  .feature:hover {
    transform: translateY(-4px);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: var(--bg-main);
    border-radius: 12px;
    margin-bottom: 1.5rem;
    color: var(--primary);
  }

  .feature h2 {
    font-size: var(--text-2xl);
    margin-bottom: 1rem;
    text-align: left;
    line-height: var(--leading-snug);
  }

  .feature p {
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
    font-size: var(--text-base);
  }
</style>
