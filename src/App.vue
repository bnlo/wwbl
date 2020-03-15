<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/_reset.scss";
@import "~@/assets/scss/_classes.scss";

#app {
  color: $text-color;
  // border: $border-size solid $text-color;
  background-color: $bg-color;
  font-family: $font-family;
  padding: 20px;
  padding-right: 0;
}
html::-webkit-scrollbar {
  width: 10px;
  background-color: $shadow-color;
}
html::-webkit-scrollbar-thumb {
  background: $text-color;
}

@media (min-width: 2000px) {
  body {
    font-size: 3.5rem;
  }
}
</style>
