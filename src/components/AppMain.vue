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
            checker: true,
            isLoading: true,

        }
    },

    created() {


        axios.get(this.store.APIcall += "?num=150&offset=0").then((res) => {
            // console.log(res.data.data[0].card_images[0].image_url);

            this.store.cards = res.data.data;
            this.isLoading = false;


        })
    },

    
    methods: {
        search() {
            this.isLoading = true;

            let apiNewString = this.store.APIcall;

            if (this.store.cardName != "") {
                
                apiNewString += `&fname=${this.store.cardName}`;
                
            }
            
            // if(apiNewString += `&fname=${this.store.cardName}` == null) {
            //     this.checker = false;
            // }
            
            axios.get(apiNewString).then((res) => {
                
                this.store.cards = res.data.data;
                console.log(this.store.cards);
                this.isLoading = false;
                
            }).catch(() => {
                this.checker = false;
            });
            

            // if(this.store.cards.length == 0) {
            //     console.log('errore');
            // }
            
            this.checker = true;
            this.store.cardName = '';
        },
    },
    

    components: {
        CardItem,
        CardSearch

    },





}


</script>

<template>
    
    
    <div>
        <CardSearch @cardSearch="search()"></CardSearch>
        <div id="card-counter">
            <span v-if="this.checker == false"><i>Non è stata trovata alcuna carta, ripeti la ricerca</i></span>
            <span v-else>Trovate {{ this.store.cards.length }} carte</span>
            
        </div>
        <div class="main-container" v-if="this.checker == true">
            <div v-if="this.isLoading == true" class="loading-container">
                <img src="/img/giphy.webp" alt="">
            </div>
            <CardItem v-else v-for="card in this.store.cards" :card="card"></CardItem>

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
        width: 50%;
        object-fit: contain;
    }
}
.main-container {
    @include mainContainer();
    background-color: white;

}

#card-counter {
    @include mainContainer();
    align-items: center;
    height: 80px;
    padding: 10px 30px;
    font-size: 1.2rem;
    background-color: rgb(33, 37, 41);
}

</style>