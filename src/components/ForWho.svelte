<section class="for-who">
  <div class="container">
    <h2>Perfect For</h2>
    <div class="personas">
      <div class="persona">
        <h3>Freelancers</h3>
        <p>Turn client commitments into completed projects with confidence</p>
      </div>
      <div class="persona">
        <h3>Students</h3>
        <p>Transform last-minute rushes into ahead-of-schedule submissions</p>
      </div>
      <div class="persona">
        <h3>Creators</h3>
        <p>Bring your creative visions to life, one task at a time</p>
      </div>
      <div class="persona">
        <h3>Everyday Achievers</h3>
        <p>
          Turn your daily goals and personal passions into consistent progress
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .for-who {
    padding: 2.5rem 0 4rem;
    background-color: var(--bg-card);
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
    margin: 0 0 2.5rem;
    color: var(--text-primary);
  }

  .personas {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .persona {
    background: var(--bg-main);
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .persona:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .personas {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
</style>
