<script>
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import ProjectsList from './pages/ProjectsList.vue';

export default {
  components: { Home, About, ProjectsList }
}
</script>

<template>
  <router-view></router-view>
  <ProjectsList />
  <About />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
