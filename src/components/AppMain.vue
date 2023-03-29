<script>

import CardItem from "./CardItem.vue";
import CardSearch from './CardSearch.vue';


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

    
    methods: {
        search() {
            let apiNewString = this.store.APIcall

            if (this.store.cardName != "") {

                apiNewString += "?name=${this.store.cardName}";

            }




            console.log(apiNewString);

            axios.get(apiNewString).then((res) => {

                console.log(res.data.data);
                this.store.cards = res.data.data;

            });
        },
    },
    

    components: {
        CardItem,
        CardSearch

    },





}


</script>

<template>
    <div v-if="store.cards.length < 50" class="loading-container">
        <img src="/img/giphy.webp" alt="">
    </div>

    
    <div v-else>
        <CardSearch></CardSearch>
        <div class="main-container">
            <CardItem v-for="card in store.cards" :card="card"></CardItem>

        </div>

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