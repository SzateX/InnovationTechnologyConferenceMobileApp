<template>
    <news-list :news-array="newses"></news-list>
</template>

<script>
    import NewsList from './Elements/NewsList';
    import {NewsService} from "../services/NewsService";
    export default {
        name: "Blog",
        components: {
            NewsList
        },
        data(){
            return {
                newses: [],
            };
        },
        created()
        {
            this.getNewses();
        },
        methods:{
            getNewses(){
                const newsService = new NewsService();
                newsService.getNewses().then((res)=>{
                    console.log(res);
                    this.newses = res;
                });
            }
        }
    }
</script>

<style scoped>

</style>
