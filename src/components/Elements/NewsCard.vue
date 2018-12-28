<template>
    <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text bottom-margin">
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
        props: ["news"]
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
