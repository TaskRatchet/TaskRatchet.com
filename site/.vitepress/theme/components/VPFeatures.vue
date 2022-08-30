<script setup lang="ts">
import { computed } from 'vue'
import VPFeature from './VPFeature.vue'
export interface Feature {
  icon?: string
  title: string
  details: string
  link?: string
}
const features: Feature[] = [
  {
    icon: "⚡️",
    title: "Deadlines with Consequences",
    details: "TaskRatchet is a todo list that charges you real money if you don't complete your tasks on time. Define your task, set your deadline, and choose your stakes. TaskRatchet will make sure you follow through."
  },
  {
    icon: "💰",
    title: "Stake Real Money",
    details: "You decide how much you stake for each task. TaskRatchet will charge you that amount if you miss your deadline. Completed the task but forgot to check it off? Reply to the charge notification and we'll cancel the charge for you."
  },
  {
    icon: "🐝",
    title: "Integrates with Beeminder",
    details: "Use Beeminder to commit to regularly creating and completing tasks. TaskRatchet will automatically send data to your Beeminder goal.",
    link: "https://www.beeminder.com/taskratchet"
  }
]
const grid = computed(() => {
  const length = features.length
  if (!length) {
    return
  } else if (length === 2) {
    return 'grid-2'
  } else if (length === 3) {
    return 'grid-3'
  } else if (length % 3 === 0) {
    return 'grid-6'
  } else if (length % 2 === 0) {
    return 'grid-4'
  }
})
</script>

<template>
  <div v-if="features" class="VPFeatures">
    <div class="container">
      <div class="items">
        <div v-for="feature in features" :key="feature.title" class="item" :class="[grid]">
          <VPFeature :icon="feature.icon" :title="feature.title" :details="feature.details" :link="feature.link" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {

  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {

  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>