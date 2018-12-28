<template>
    <lecture-list :lecture-array="lectures"></lecture-list>
</template>

<script>
    import {LectureService} from "../services/LectureService";
    import LectureList from "./Elements/LectureList"
    export default {
        name: "Agenda",
        components: {
            LectureList
        },
        data(){
            return {
                lectures: [],
                newses: [],
            };
        },
        created()
        {
            this.getLectures();
        },
        methods:{
            getLectures(){
                const lectureService = new LectureService();
                lectureService.getLectures().then((res)=>{
                    console.log(res);
                    this.lectures = res;
                });
            }
        }
    }
</script>

<style scoped>

</style>
