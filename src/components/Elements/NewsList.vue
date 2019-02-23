<template>
    <div>
        <v-layout row wrap v-for="news in newsArray">
            <news-card :news="news"></news-card>
        </v-layout>
    </div>
</template>

<script>
    import NewsCard from './NewsCard';
    export default {
        name: 'NewsList',
        props: ['newsArray'],
        components: {
            NewsCard,
        },
    };
</script>

<style scoped>

</style>
