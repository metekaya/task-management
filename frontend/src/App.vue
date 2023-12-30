<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <TaskBoard :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import TaskBoard from '@/components/TaskBoard.vue';

export default {
  name: 'App',
  components: {
    TaskBoard,
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