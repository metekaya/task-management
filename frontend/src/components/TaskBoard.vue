<template>
  <div class="d-flex align-items-center justify-content-center flex-column gap-5 mt-5">
    <div class="d-flex justify-content-between w-100">
      <h1>Task Management App</h1>
      <div class="d-flex">
        <AddTaskModal :task="newTask" @add-task="addTask" />
      </div>
    </div>
    <div class="d-flex gap-5">
      <TaskGroup status="open" :tasks="filteredTasks('open')" @delete-task="deleteTask"
        @move-to-next-status="moveToNextStatus" />
      <TaskGroup status="testing" :tasks="filteredTasks('testing')" @delete-task="deleteTask"
        @move-to-next-status="moveToNextStatus" />
      <TaskGroup status="done" :tasks="filteredTasks('done')" @delete-task="deleteTask" />
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
    async moveToNextStatus(task) {
      try {
        const nextStatus = this.getNextStatus(task.status);
        await axios.put(`http://localhost:5000/tasks/${task.id}`, { status: nextStatus});
        this.fetchTasks();
      } catch (error) {
        console.error('Error moving task to the next status', error);
      }
    },
    getNextStatus(currentStatus) {
      const statusMap = {
        'open': 'testing',
        'testing': 'done',
      };
      return statusMap[currentStatus] || currentStatus; 
    },
    async deleteTask(task) {
      try {
        await axios.delete(`http://localhost:5000/tasks/${task.id}`);
        this.fetchTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    filteredTasks(status) {
      return this.tasks.filter((task) => task.status === status);
    },
  },
};
</script>