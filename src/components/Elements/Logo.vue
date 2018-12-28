<template>
    <v-layout
            text-xs-center
            wrap
            class="int-background"
    >
        <v-flex xs12>
            <v-img
                    :src="require('../../assets/logo_for_web.png')"

                    class="my-3"
                    contain
                    height="200"
            ></v-img>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    .int-background{
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url("../../assets/bg.png") no-repeat left top;
        background-size: cover;
        margin-bottom: 15px;
    }
</style>
