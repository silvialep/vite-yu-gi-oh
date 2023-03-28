<script>

import { store } from "../store.js";

import axios from 'axios';

import CardItem from "./CardItem.vue";


export default {

    name: "AppMain",

    data() {
        return {


            store,
            counter: 0,

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
    <!-- <button @click="countDown()">Premi</button> -->
    <div v-if="store.cards.length < 50" class="loading-container">
        <img src="/img/giphy.webp" alt="">
    </div>
    <div v-else class="main-container">
        <CardItem v-for="card in store.cards" :card="card"></CardItem>

    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;

.loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-container {
    @include mainContainer();

}

</style>