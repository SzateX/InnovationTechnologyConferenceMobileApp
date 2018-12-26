<template>
    <div>
    <v-layout row wrap v-for="lecture in lectures">
        <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title class="new-padding">
                    <div style="width: 100%;">
                        <h3 class="text-truncate">{{lecture.title}}</h3>
                    </div>
                </v-card-title>
                <v-divider light></v-divider>
                <v-card-actions>
                    <div class="place-and-date">
                        <v-icon class="white--text">mdi-map-marker</v-icon>
                        <a class="white--text">{{lecture.place.buildingName}}{{lecture.place.roomName}}</a>
                    </div>
                    <div class="place-and-date">
                        <v-icon class="white--text">mdi-clock-outline</v-icon>
                        <a class="white--text">{{lecture.beginTime}}</a>
                    </div>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
    import {LectureService} from '../services/LectureService';
    import {Lecture} from "../entity/Lecture";

    export default {
        name: "Home",
        data(){
            return {
                lectures: [],
            };
        },
        created()
        {
            //this.getLectures();
        },
        methods:
            {
                //getLectures(){
                //    const lectureService = new LectureService();
                //    lectureService.getLecturesAfterDate(new Date()).then((res)=>this.lectures = res);
                //}
            }
    }
</script>

<style scoped>
    .place-and-date
    {
        padding: 0 16px;
        display: flex;
        align-content: center;
        align-items: center;
    }
    .elipsis
    {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .new-padding
    {
        padding: 16px 16px 8px;
    }

</style>
