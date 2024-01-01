<template>
  <div class="card border-1 rounded shadow mt-2">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <p>{{ task.description }}</p>
      <span :class="badgeClass">{{ task.status }}</span>
      <div class="border-top mt-3 d-flex justify-content-between">
        <button @click="deleteTask" class="btn btn-sm btn-danger mt-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  computed: {
    badgeClass() {
      return {
        'badge badge-pill': true,
        'badge badge-pill bg-primary': this.task.status === 'open',
        'badge badge-pill bg-warning': this.task.status === 'testing',
        'badge badge-pill bg-success': this.task.status === 'done',
      };
    },
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task', this.task);
    }
  }
};
</script>