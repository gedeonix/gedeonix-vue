<template>
  <main class="main container">
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </main>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "main",
  components: {
    HelloWorld
  }
};
</script>
