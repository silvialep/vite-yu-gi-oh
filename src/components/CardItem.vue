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
        <div>
            {{ card.name }}
        </div>
        <div>
            {{ card.type }}
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

@use "../scss/variables.scss" as *;

.single-card {
    display: flex;
    flex-flow: column nowrap;
    width: calc(100% / 6);
    min-height: 300px;
    background-color: rgb(212, 143, 56);

    img {
        width: 100%;
    }
}



</style>