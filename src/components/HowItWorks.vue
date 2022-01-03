<template>
  <div class="snippetThemeWrapper">
    <ThemeOne :snippetData="snippetObj" v-if="currentId == 1"></ThemeOne>
  </div>
</template>
<style lang="less" scoped>
@import url("./../reset.css");
@import url("./../material-icons.css");
@import url("./../fonts.css");
</style>
<script>
const ThemeOne = () =>
  import(
    /* webpackChunkName: "announcement-theme-1" */ "./Snippets/Announcement/Theme1.vue"
  );
export default {
  name: "how-it-works",
  props: ["snippetData", "themeId"],
  components: { ThemeOne },
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
