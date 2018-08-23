<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: {
            offset: {type: Number, default: undefined},
            width: {type: Number, default: undefined}
        },
        computed: {
            classes() {
                let c = {

                };
                if (this.offset !== undefined) {
                    c['offset-' + this.offset] = true
                }
                if (this.width !== undefined) {
                    c['col-' + this.width] = true
                }
                else {
                    c.col = true
                }
                return c;
            }
        }
    };
</script>
