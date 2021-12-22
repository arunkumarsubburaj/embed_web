<template>
  <div class="embed-wrapper">
    <div
      class="snippet-wrapper"
      v-for="(snippet, index) in embedData"
      :key="index"
    >
      <announcement
        v-if="snippet.type == 'Announcement'"
        :themeId="currrentThemeId"
        :snippetData="snippet"
      ></announcement>
      <embed-header
        v-if="snippet.type == 'Header'"
        :snippetData="snippet"
        :themeId="currrentThemeId"
      ></embed-header>
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
export default {
  name: "am-embed",
  components: { announcement, embedHeader },
  props: {
    datasource: {
      type: String,
      default: JSON.stringify([
        {
          type: "Announcement",
          attributes: {
            bg_color: "#374BDA",
            title:
              "Announcements: Earn Points every time you shop. One dollor = five points.",
            font_color: "#ffffff",
          },
        },
        {
          type: "Header",
          attributes: {
            header_image:
              "https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc",
            bg_color: "#003A46",
            title: "Welcome to Loyalty & Referral Program",
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
      currrentThemeId: this.themeId,
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
      this.currrentThemeId = value;
    },
  },
  methods: {},
};
</script>
