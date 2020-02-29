<template>
  <li v-if="onlyArchive == task.TaskArchive">
    <input v-if="task.TaskCompleted" type="checkbox" v-on:change="CompleteTask" checked>
    <input v-else type="checkbox" v-on:change="CompleteTask">
    <div v-bind:class="{done:task.TaskCompleted}">{{ task.TaskName }}</div>
    <div v-bind:class="{done:task.TaskCompleted}">{{ new Date(task.TaskDate).toLocaleDateString() }}</div>
    <input v-if="task.TaskArchive" type="button" v-on:click="ChangeArchive" value="Разархивировать" />
    <input v-if="!task.TaskArchive" type="button" v-on:click="ChangeArchive" value="Архивировать" />
    <input type="button" value="Удалить" v-on:click="DeleteTask" />
  </li>
</template>

<script>
export default {
  props: ["task", "index", "onlyArchive"],
  methods: {
    ChangeArchive() {
      this.$store.dispatch("changeArchive", this.index);
    },
    DeleteTask() {
      this.$store.dispatch("deleteTask", this.index);
    },
    CompleteTask() {
        this.$store.dispatch("completeTask", this.index);
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 0.5rem;
}
.done {
  text-decoration: line-through;
}

</style>