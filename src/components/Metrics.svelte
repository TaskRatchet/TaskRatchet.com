<script lang="ts">
  export let totalTasks: number;
  export let activeStakes: number;
  export let percentageCompletion: number;
</script>

<section class="metrics">
  <div class="container">
    <div class="metrics-grid">
      <div class="metric">
        <span class="metric-number">{totalTasks.toLocaleString()}</span>
        <span class="metric-label">Tasks Created</span>
        <div class="metric-tooltip">
          <div class="metric-tooltip-arrow"></div>
          <div class="metric-tooltip-content">
            Total number of tasks users have created on TaskRatchet over the
            lifespan of the tool.
          </div>
        </div>
      </div>
      <div class="metric">
        <span class="metric-number">${activeStakes.toLocaleString()}</span>
        <span class="metric-label">In Active Stakes</span>
        <div class="metric-tooltip">
          <div class="metric-tooltip-arrow"></div>
          <div class="metric-tooltip-content">
            Total amount of money currently staked on active tasks.
          </div>
        </div>
      </div>
      <div class="metric">
        <span class="metric-number"
          >{(percentageCompletion * 100).toFixed(2)}%</span
        >
        <span class="metric-label">Completion Rate</span>
        <div class="metric-tooltip">
          <div class="metric-tooltip-arrow"></div>
          <div class="metric-tooltip-content">
            Percentage of tasks successfully completed on time by our users.
            {(percentageCompletion * 100).toFixed(2)}% of tasks created by
            our users resulted in them successfully meeting their goals.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .metrics {
    padding: 3rem 0;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    margin-top: -2rem;
    color: white;
    position: relative;
    overflow: visible;
    z-index: 1;
  }

  .metrics::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.1),
      transparent 70%
    );
    z-index: 1;
  }

  .metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .metrics > .container {
    position: relative;
    z-index: 2;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .metric-number {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .metric-label {
    font-size: 1.25rem;
    opacity: 0.9;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
