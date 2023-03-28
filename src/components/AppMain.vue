<script>

import { store } from "../store.js";

import axios from 'axios';

import CardItem from "./CardItem.vue";


export default {

    name: "AppMain",

    data() {
        return {


            store,

        }
    },

    components: {
        CardItem,
    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
            // console.log(res.data.data[0].card_images[0].image_url);
            console.log(res.data.data);

            this.store.cards = res.data.data;

        })
    },



}


</script>

<template>
    <div id="main-container">
        <CardItem v-for="card in store.cards" :card="card"></CardItem>

    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;


#main-container {
    @include mainContainer();

}

</style>