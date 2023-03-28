<script>

import { store } from "../store.js";

import axios from 'axios';


export default {

    name: "AppMain",

    data() {
        return {


            store,

        }
    },

    components: {

    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
            console.log(res.data);
        })
    },



}


</script>

<template>
    <div>

    </div>
</template>

<style lang="scss" scoped>

</style>