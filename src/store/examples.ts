import { MutationTree, GetterTree, ActionContext, ActionTree } from 'vuex'
import { AppState, AppActions, AppGetters } from './types'

const state = {
    msg: 'this is examples state'
}

export type State = typeof state

// 增强的 actionContext 类型定义
type AugmentedActionContext = {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
    dispatch<K extends keyof AppActions>(key: K, payload: Parameters<AppActions[K]>[1]): ReturnType<AppActions[K]>
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
    rootGetters: {
        [K in keyof AppGetters]: ReturnType<AppGetters[K]>
    }
} & Exclude<ActionContext<State, AppState>, 'commit' | 'dispatch' | 'getters' | 'rootGetters'>

export type Actions = {
    exampleActions({ commit }: AugmentedActionContext, payload: string): Promise<number>
}

export type Mutations<S = State> = {
    ['exampleMutations'](state: S, payload: string): void
}

export type Getters = {
    exampleMsg(state: State): string
}

const actions: ActionTree<State, AppState> & Actions = {
    exampleActions({ commit }, payload) {
        return new Promise(resolve => {
            console.log('get globalActions payload:', payload)
            setTimeout(() => {
                const data = 10
                commit('exampleMutations', 'this had been changed via commit mutation')
                resolve(data)
            }, 500)
        })
    }
}

const mutations: MutationTree<State> & Mutations = {
    ['exampleMutations'](state, payload) {
        state.msg = payload
    }
}

const getters: GetterTree<State, AppState> & Getters = {
    exampleMsg: state => {
        return state.msg + ': this is exampleMsg getters'
    }
}

const example = {
    state,
    mutations,
    actions,
    getters
}

export default example
