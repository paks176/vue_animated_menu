import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        itemsList: [
            {
                id: 'wefw4fwsef',
                date: '30 мая',
                time: '15:00',
                competitors: [
                    'Champion 4',
                    'Champion 8',
                ]
            },
            {
                id: 'hjli097',
                date: '17 июня',
                time: '16:00',
                competitors: [
                    'Champion 7',
                    'Champion 4',
                ]
            },
            {
                id: 'w34yrgse',
                date: '26 июня',
                time: '19:00',
                competitors: [
                    'Champion 1',
                    'Champion 2',
                ]
            },
            {
                id: 'zzgrh577',
                date: '16 июля',
                time: '20:00',
                competitors: [
                    'Champion 9',
                    'Champion 3',
                ]
            },
            {
                id: '12125t4gds',
                date: '30 сентября',
                time: '19:00',
                competitors: [
                    'Champion 6',
                    'Champion 5',
                ]
            },
        ],
    },
    actions: {
    },
    mutations: {
    },
    getters: {
        getItemsList: state => {
            return state.itemsList;
        }
    },
});