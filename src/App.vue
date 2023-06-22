<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import Pagination from './components/Pagination.vue';

export default {
  components: {
    ProjectCard,
    Pagination
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalProjects: 0
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects(pageNumber = 1) {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: pageNumber
        }
      }).then(resp => {
        console.log(resp);
        this.projects = resp.data.result.data;
        this.currentPage = resp.data.result.current_page;
        this.lastPage = resp.data.result.last_page;
        this.totalProjects = resp.data.result.total;
      })
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 class="text-center">BoolFolio</h1>
    <div class="text-end my-3">
      Trovati {{ totalProjects }} progetti
    </div>
    <div class="row row-cols-4">
      <div class="col" v-for="(element, index) in projects" :key="index">
        <ProjectCard :project="element" />
      </div>
    </div>

    <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePage="(newPageNum) => {
      getProjects(newPageNum)
    }" />

  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
