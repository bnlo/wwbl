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
        main: 'fullstack @autovisual (2ans+)',
        sub: [
          'scraping',
          'dashboard',
          'monitoring',
          'dataviz',
          'lead front'
        ]
      }, {
        main: 'freelance @malt (1an+)',
        class: 'wrap',
        sub: [
          'front',
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
          'decompilation...'
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
  &:visited { color: initial; }
  text-decoration: underline dotted;
  // background: no-repeat center url('~@/assets/ext.svg');
  // background-size: cover;
  // display: inline-block;
  // height: 2rem;
  // width: 2rem;
  // color: blue;
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
}

.section {
  &:not(:first-child) { position: relative; }
  &:nth-child(2) { padding-left: 30%; }
  &:nth-child(3) { padding-left: 15%; }
  & > ul > li {
    border: 1px solid blue;
  }
  &:nth-child(2):before {
    content: 'CV';
    font-size: 10em;
    position: absolute;
    top: -20px;
    left: 5vw;
    text-shadow: 29px -42px 0px $shadow-color;
    display: block;
  }
}

.subs {
  padding-left: 10px;
  color: $shadow-color;
  display: flex;
  flex-wrap: wrap;
    color: white;

  li {
    padding: 0 10px;
  }
  background-color: $shadow-color;
  &.wrap li {
    white-space: nowrap;
  }
}

@media (max-width: 1400px) {
  .section:nth-child(2):before { left: 3vw; }
}
@media (max-width: 1100px) {
  .section:nth-child(2):before { left: 0; }
}
@media (max-width: 900px) {
  .section:nth-child(2):before {
    font-size: 6em;
    top: 35px;
  }
  #portrait {
    width: 150px;
  }
}
@media (max-width: 600px) {
  #portrait {
    display: none;
  }
  .section:nth-child(2),
  .section:nth-child(3) {
    padding-left: inherit;
  }
  .section:nth-child(2):before {
    content: '';
  }
}
</style>
