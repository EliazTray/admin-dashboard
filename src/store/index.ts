import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from './types'
import examples from './examples'
import counter from './counter'

Vue.use(Vuex)

const store: Store = new Vuex.Store({
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        examples,
        counter
    }
})

export default store
