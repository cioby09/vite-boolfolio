<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="card text-center">
        <h4>{{ project.title }}</h4>
        <p>{{ project.content }}</p>
    </div>
</template>



<style scoped lang="scss">
.card {
    height: 500px;
}
</style>