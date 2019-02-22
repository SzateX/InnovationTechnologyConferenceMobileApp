<template>
    <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text bottom-margin" :to="{name:'news_detail', params: { id: news.id }}">
            <div v-if="imgUrl !== undefined">
            <v-img
                    :src="imgUrl"
                    aspect-ratio="2"
            ></v-img>
            </div>
            <v-card-title primary-title class="new-padding">
                <div style="width: 100%;">
                    <div style="width: 80%; float: left;">
                        <h3 class="text-truncate">{{news.title}}</h3>
                    </div>
                    <div style="width: 20%; float: left">
                        <h3 class="text-xs-right"><v-icon color="white">mdi-greater-than</v-icon></h3>
                    </div>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "NewsCard",
        props: ["news"],
        computed: {
            imgUrl: function() {
                if(this.news.picture)
                    return 'http://192.168.1.4:5000' + this.news.picture.source;
                return undefined;
            }
        }
    }
</script>

<style scoped>
    .new-padding
    {
        padding: 16px;
    }
    .bottom-margin
    {
        margin-bottom: 10px;
    }
</style>
