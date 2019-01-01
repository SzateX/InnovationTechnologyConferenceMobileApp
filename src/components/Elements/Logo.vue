<template>
    <v-layout
            text-xs-center
            wrap
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
</style>
