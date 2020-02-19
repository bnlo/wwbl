<template>
  <div>
    <div v-for="section of sections" :key="section.title" :class="`section ${section.class || ''}`.trim()">
      <my-h>{{ section.title }}</my-h>
      <ul>
        <li v-for="(line, i) of section.lines" :key="line + i">
          <a v-if="line.to" :href="line.to">{{ line.text }}</a>
          <template v-else>{{ line.main || line }}</template>
          <ul :class="`subs ${line.class || ''}`.trim()" v-if="line.sub">
            <li v-for="sub of line.sub" :key="sub">{{ sub }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <img id="portrait" src="@/assets/bluepixel.jpg" alt="">
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
      title: 'formations',
      lines: [
        'bac es (2010)',
        'fac geo/bio (2011-12)',
        'bac pro photographie (2014)',
        'licence developpement (2017)'
      ]
    }, {
      title: 'experience',
      lines: [{
        class: 'wrap',
        main: 'alternance-cdi autovisual (2017)',
        sub: [
          'scraping',
          'dashboard',
          'monitoring',
          'dataviz',
          'lead front'
        ]
      }, {
        main: 'freelance',
        class: 'wrap',
        sub: [
          'scraping',
          'puppeteer'
        ]
      }]
    }, {
      title: 'competences',
      lines: [{
        main: 'javascript',
        sub: [
          'node',
          'vue',
          'd3',
          'webpack...'
        ]
      }, {
        main: 'postgresql',
        sub: [
          'view',
          'cluster',
          'triggers',
          'pgbouncer...'
        ]
      }, {
        main: 'scraping',
        sub: [
          'puppeteer',
          'charles',
          'luminati',
          'retro-ingenierie...'
        ]
      }, {
        main: 'html/css',
        sub: [
          'scss',
          'vuetify',
          'bootstrap',
          'canvas...'
        ]
      }, {
        main: 'linux',
        sub: [
          'bash',
          'cron',
          'systemctl',
          'kali...'
        ]
      }]
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
  &:first-child { padding-left: 3%; }
  &:nth-child(2) { padding-left: 30%; }
  &:nth-child(3) { padding-left: 15%; }
  &:last-child { padding-left: 10%; }
}

.subs {
  padding-left: 10px;
  font-style: italic;
  font-weight: 600;
  color: $shadow-color;
  opacity: .25;
  display: flex;
  flex-wrap: wrap;
  li:not(:first-child) {
    margin-left: 10px;
  }
  &.wrap li {
    margin-left: 20px;
    white-space: nowrap;
    // flex-basis: 33%;
    line-height: 1.5;
  }
  li {
    text-decoration: underline;
  }
}
@media (max-width: 600px) {
  #portrait {
    display: none;
  }
  .section {
    padding-left: 20px !important;
  }
}
</style>
