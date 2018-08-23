<template>
    <div class="col" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: {
            offset: {type: Number, default: undefined}
        },
        computed: {
            classes() {
                let c = {};
                if (this.offset !== undefined) {
                    c['offset-' + this.offset] = true
                }
                return c;
            }
        }
    };
</script>
