import {reactive} from 'vue';

export const store = reactive({
    cards: [],

    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',

    cardName: "",

})