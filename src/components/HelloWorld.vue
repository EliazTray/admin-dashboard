<template>
    <div class="hello">
        {{ msg1 }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { IExampleState } from '@/store/examples'

interface A {
    msg1: string
}
interface B {
    msg1: string
}
export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            msg1: '1'
        }
    },
    computed: {
        ...mapState('example', {
            a: state => state.sex
        })
    },
    beforeMount() {
        // this.msgsss
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
