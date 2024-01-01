<template>
  <div class="card border-1 rounded shadow" style="width: 24rem; height: 1000px; overflow-y: auto;">
    <div class="card-header sticky-top bg-white h3">
      {{ status.charAt(0).toUpperCase() + status.slice(1) }} Tasks
    </div>
    <div class="card-body p-3">
      <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue';

export default {
  components: {
    TaskCard,
  },
  props: {
    status: String,
    tasks: Array,
  },
};
</script>