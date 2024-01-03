<template>
  <div class="d-flex align-items-center justify-content-center flex-column gap-5 mt-5">
    <div class="d-flex flex-column flex-lg-row justify-content-between w-100">
      <h1>Task Management App</h1>
      <div class="d-flex mt-3">
        <AddTaskModal :task="newTask" @add-task="addTask" />
      </div>
    </div>
    <div class="d-flex flex-column flex-lg-row gap-5">
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
import { fetchTasks, addTask, moveToNextStatus, deleteTask } from '@/services/taskService';

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
      this.tasks = await fetchTasks();
    },
    async addTask(newTask) {
      await addTask(newTask);
      this.fetchTasks();
    },
    async moveToNextStatus(task) {
      const nextStatus = this.getNextStatus(task.status);
      await moveToNextStatus(task, nextStatus);
      this.fetchTasks();
    },
    async deleteTask(task) {
      await deleteTask(task.id);
      this.fetchTasks();
    },
    getNextStatus(currentStatus) {
      const statusMap = {
        'open': 'testing',
        'testing': 'done',
      };
      return statusMap[currentStatus] || currentStatus; 
    },
    filteredTasks(status) {
      return this.tasks ? this.tasks.filter((task) => task.status === status) : [];
    }
  },
};
</script>