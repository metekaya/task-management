<template>
  <b-modal ref="modal" id="modal-center" size="lg" centered title="Add New Task" hide-footer>
    <form @submit.prevent="addTask">
      <div class="mb-3">
        <label for="task-title" class="form-label">Title</label>
        <input type="text" class="form-control" id="task-title" v-model="editedTask.title"
          :class="{ 'is-invalid': !isValidTitle }" placeholder="Task Title" />
        <div class="invalid-feedback">Title is required.</div>
      </div>
      <div class="mb-3">
        <label for="task-description" class="form-label">Description</label>
        <textarea class="form-control" id="task-description" rows="10" v-model="editedTask.description"
          :class="{ 'is-invalid': !isValidDescription }" placeholder="Task Description"></textarea>
        <div class="invalid-feedback">Description is required.</div>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <button type="submit" class="btn btn-lg btn-primary">Save</button>
      </div>
    </form>
  </b-modal>
  <b-button v-b-modal.modal-center variant="primary">Create New Task</b-button>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      editedTask: { ...this.task }
    };
  },
  computed: {
    isValidTitle() {
       return this.editedTask && this.editedTask.title && this.editedTask.title.trim() !== "";
    },
    isValidDescription() {
       return this.editedTask && this.editedTask.description && this.editedTask.description.trim() !== "";
    },
  },
  methods: {
    addTask() {
      if (!this.editedTask.title.trim() || !this.editedTask.description.trim()){
        return;
      }  
      this.editedTask.status = "open";
      this.$emit('add-task', this.editedTask);
      
      this.$refs.modal.hide();
      this.editedTask = {
        title: "",
        description: "",
      };
    }
  }
};
</script>