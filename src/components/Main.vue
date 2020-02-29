<template>
    <div>
        <h3>Активные задачи</h3>
        <TaskList />
        <CreateTask />
    </div>
</template>

<script>

import TaskList from '@/components/TaskList.vue'
import CreateTask from '@/components/CreateTask.vue'

export default {
    components: {
        TaskList,
        CreateTask
    }
}
</script>

<style scoped>
h3 {
    margin: 0.5rem 4rem;
}
</style>