<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <TaskBoard />
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
};
</script>