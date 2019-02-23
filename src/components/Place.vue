<template>
    <v-layout row wrap fill-height>
        <v-flex xs12 fill-height>
            <div style='height: 100%; width: 100%'>
            <MglMap :accessToken='accessToken' :mapStyle.sync='mapStyle' zoom='15' :center='coordinates' >
                <MglMarker :coordinates='coordinates' color='blue'>
                    <MglPopup>
                        <div>
                            Politechnika Rzeszowska im. Ignacego Łukasiewicza<br>
                            Centrum Dydaktyczno-Konferencyjne i Biblioteczno-Administracyjne<br>
                            Aleja Powstańców Warszawy 12, 35-959 Rzeszów
                        </div>
                    </MglPopup>
                </MglMarker>
            </MglMap>
            </div>
        </v-flex>
    </v-layout>
    <!--<v-layout row wrap fill-height>
        <v-flex xs12 fill-height>
            <div style='height: 100%; width: 100%'>
                <l-map style='height: 100%; width: 100%' :zoom='zoom' :center='center' :options='{zoomControl: false}'>
                    <l-tile-layer :url='url'></l-tile-layer>
                </l-map>
            </div>
        </v-flex>
    </v-layout>-->
</template>

<script>
    import { MglMap, MglMarker, MglPopup } from 'vue-mapbox';

    export default {
        name: 'Place',
        components: {MglMap, MglMarker, MglPopup},
        data() {
            return {
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 8,
                center: [47.313220, -1.319482],
                accessToken: 'pk.eyJ1Ijoic3phdGV4IiwiYSI6ImNqczNzamxxMjA1aXU0NG82OTVnemV6bGIifQ.gisMr0AGROCjIEr556lmXA',
                mapStyle: 'mapbox://styles/mapbox/basic-v9', // your map style
                coordinates: [21.9888866, 50.0190668],
            };
        },
    };
</script>

<style scoped>

</style>
