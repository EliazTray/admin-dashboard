import { MutationTree, GetterTree, ActionContext, ActionTree } from 'vuex'
import { AppState, AppGetters, AppActions } from './types'
import log from '@/utils/logger'

const namespaceDebug = 'globalState:'
const globalStateDebug = log.extend(namespaceDebug)

/**
 * state 结构比较简单，通常可以先定义，再通过 typeof 拿到类型定义
 */
const state = {
    counter: 1
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
} & Pick<ActionContext<State, AppState>, 'state' | 'rootState'>

/**
 * 模块的 action 定义
 */
export type Actions = {
    globalActions(actionContext: AugmentedActionContext, payload: number): Promise<number>
}

/**
 *  当前模块的 mutation 定义
 */

export type Mutations<S = State> = {
    ['globalMutaions'](state: S, payload: number): void
}

const actions: ActionTree<State, AppState> & Actions = {
    async globalActions({ commit, dispatch, getters, rootGetters, rootState }) {
        await dispatch('exampleActions', 'haha')

        // open console
        globalStateDebug('getters.globalCoutersDouble: %o', getters.globalCoutersDouble)
        commit('globalMutaions', 123)
        globalStateDebug('getters.globalCoutersDouble: %o', getters.globalCoutersDouble)
        globalStateDebug('rootGetters.globalCoutersDouble: %o', rootGetters.globalCoutersDouble)
        globalStateDebug('rootState.counter: %o', rootState.counter)

        return Promise.resolve(Math.random())
    }
}

const mutations: MutationTree<State> & Mutations = {
    ['globalMutaions'](state, payload: number) {
        state.counter = payload
    }
}

/**
 * 当前模块的 getters 定义
 */
export type Getters = {
    globalCounters(state: State, getters: Getters, rootState: AppState, rootGetters: AppGetters): number
    globalCoutersDouble(state: State): number
}

const getters: GetterTree<State, AppState> & Getters = {
    globalCounters: (state, getters, rootState, rootGetters) => {
        globalStateDebug(state, getters, rootState, rootGetters)
        return state.counter
    },
    globalCoutersDouble(state: State) {
        return state.counter * 2
    }
}

const example = {
    state,
    mutations,
    actions,
    getters
}

export default example
