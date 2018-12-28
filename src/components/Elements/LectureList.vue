<template>
    <div>
        <v-layout row wrap v-for="lecture in lectureArray">
            <lecture-card :lecture="lecture"></lecture-card>
        </v-layout>
    </div>
</template>

<script>
    import LectureCard from './LectureCard';
    export default {
        name: "LectureList",
        props: ['lectureArray'],
        components: {
            LectureCard
        }
    }
</script>

<style scoped>

</style>
