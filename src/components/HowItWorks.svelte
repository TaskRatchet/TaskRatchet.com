<section id="how-it-works" class="how-it-works">
  <div class="container">
    <h2>A Simple Process</h2>
    <div class="steps">
      <div class="step">
        <span class="step-number">1</span>
        <h3>Create a Task</h3>
        <p>Add your task. Set a deadline, and choose your stakes.</p>
      </div>
      <div class="step">
        <span class="step-number">2</span>
        <h3>Get Reminders</h3>
        <p>
          Stay on track with timely reminders as your deadline approaches.
        </p>
      </div>
      <div class="step">
        <span class="step-number">3</span>
        <h3>Complete or Pay Up</h3>
        <p>Finish your task on time, or face the monetary consequence.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .how-it-works {
    padding: 2.5rem 0 4rem;
    background-color: var(--bg-card);
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
    margin: 1.5rem 0 2.5rem;
    color: var(--text-primary);
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .step {
    text-align: center;
    padding: 2rem;
    background: var(--bg-main);
    border-radius: 1rem;
    position: relative;
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--primary);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    margin: 0 auto 1.5rem;
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
</style>
