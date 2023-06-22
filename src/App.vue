<script>
import About from './pages/About.vue';
import AppHeader from './components/AppHeader.vue';
import Home from './pages/Home.vue';
import ProjectsList from './pages/ProjectsList.vue';

export default {
  components: { Home, About, ProjectsList, AppHeader }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <About />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
