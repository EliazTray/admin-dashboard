import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from './types'
import examples from './examples'
import counter from './counter'

Vue.use(Vuex)

// https://github.com/microsoft/TypeScript/issues/12754
// 受限于 ts 暂时不支持 Augment Key during Type Mapping, 所以 namespaced 设置为 true 无法得到 action + mutation + getters 的有效推导

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
