<template>
  <main class="main container">
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>

    <h2>Components</h2>
    <InputText></InputText>

  </main>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { InputText } from "@/ui";

export default {
  name: "main",
  components: {
    HelloWorld,
    InputText
  }
};
</script>
