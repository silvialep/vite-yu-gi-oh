<script>

import AppMain from './components/AppMain.vue';

import AppHeader from './components/AppHeader.vue';

import CardSearch from './components/CardSearch.vue';



export default {

  // name: -nomecomponent -,

  data() {
    return {
               
    }
  },


  

  components: {
    AppMain,
    AppHeader,
    CardSearch

  },



}


</script>

<template>

  <AppHeader></AppHeader>

  <CardSearch></CardSearch>

  <AppMain></AppMain>
  
</template>

<style lang="scss" scoped>

</style>
