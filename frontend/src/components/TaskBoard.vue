<template>
    <div class="d-flex justify-content-between gap-5 pt-5">
        <TaskGroup status="open" :tasks="filteredTasks('open')" />
        <TaskGroup status="testing" :tasks="filteredTasks('testing')" />
        <TaskGroup status="done" :tasks="filteredTasks('done')" />
    </div>
</template>

<script>
import TaskGroup from '@/components/TaskGroup.vue';

export default {
  components: {
    TaskGroup,
  },
  props: {
    tasks: Array,
  },
  methods: {
    filteredTasks(status) {
      return this.tasks.filter(task => task.status === status);
    },
  },
};
</script>
