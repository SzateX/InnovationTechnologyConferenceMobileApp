<template>
    <div>
        <logo></logo>
        <h3>Nadchodzące Prelekcje</h3>
        <lecture-list :lecture-array="lectures"></lecture-list>
        <router-link tag="h3" :to="{name: 'agenda'}" class="text-xs-right">Więcej &#9654;</router-link>
        <h3>Aktualności</h3>
        <news-list :news-array="newses"></news-list>
        <router-link tag="h3" :to="{name: 'blog'}" class="text-xs-right">Więcej &#9654;</router-link>
    </div>
</template>

<script>
    import {LectureService} from '../services/LectureService';
    import {NewsService} from "../services/NewsService";
    import LectureList from "./Elements/LectureList";
    import Logo from "./Elements/Logo"
    import NewsList from "./Elements/NewsList"
    export default {
        name: "Home",
        components: {
          LectureList, Logo, NewsList
        },
        data(){
            return {
                lectures: [],
                newses: [],
            };
        },
        created()
        {
            console.log("HOME");
            this.getLectures();
            this.getNewses();
        },
        methods:
            {
                getLectures(){
                    const lectureService = new LectureService();
                    lectureService.getLecturesAfterDateHomePage(new Date()).then((res)=>{
                        console.log(res);
                        this.lectures = res;
                    });
                },
                getNewses(){
                    const newsService = new NewsService();
                    newsService.getNewsesForHomePage(new Date()).then((res)=>{
                        console.log(res);
                        this.newses = res;
                    });
                }
            }
    }
</script>

<style scoped>

</style>
