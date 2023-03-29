<script>

import CardItem from "./CardItem.vue";

import { store } from "../store.js";

import axios from 'axios';


export default {

    name: "AppMain",

    data() {
        return {
            store,
            counter: 0,           

        }
    },

    created() {


        axios.get(this.store.APIcall).then((res) => {
            // console.log(res.data.data[0].card_images[0].image_url);
            console.log(res.data.data);

            this.store.cards = res.data.data;

        })
    },
    

    components: {
        CardItem,
    },





}


</script>

<template>
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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        object-fit: contain;
    }
}
.main-container {
    @include mainContainer();
    background-color: white;

}

</style>