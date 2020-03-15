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
import MyH from '@/components/MyH'
import sections from './sections'
export default {
  data: () => ({ sections }),
  components: { MyH }
}
</script>

<style lang="scss">
a {
  &:visited { color: initial; }
  text-decoration: underline dotted;
  word-break: break-word;
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
    font-size: 30rem;
    position: absolute;
    top: -20px;
    left: 5vw;
    text-shadow: 29px -42px 0px $shadow-color;
    display: block;
  }
    &:first-child h2 {
    margin-top: 0;
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
@media (max-width: 287px) {

}
</style>
