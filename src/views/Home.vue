<template>
  <div>
    <!--  -->
    <div class="d-flex jcsb section">
      <div class="fg1">
        <my-h>contact</my-h>
        <ul>
          <li>louis bon</li>
          <li>+33 630700577</li>
          <li>france, paris xiii</li>
          <li>
            <a href="mailto:dev.louisbon@gmail.com">dev.louisbon@gmail.com</a>
          </li>
        </ul>
      </div>
      <div>
        <img src="@/assets/bluepixel.jpg" alt />
      </div>
    </div>
    <!--  -->
    <div class="section">
      <my-h>parcours</my-h>
      <ul>
        <li>bac es (2010)</li>
        <li>bac pro photo (2014)</li>
        <li>developpeur multimedia (2017)</li>
      </ul>
    </div>
    <!--  -->
    <div class="section">
      <my-h>experience</my-h>
      <ul>
        <li>developpement (3 ans)</li>
        <li></li>
      </ul>
    </div>
    <!--  -->
    <div class="section">
      <my-h>competences</my-h>
      <ul>
        <li>javascript</li>
        <li>postgresql</li>
        <li>html|css</li>
        <li>nodejs</li>
        <li>vuejs</li>
        <li>bash</li>
      </ul>
    </div>
    <!--  -->
  </div>
</template>

<script>
// @ is an alias to /src
import MyH from '@/components/MyH'
export default {
  name: 'Home',
  components: { MyH }
}
</script>

<style lang="scss" scoped>
img {
  display: initial;
  height: 150px;
  border-left: $border-size solid $text-color;
  border-bottom: $border-size solid $text-color;
}

  .section {
    padding-left: 1.5em;
    &:first-child { padding-left: 3%; }
    &:nth-child(2) { padding-left: 50%; }
    &:nth-child(3) { padding-left: 33%; }
    &:last-child { padding-left: 10%; }
  }
  #one {
    padding-left: 3%;
  }
  #two {
    padding-left: 50%;
  }
  #three {
    padding-left: 33%;
  }
  #four {
    padding-left: 10%;
  }
</style>
