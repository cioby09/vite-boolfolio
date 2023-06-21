<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
        console.log(resp);
        this.projects = resp.data.result;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">BoolFolio</h1>
    <div class="row row-cols-4">
      <div class="col" v-for="(element, index) in projects" :key="index">
        <ProjectCard :project="element" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
