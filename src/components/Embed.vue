<template>
  <div class="embed-wrapper">
    <div
      class="snippet-wrapper"
      v-for="(snippet, index) in embedData"
      :key="index"
    >
      <announcement
        v-if="snippet.type == 'Announcement'"
        :themeId="currentThemeId"
        :snippetData="snippet"
      ></announcement>
      <embed-header
        v-if="snippet.type == 'Header'"
        :snippetData="snippet"
        :themeId="currentThemeId"
      ></embed-header>
      <how-it-works
        v-if="snippet.type == 'HowItWorks'"
        :snippetData="snippet"
        :themeId="currentThemeId"
      ></how-it-works>
    </div>
  </div>
</template>
<style lang="less">
@import url("./../reset.css");
@import url("./../quill.css");
@import url("./../material-icons.css");
@import url("./../fonts.css");
@import url("./../am-embed-fonts.css");
</style>
<script>
const announcement = () =>
  import(/* webpackChunkName: "announcement" */ "./Announcement");
const embedHeader = () =>
  import(/* webpackChunkName: "embedHeader" */ "./Header");
const howItWorks = () =>
  import(/* webpackChunkName: "embedHeader" */ "./HowItWorks.vue");
export default {
  name: "am-embed",
  components: { announcement, embedHeader, howItWorks },
  props: {
    datasource: {
      type: String,
      default: JSON.stringify([
        {
          type: "Announcement",
          attributes: {
            bg_color: "#374BDA",
            title:
              "Announcements: Earn Points every time you shop. One dollor = five points",
            font_color: "#ffffff",
          },
        },
        {
          type: "Header",
          attributes: {
            header_image:
              "https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo",
            bg_color: "red",
            title: "Welcome to Loyalty & Referral Program",
            description:
              "Some text here to explain how to earn more rewards plus second line.",
            btn_color: "#374BDA",
            btn_txt_color: "#ffffff",
            btn_text: "Join Now",
            btn_url: "http://www.google.com",
          },
        },
        {
          type: "HowItWorks",
          attributes: {
            bg_color: "red",
            stepValues: [""],
            description:
              "Some text here to explain how to earn more rewards plus second line.",
            btn_color: "#374BDA",
            btn_txt_color: "#ffffff",
            btn_text: "Join Now",
            btn_url: "http://www.google.com",
          },
        },
      ]),
    },
    themeId: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      embedData: this.datasource
        ? JSON.parse(this.datasource.replace(/\\"/g, "'"))
        : [],
      currentThemeId: this.themeId,
    };
  },
  mounted() {
    console.log(this.datasource);
  },
  watch: {
    datasource: function (value) {
      console.log("datasource: ", value);
      this.datasource = value;
      this.embedData = JSON.parse(value.replace(/\\"/g, "'"));
    },
    themeId: function (value) {
      this.currentThemeId = value;
    },
  },
  methods: {},
};
</script>
