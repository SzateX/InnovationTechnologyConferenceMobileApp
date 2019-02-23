<template>
    <div>
    <div v-for='s in statuses'>
        <partner-list :partner-status='s.name' :partners='s.companies'></partner-list>
    </div>
    </div>
</template>

<script>
    import PartnerList from './Elements/PartnerList';
    import {PartnerStatusService} from '../services/PartnerStatusService';
    export default {
        name: 'Partners',
        components: {PartnerList},
        created() {
            this.getPartners();
        },
        data() {
            return {
                statuses: [],
            };
        },
        methods: {
            getPartners() {
                const partnerStatusService = new PartnerStatusService();
                partnerStatusService.getStatuses().then((res) => {
                    console.log(res);
                    this.statuses = res;
                });
            },
        },
    };

</script>

<style scoped>

</style>
