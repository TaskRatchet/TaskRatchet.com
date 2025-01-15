<section class="features">
  <div class="container">
    <h2>Features</h2>
    <div class="features-grid">
      <div class="feature">
        <h2>Deadlines with Consequences</h2>
        <p>
          Turn your goals into achievements with TaskRatchet's unique approach.
          Set meaningful deadlines, choose your own motivation level, and watch
          as your productivity soars. We're here to help you follow through on
          what matters most to you.
        </p>
      </div>

      <div class="feature">
        <h2>Stake Real Money</h2>
        <p>
          You're in control - choose a stake that feels right for each task.
          Life happens, and we understand that. If you've completed your task
          but forgot to mark it, no worries! Just let us know, and we'll make
          sure you're not charged. Your success is our priority.
        </p>
      </div>

      <div class="feature">
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
    font-size: 2.25rem;
    margin: 0 0 2.5rem;
    color: var(--text-primary);
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

  .feature h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  .feature p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
</style>
