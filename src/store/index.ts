import Vue from 'vue'
import Vuex from 'vuex'
import ExampleModule from './examples'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        global: {
            loading: true
        }
    },
    mutations: {},
    actions: {},
    modules: {
        example: ExampleModule
    }
})
