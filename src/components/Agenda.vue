<template>
    <div class="bg">
        <lecture-list :lecture-array="lectures"></lecture-list>
    </div>
</template>

<script>
    import {LectureService} from "../services/LectureService";
    import LectureList from "./Elements/LectureList";
    import Logo from "./Elements/Logo";

    export default {
        name: "Agenda",
        components: {
            LectureList, Logo
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
