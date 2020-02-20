<script>
export default {
  props: {
    level: {
      type: String || Number,
      required: false,
      default: '2'
    },
    shadow: {
      type: String,
      required: false,
      default: ''
    }
  },
  render (createElement) {
    return createElement(
      'h' + this.level,
      { class: 'my-h', attrs: { 'data-content': this.shadow || this.$slots.default[0].text } },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss">
// $border-size: 10px;
.my-h {
  position: relative;
  z-index: 1;
  font-weight: 400;
  // first line
  border-bottom: $border-size solid $text-color;
  // shadow
  &::before {
    font-size: 1.5em;
    content: attr(data-content);
    position: absolute;
    color: $shadow-color;
    bottom: 0;
    left: 0.5em;
    z-index: -1;
  }
  // second line
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -$border-size * 2;
    left: 0.5em;
    right: 0;
    height: $border-size;
    background-color: $shadow-color;
  }
}
</style>
