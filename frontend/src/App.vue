<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <div class="d-flex justify-content-between gap-3 pt-5">
        <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue';

export default {
  name: 'App',
  components: {
    TaskCard,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'open' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'testing' },
        { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'done' },
        { id: 4, title: 'Task 4', description: 'Description for Task 4', status: 'unknown' },
      ],
    };
  },
};
</script>