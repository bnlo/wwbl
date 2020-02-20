<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  color: $text-color;
  // border: $border-size solid $text-color;
  background-color: $bg-color;
  font-family: $font-family;
  padding-bottom: 20px;
  padding-left: 30px;
}
html::-webkit-scrollbar {
  width: 10px;
  background-color: $shadow-color;
}
html::-webkit-scrollbar-thumb {
    background: $text-color;
}
</style>
