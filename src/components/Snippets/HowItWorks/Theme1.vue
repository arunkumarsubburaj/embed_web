<template>
  <div
    v-if="attributes"
    class="snippet"
    v-bind:style="styleObj"
    v-bind:class="infoHidden ? 'hide' : ''"
  >
    <p class="announcementTitle" v-html="attributes.title"></p>
    <span class="closeIcon material-icons" v-on:click="infoHidden = true"
      >close</span
    >
  </div>
</template>

<script>
export default {
  name: "ThemeOne",
  props: ["snippetData"],
  data: () => {
    return {
      attributes: {},
      styleObj: {},
      infoHidden: false,
    };
  },
  methods: {
    applyStyles() {
      this.styleObj["color"] = this.attributes.font_color;
      this.styleObj["backgroundColor"] = this.attributes.bg_color;
    },
  },
  mounted() {
    this.attributes = this.$props.snippetData.attributes;
    this.applyStyles();
  },
  computed: {},
  watch: {
    snippetData: function (value) {
      this.attributes = value.attributes;
    },
    attributes: function (value) {
      console.log(value);
      this.applyStyles();
    },
  },
};
</script>

<style lang="less" scoped>
.snippet {
  position: relative;
  &.hide {
    display: none;
  }
}
p.announcementTitle {
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 30px;
  font-family: poppins, sans-serif;
}
.closeIcon {
  position: absolute;
  right: 5px;
  padding: 5px;
  box-sizing: border-box;
  color: black;
  top: 0;
  font-size: 20px;
  cursor: pointer;
}
</style>
