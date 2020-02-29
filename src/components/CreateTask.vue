<template>
  <div>
    <input type="text" v-model="TaskName">
    <input type="button" value="Создать" v-on:click="createTask">
  </div>
</template>

<script>
export default {
  data: () => ({
    TaskName: "",
    TaskDate: null,
    TaskCompleted: false,
    TaskArchive: false
  }),
  methods: {
    createTask() {
      const Task = {
        TaskName: this.TaskName,
        TaskDate: Date.now(),
        TaskCompleted: false,
        TaskArchive: false
      };
      this.$store.dispatch('createTask', Task)
    }
  }
};
</script>

<style scoped>
div {
    margin: 0.5rem 4rem;
}
</style>