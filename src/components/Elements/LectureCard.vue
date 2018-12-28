<template>
    <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text bottom-margin">
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
                    <a class="white--text">{{beginTimeFormatted}}</a>
                </div>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "LectureCard",
        props: ['lecture'],
        computed: {
            beginTimeFormatted: function() {
                const dateTime = new Date(this.lecture.beginTime);
                return dateTime.toLocaleTimeString();
            }
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
    .bottom-margin
    {
        margin-bottom: 10px;
    }
</style>
