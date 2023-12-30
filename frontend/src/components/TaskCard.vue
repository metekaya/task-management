<template>
    <div class="card border-1 rounded shadow mt-2">
        <div class="card-body">
            <h5>{{ task.title }}</h5>
            <p>{{ task.description }}</p>
            <span :class="badgeClass">{{ task.status }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskCard',
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
};
</script>