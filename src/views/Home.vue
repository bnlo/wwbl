<template>
  <div>
    <div v-for="section of sections" :key="section.title" :class="`section ${section.class || ''}`.trim()">
      <my-h>{{ section.title }}</my-h>
      <ul>
        <li v-for="line of section.lines" :key="line.text || line">
          <a v-if="line.to" :href="line.to">{{ line.text }}</a>
          <template v-else>{{ line }}</template>
        </li>
      </ul>
    </div>
    <img src="@/assets/bluepixel.jpg" alt="">

  </div>
</template>

<script>
// @ is an alias to /src
import MyH from '@/components/MyH'
export default {
  name: 'Home',
  data: () => ({
    sections: [{
      title: 'contact',
      lines: [
        'louis bon',
        '+33 630700577',
        'france, paris xiii',
        {
          text: 'dev.louisbon@gmail.com',
          to: 'mailto:dev.louisbon@gmail.com'
        }
      ]
    }, {
      title: 'parcours',
      lines: [
        'bac es (2010)',
        'fac geo/bio (2011-12)',
        'bac pro photographie (2014)',
        'licence developpement (2017)'
      ]
    }, {
      title: 'experience',
      lines: [
        'alternance (autovisual - 1an)',
        'scraping (2ans)'
      ]
    }, {
      title: 'competences',
      lines: [
        'javascript',
        'postgresql',
        'html/css',
        'nodejs',
        'vuejs',
        'bash'
      ]
    }]
  }),
  components: { MyH }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration-style: wavy;
  &:visited { color: initial; }
}
img {
  display: initial;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 200px;
  border: $border-size solid $text-color;
  // border-left: $border-size solid $text-color;
  // border-bottom: $border-size solid $text-color;
}

.section {
  padding-left: 1.5em;
  &:first-child {
    padding-left: 3%;
  }
  &:nth-child(2) {
    padding-left: 30%;
  }
  &:nth-child(3) {
    padding-left: 15%;
  }
  &:last-child {
    padding-left: 10%;
  }
}

</style>
