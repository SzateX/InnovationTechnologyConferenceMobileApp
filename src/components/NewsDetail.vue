<template>
    <div>
        <div v-if="news.picture !== undefined">
        <v-img
                :src="`http://192.168.1.4:5000${news.picture.source}`"
        ></v-img>
        </div>
        <h1 v-if="news.title !== undefined" style="text-align: center">
            {{news.title}}
        </h1>
        <vue-markdown :source="news.content"></vue-markdown>
    </div>
</template>

<script>
    import {NewsService} from "../services/NewsService";
    import VueMarkdown from 'vue-markdown';

    export default {
        name: "NewsDetail",
        props: ["id"],
        components: {
            VueMarkdown
        },
        data(){
            return {
                news: {content: ''},
            };
        },
        created()
        {
            this.getNews();
        },
        methods:{
            getNews(){
                const newsService = new NewsService();
                console.log(this.id);
                newsService.getNews(this.id).then((res)=>{
                    console.log(res);
                    this.news = res;
                });
            }
        }
    }
</script>

<style scoped>

</style>
