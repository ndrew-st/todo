import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        changeArchive(state, index) {
            state.tasks[index].TaskArchive = !state.tasks[index].TaskArchive
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        completeTask(state, index) {
            state.tasks[index].TaskCompleted = !state.tasks[index].TaskCompleted
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        createTask({ commit }, task) {
            commit('createTask', task)
        },
        changeArchive({ commit }, index) {
            commit('changeArchive', index)
        },
        deleteTask({ commit }, index) {
            commit('deleteTask', index)
        },
        completeTask({ commit }, index) {
            commit('completeTask', index)
        }
    },
    getters: {
        tasks: s => s.tasks
    }
})