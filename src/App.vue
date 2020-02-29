<template>
  <div id="app">
    <div class="wrapper-menu">
      <nav>
        <router-link to="/todo/">Главная</router-link>
        <router-link to="/todo/archive">Архив</router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

// <script>
// // import HelloWorld from './components/HelloWorld.vue'
// import TaskList from './components/TaskList.vue'

// export default {
//   name: 'App',
//   components: {
//     TaskList
//   }
// }
//
</script>

<style>

.wrapper-menu {
  margin: 2rem 2rem;
  padding: 1rem 1rem;
}

nav {
  position: absolute;
  //top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

a {
  position: relative;
  display: block;
  margin: 0 10px;
  padding: 5px 10px;
  color: #aaa;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  overflow: hidden;
}

a::before {
  content: "";
  position: absolute;
  top: calc(50% - 2px);
  left: -100%;
  width: 100%;
  height: 4px;
  background: #2196f3;
  transition: 0.5s;
}

a:hover {
  color: #fff;
}

a:hover::before {
  animation: animate 0.5s linear forwards;
}

@keyframes animate {
  0% {
    top: calc(50% - 2px);
    left: -100%;
    height: 4px;
    z-index: 1;
  }
  50% {
    top: calc(50% - 2px);
    left: 0;
    height: 4px;
    z-index: 1;
  }
  100% {
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }
}
</style>
