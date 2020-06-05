import { CommitOptions, Store as VuexStore, DispatchOptions } from 'vuex'
import * as Examples from './examples'
import * as Counter from './counter'

// 需要手动维护，每新增一个模块
export type AppState = {
    examples: Examples.State
    counter: Counter.State
}

export type AppActions = Examples.Actions & Counter.Actions
export type AppMutations = Examples.Mutations & Counter.Mutations
export type AppGetters = Examples.Getters & Counter.Getters

// 收束全局的 store
export type Store = Omit<VuexStore<AppState>, 'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof AppMutations, P extends Parameters<AppMutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<AppMutations[K]>
} & {
    dispatch<K extends keyof AppActions>(
        key: K,
        payload: Parameters<AppActions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<AppActions[K]>
} & {
    getters: {
        [K in keyof AppGetters]: ReturnType<AppGetters[K]>
    }
}
