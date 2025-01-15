<section class="for-who">
  <div class="container">
    <h2>Perfect For</h2>
    <div class="personas">
      <div class="persona">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h3>Freelancers</h3>
        <p>Turn client commitments into completed projects with confidence</p>
      </div>
      <div class="persona">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
        </div>
        <h3>Students</h3>
        <p>Transform last-minute rushes into ahead-of-schedule submissions</p>
      </div>
      <div class="persona">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        <h3>Creators</h3>
        <p>Bring your creative visions to life, one task at a time</p>
      </div>
      <div class="persona">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v4"/>
            <path d="M12 18v4"/>
            <path d="m4.93 4.93 2.83 2.83"/>
            <path d="m16.24 16.24 2.83 2.83"/>
            <path d="M2 12h4"/>
            <path d="M18 12h4"/>
            <path d="m16.24 7.76 2.83-2.83"/>
            <path d="m4.93 19.07 2.83-2.83"/>
          </svg>
        </div>
        <h3>Everyday Achievers</h3>
        <p>Turn your daily goals and personal passions into consistent progress</p>
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

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: var(--bg-card);
    border-radius: 12px;
    margin: 0 auto 1.5rem;
    color: var(--primary);
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
