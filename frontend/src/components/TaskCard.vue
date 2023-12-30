<template>
    <div class="card border-1 rounded shadow" style="width: 18rem;">
        <div class="card-body p-3">
            <h5>{{ task.title }}</h5>
            <p>{{ task.description }}</p>
            <span class="badge badge-pill bg-primary">{{ task.status }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: Object,
  },
};
</script>