<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    computed: {
        contentPreview() {
            if (this.project.content && this.project.content.length > 100) {
                return this.project.content.substring(0, 100) + "...";
            } else {
                return this.project.content
            }
        }
    }
}
</script>

<template>
    <div class="card text-center">
        <h4>{{ project.title }}</h4>
        <p>{{ contentPreview }}</p>
        <h5 v-if="project.type">{{ project.type.name }}</h5>
        <span v-else>Nessuna tipologia</span>
        <h6 v-for="element in project.technologies">{{ element.name }}</h6>
    </div>
</template>



<style scoped lang="scss">
.card {
    height: 300px;
    margin-bottom: 2rem;
}
</style>