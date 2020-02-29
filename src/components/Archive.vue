<template>
  <div>
    <h3>Архивные задачи</h3>
    <ul>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        :onlyArchive="true"
      ></Task>
    </ul>
  </div>
</template>


<script>
import Task from "@/components/Task.vue";

export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  components: {
    Task
  }
};
</script>

<style scoped>
h3 {
    margin: 0.5rem 4rem;
}
</style>