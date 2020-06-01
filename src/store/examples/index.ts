export type IExampleState = {
    name: string
    age?: number
    sex: 'male' | 'female'
}

const exampleModule = {
    namespaced: true,
    state: {
        name: 'examples',
        sex: 'female',
        age: 1
    },
    mutations: {},
    actions: {},
    modules: {
        subExamples: {
            namespaced: true,
            state: {
                subname: 'xx'
            }
        }
    }
}

export default exampleModule
