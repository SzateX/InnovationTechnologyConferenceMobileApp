<template>
    <div>
        <v-subheader><h3>{{partnerStatus}}</h3></v-subheader>
    <v-container fluid grid-list-sm>
        <v-layout row wrap>
            <v-flex v-for="partner in partners" xs4>
                <div v-if="partner.picture">
                    <img :src="`http://int.pti.org.pl${partner.picture.source}`" class="image" alt="lorem" width="100%" height="100%">
                </div>
                <div v-else style="text-align: center">
                    <span>{{partner.name}}</span>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
    export default {
        name: 'PartnerList',
        props: ['partnerStatus', 'partners'],
    };
</script>

<style scoped>

</style>
