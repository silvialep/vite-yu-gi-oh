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
        
    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;

.single-card {
    width: calc(100% / 6);
    height: 300px;

    img {
        height: 100%;
    }
}



</style>