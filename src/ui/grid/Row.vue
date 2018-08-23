<template>
    <div class="row" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    noGutter: { type: Boolean, default: false }
  },
  computed: {
      classes() {
        return {
            'no-gutter': this.noGutter
        }
      }
  }
};
</script>
