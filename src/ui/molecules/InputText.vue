<template>
    <input class="input" type="text" v-model="value" :placeholder="placeholder"/>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
               type: String,
               default: ''
            }
        }
    }
</script>