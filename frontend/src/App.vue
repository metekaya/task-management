<template>
  <div id="app">
    <TaskCard :task="sampleTask" />
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
      sampleTask: {
        id: 1,
        title: 'Sample Task',
        description: 'This is a sample task description.',
        status: 'open',
      },
    };
  },
};
</script>