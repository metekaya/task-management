<template>
    <div class="d-flex justify-content-between gap-5 pt-5">
        <TaskGroup status="open" :tasks="filteredTasks('open')" />
        <TaskGroup status="testing" :tasks="filteredTasks('testing')" />
        <TaskGroup status="done" :tasks="filteredTasks('done')" />
    </div>
</template>

<script>
import TaskGroup from '@/components/TaskGroup.vue';
import axios from 'axios';

export default {
  components: {
    TaskGroup,
  },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        this.tasks = response.data.tasks;
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  },
  methods: {
    filteredTasks(status) {
      return this.tasks.filter(task => task.status === status);
    },
  },
};
</script>