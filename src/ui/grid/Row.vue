<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Row',
        props: {
            limit: {type: Number, default: undefined},
            noGutter: {type: Boolean, default: false}
        },
        computed: {
            classes() {
                let c = {
                    'no-gutter': this.noGutter
                };
                if (this.limit !== undefined) {
                    c['row-' + this.limit] = true
                }
                else {
                    c.row = true
                }
                return c;
            }
        }
    };
</script>
