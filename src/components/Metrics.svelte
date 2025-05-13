<script lang="ts">
  import { onMount } from "svelte";

  let totalTasks = 0;
  let activeStakes = 0;
  let percentageCompletion = 0;
  let loading = true;

  async function fetchStats() {
    console.log("Fetching stats...");
    try {
      // Add a small delay to ensure the component is fully mounted
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const response = await fetch("https://api.taskratchet.com/api2/stats", {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log("Response:", response);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Data:", data);
      
      totalTasks = data.totalTasks;
      activeStakes = data.activeStakes;
      percentageCompletion = data.percentageCompletion;
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    console.log("Metrics component mounted");
    fetchStats();
  });
</script>

<section class="metrics">
  <div class="container">
    <div class="metrics-grid">
      <div class="metric">
        <span class="metric-number">{loading ? "..." : totalTasks.toLocaleString()}</span>
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
        <span class="metric-number">{loading ? "..." : `$${activeStakes.toLocaleString()}`}</span>
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
          >{loading ? "..." : `${(percentageCompletion * 100).toFixed(2)}%`}</span
        >
        <span class="metric-label">Completion Rate</span>
        <div class="metric-tooltip">
          <div class="metric-tooltip-arrow"></div>
          <div class="metric-tooltip-content">
            Percentage of tasks successfully completed on time by our users.
            {loading ? "..." : `${(percentageCompletion * 100).toFixed(2)}%`} of tasks created by our
            users resulted in them successfully meeting their goals.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .metrics {
    padding: 2.5rem 0;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    margin-top: -1rem;
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

  .metrics > .container {
    position: relative;
    z-index: 2;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .metric {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    margin: 0 auto;
    justify-self: center;
  }

  .metric:nth-child(1) {
    z-index: 30;
  }
  .metric:nth-child(2) {
    z-index: 20;
  }
  .metric:nth-child(3) {
    z-index: 10;
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

  .metric-tooltip {
    display: none;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-card);
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 300px;
    color: var(--text-primary);
    font-size: 0.875rem;
    z-index: 10;
  }

  .metric:hover .metric-tooltip {
    display: block;
  }

  .metric-tooltip-arrow {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid var(--bg-card);
  }

  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
