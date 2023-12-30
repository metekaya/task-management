<template>
  <HomePage :msg="msg" />
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Task Management App',
    };
  },
  components: {
    HomePage,
  },
};
</script>
