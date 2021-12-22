<template>
  <div class="snippetThemeWrapper">
    <ThemeOne :snippetData="snippetObj" v-if="currentId == 1"></ThemeOne>
    <ThemeTwo :snippetData="snippetObj" v-if="currentId == 2"></ThemeTwo>
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
    /* webpackChunkName: "announcement-theme-1" */ "./Snippets/Announcement/Theme1.vue"
  );
const ThemeTwo = () =>
  import(
    /* webpackChunkName: "announcement-theme-1" */ "./Snippets/Announcement/Theme2.vue"
  );
export default {
  name: "announcement",
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
