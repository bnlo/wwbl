<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  color: $text-color;
  border: $border-size solid $text-color;
  background-color: $bg-color;
  font-family: $font-family;
  overflow: auto;
}
</style>
