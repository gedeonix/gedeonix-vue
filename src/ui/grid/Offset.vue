/* experimental */

<template>
    <div :class="classes">
    </div>
</template>

<script>
export default {
  name: "Offset",
  props: {
    offset: { type: Number, default: undefined },
  },
  computed: {
      classes() {
        let c = {

        };
        if(this.offset !== undefined) {
            c['offset-'+ this.offset] = true
        }
        return c;
    }
  }
};
</script>
