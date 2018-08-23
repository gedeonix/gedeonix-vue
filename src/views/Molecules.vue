<template>
  <main class="main container">
    <h1>Molecules</h1>

    <h2>Input</h2>
    <InputText :value="demoText" placeholder="input..."></InputText>

    <h3>Size</h3>
    <input type="text" class="is-sm" value="sm">
    <br>
    <br>
    <input type="text" value="normal">
    <br>
    <br>
    <input type="text" class="is-md" value="md">
    <br>
    <br>
    <input type="text" class="is-lg" value="lg">

    <h3>Width</h3>
    <input class="width-1" type="text" placeholder="width-1"><br><br>
    <input class="width-2" type="text" placeholder="width-2"><br><br>
    <input class="width-3" type="text" placeholder="width-3"><br><br>
    <input class="width-4" type="text" placeholder="width-4"><br><br>
    <input class="width-5" type="text" placeholder="width-5"><br><br>
    <input class="width-6" type="text" placeholder="width-6"><br><br>
    <input class="width-7" type="text" placeholder="width-7"><br><br>
    <input class="width-8" type="text" placeholder="width-8"><br><br>
    <input class="width-9" type="text" placeholder="width-9"><br><br>
    <input class="width-10" type="text" placeholder="width-10"><br><br>
    <input class="width-11" type="text" placeholder="width-11"><br><br>
    <input class="width-12" type="text" placeholder="width-12">

    <h3>Background is-transparent</h3>
    <input class="is-transparent" type="text" placeholder="input...">

    <h3>Border color</h3>
    <input type="text" placeholder="default">
    <br>
    <br>
    <input class="is-primary" type="text" placeholder="primary">
    <br>
    <br>
    <input class="is-success" type="text" placeholder="success">
    <br>
    <br>
    <input class="is-info" type="text" placeholder="info">
    <br>
    <br>
    <input class="is-warning" type="text" placeholder="warning">
    <br>
    <br>
    <input class="is-danger" type="text" placeholder="danger">
    <br>
    <br>
    <input class="is-light" type="text" placeholder="light">
    <br>
    <br>
    <input class="is-dark" type="text" placeholder="dark">

    <h3>Border is-thick</h3>
    <input class="is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-primary is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-success is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-info is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-warning is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-danger is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-light is-thick" type="text" placeholder="input...">
    <br>
    <br>
    <input class="is-dark is-thick" type="text" placeholder="input...">

    <h3>Type</h3>
    <input type="text" placeholder="text...">
    <br>
    <br>
    <input type="email" placeholder="email...">
    <br>
    <br>
    <input type="search" placeholder="search...">

    <h3>Label & Input</h3>
    <label>Text:
      <input type="text" value="text...">
    </label>
    <br>
    <br>

    <label>Text: <span class="required">*</span>
      <input type="text" value="text...">
    </label>
    <br>
    <br>

    <label>Text:
      <input type="text" value="text...">
      <span class="description">Description...</span>
    </label>
    <br>
    <br>

    <label>Text: <span class="success">success</span>
      <input class="success" type="text" value="text...">
    </label>
    <br>
    <br>

    <label>Text: <span class="error">error</span>
      <input class="error" type="text" value="text...">
    </label>

  </main>
</template>

<script>
    import { InputText } from "@/ui";

    export default {
        name: "main",
        components: {
            InputText
        },
        data() {
            return {
                demoText: ''
            }
        }
    };
</script>
