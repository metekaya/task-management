<template>
  <div class="card border-1 rounded shadow mt-2">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <p>{{ task.description }}</p>
      <span :class="badgeClass">{{ task.status }}</span>
      <div class="border-top mt-3 d-flex justify-content-between">
        <button @click="deleteTask" class="btn btn-sm btn-danger mt-2" :disabled="isDeleteLoading">
          <span v-if="!isDeleteLoading">Delete</span>
          <span v-else>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Deleting...
          </span>
        </button>
        <button v-if="task.status !== 'done'" @click="moveToNextStatus" class="btn btn-sm btn-secondary mt-2"
          :disabled="isMoveLoading">
          <span v-if="!isMoveLoading">{{ getButtonText() }}</span>
          <span v-else>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Moving...
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      isDeleteLoading: false,
      isMoveLoading: false,
    };
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
      if (this.isDeleteLoading) {
        return;
      }
      this.isDeleteLoading = true;
      this.$emit('delete-task', this.task);
    },
    moveToNextStatus() {
      if (this.isMoveLoading) {
        return;
      }
      this.isMoveLoading = true;
      this.$emit('move-to-next-status', this.task);
    },
    getButtonText() {
      if (this.task.status === 'open') {
        return 'Move to Testing';
      } else if (this.task.status === 'testing') {
        return 'Move to Done';
      } else {
        return ''; 
      }
    },
  }
};
</script>