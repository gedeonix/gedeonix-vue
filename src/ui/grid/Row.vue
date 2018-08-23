<template>
    <div class="row" :class="style">
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
      style() {
        return {
            'no-gutter': this.noGutter
        }
      }
  }
};
</script>
