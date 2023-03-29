<script>

import { store } from "../store.js";



export default {

    name: "CardSearch",

    data() {
        return {
            store,

        }
    },



}


</script>

<template>
    <div id="card-search">
        <input v-model="store.cardName" type="text" placeholder="Inserisci il nome della carta da cercare">
        <button>Cerca</button>

    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;


#card-search {
    @include mainContainer();
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    padding: 20px;

    input {
        width: 300px;
        height: 2rem;

        padding: 10px;
        color: rgb(49, 53, 57);
        background-color: white;
    }

    button {
        padding: 6px;
        color: rgb(49, 53, 57);
        background-color: white;
    }

}


</style>