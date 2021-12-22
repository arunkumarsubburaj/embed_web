<template>
  <div class="snippetThemeWrapper">
    <ThemeOne v-if="currentId == 1" :snippetData="snippetObj"></ThemeOne>
    <ThemeTwo v-if="currentId == 2" :snippetData="snippetObj"></ThemeTwo>
  </div>
</template>

<style lang="less" scoped>
@import url("./../reset.css");
@import url("./../quill.css");
@import url("./../material-icons.css");
@import url("./../fonts.css");
</style>

<script>
const ThemeOne = () =>
  import(
    /* webpackChunkName: "header-theme-1" */ "./Snippets/Header/Theme1.vue"
  );
const ThemeTwo = () =>
  import(
    /* webpackChunkName: "header-theme-2" */ "./Snippets/Header/Theme2.vue"
  );
export default {
  name: "embedHeader",
  props: ["snippetData", "themeId"],
  components: { ThemeOne, ThemeTwo },
  data: () => {
    return {
      snippetObj: {},
      currentId: -1,
    };
  },
  methods: {},
  mounted() {
    this.snippetObj = this.$props.snippetData;
    this.currentId = this.$props.themeId;
  },

  watch: {
    snippetData: function (value) {
      this.snippetObj = value;
    },
    themeId: function (value) {
      this.currentId = value;
    },
  },
};
</script>
