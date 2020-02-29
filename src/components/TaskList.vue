<template>
  <div>
    <ul>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :index="index"
        :onlyArchive="false"
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