<template>
    <v-layout row wrap fill-height>
        <v-flex xs12 fill-height>
            <div style="height: 100%; width: 100%">
                <l-map style="height: 100%; width: 100%" :zoom="zoom" :center="center" :options="{zoomControl: false}">
                    <l-tile-layer :url="url"></l-tile-layer>
                </l-map>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
    import * as L from "leaflet";
    export default {
        name: "Place",
        components: { LMap, LTileLayer, LMarker },
        data() {
            return {
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 8,
                center: [47.313220, -1.319482]
            };
        },
    }
</script>

<style scoped>

</style>
