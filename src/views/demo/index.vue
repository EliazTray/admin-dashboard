<template>
    <div class="page-demo">
        <p>{{ id }}</p>
        <p>{{ page }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'

type demoState = {
    age: string
    sex: 'male' | 'female'
}

export default Vue.extend({
    name: 'demo',
    props: {
        id: String,
        page: Number
    },
    data(): demoState {
        return {
            age: '1',
            sex: 'male'
        }
    },
    computed: {
        s() {
            return 1
        },
        // 当有 this 参与的类型推导，需要明确指定函数返回值类型
        a(): string {
            return this.s + '1'
        }
    },
    watch: {
        age: {
            handler(value: demoState['age'], oldValue: demoState['age'] | undefined) {
                console.log(oldValue)
                console.log(value)
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        store.dispatch('globalActions', 1)
    }
})
</script>
