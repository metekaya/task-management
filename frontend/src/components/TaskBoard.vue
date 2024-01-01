<template>
  <div class="d-flex align-items-center justify-content-center flex-column gap-5 mt-5">
    <div class="d-flex justify-content-between w-100">
      <h1>Task Management App</h1>
      <div class="d-flex">
        <AddTaskModal :task="newTask" @add-task="addTask" />
      </div>
    </div>
    <div class="d-flex gap-5">
      <TaskGroup status="open" :tasks="filteredTasks('open')" />
      <TaskGroup status="testing" :tasks="filteredTasks('testing')" />
      <TaskGroup status="done" :tasks="filteredTasks('done')" />
    </div>
  </div>
</template>

<script>
import TaskGroup from '@/components/TaskGroup.vue';
import AddTaskModal from '@/components/AddTaskModal.vue';
import axios from 'axios';

export default {
  components: {
    TaskGroup,
    AddTaskModal
},
  data() {
    return {
      tasks: [],
      newTask: {
        title: "",
        description: "",
        status: "open",
      },
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        this.tasks = response.data.tasks;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask(newTask) {
      try {
        await axios.post('http://localhost:5000/tasks', newTask);
        this.fetchTasks(); 
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    filteredTasks(status) {
      return this.tasks.filter((task) => task.status === status);
    },
  },
};
</script>