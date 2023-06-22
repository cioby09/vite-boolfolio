<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
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
    <div class="text-end">
      Trovati {{ totalProjects }} progetti
    </div>
    <div class="row row-cols-4">
      <div class="col" v-for="(element, index) in projects" :key="index">
        <ProjectCard :project="element" />
      </div>
    </div>
    <nav v-if="lastPage" aria-label="Page navigation example" class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }"><a @click.prevent="getProjects(currentPage - 1)"
            class="page-link" href="#">Previous</a></li>
        <li v-for="pageNum in lastPage" @click.prevent="getProjects(pageNum)" class="page-item"
          :class="{ 'active': pageNum === currentPage }"><a class="page-link" href="#">{{ pageNum }}</a></li>
        <li class="page-item" :class="{ 'disabled': currentPage === lastPage }"><a
            @click.prevent="getProjects(currentPage + 1)" class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">@use "./styles/general.scss" as *;</style>
