<script>



export default {

    name: "AppHeader",

    data() {
        return {

        }
    },



}


</script>

<template>
    <nav id="header-nav">
        <img src="/img/yugioh_logo.jpeg" alt="yu-gi-oh logo">
        <span>Yu-Gi-Oh API</span>
        
    </nav>
</template>

<style lang="scss" scoped>

#header-nav {
    display: flex;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: 80px;
    color: black;
    background-color: white;

    img {
        height: 60%;
    }

    span {
        font-size: 3rem;
    }
}

</style>