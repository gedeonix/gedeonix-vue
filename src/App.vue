<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/atoms">Atoms</router-link> |
      <router-link to="/molecules">Molecules</router-link> |
      <router-link to="/grid">Grid</router-link> |
      <router-link to="/organisms">Organisms</router-link> |
      <router-link to="/templates">Templates</router-link> |
      <router-link to="/pages">Pages</router-link>
    </div>
    <router-view/>
  </div>
</template>
