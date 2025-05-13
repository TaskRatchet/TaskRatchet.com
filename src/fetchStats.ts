export type Stats = {
  totalTasks: number;
  activeStakes: number;
  percentageCompletion: number;
};

export async function fetchStats(): Promise<Stats> {
  try {
    const response = await fetch("https://api.taskratchet.com/api2/stats");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    throw error;
  }
}
