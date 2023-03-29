<script>



export default {

    name: "CardItem",

    data() {
        return {

        }
    },

    props: {

        card: Object,

    },



}


</script>

<template>
    <div class="single-card">

        <img :src="card.card_images[0].image_url" alt="">
        <div class="card-name">
            {{ card.name.toUpperCase() }}
        </div>
        <div class="card-type">
            {{ card.type }}
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;

.single-card {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    width: calc(100% / 6);
    min-height: 300px;
    background-color: rgb(212, 143, 56);

    .card-name {
        flex-grow: 1;
        font-weight: bold;
        padding: 10px 0;
    }

    .card-type {
        align-content: flex-end;
        padding: 10px 0;
    }

    img {
        width: 100%;
    }
}



</style>