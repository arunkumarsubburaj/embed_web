<template>
  <div class="embed-wrapper">
    <div
      class="snippet-wrapper"
      v-for="(snippet, index) in embedData"
      :key="index"
    >
      <announcement
        v-if="snippet.type == 'Announcement'"
        :snippetData="snippet"
      ></announcement>
      <embed-header
        v-if="snippet.type == 'Header'"
        :snippetData="snippet"
      ></embed-header>
    </div>
  </div>
</template>
<style lang="less">
@import url("./../reset.css");
@import url("./../quill.css");
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v118/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
<script>
import announcement from "./Announcement";
import embedHeader from "./Header";
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
            bg_color: "#B7CDCE",
            title:
              "Announcements: Earn Points every time you shop. One dollor = five points",
            font_color: "#0017ff",
          },
        },
        {
          type: "Header",
          attributes: {
            header_image: "upload/img/fomo/5_405_1626925342.jpg",
            bg_color: "#7FE0E4",
            title: "Welcome to Loyalty & Referral Program",
            description:
              "Some text here to explain how to earn more rewards plus second line.",
            btn_color: "#ED4610",
            btn_txt_color: "#ffffff",
            btn_text: "Join Now",
            btn_url: "http://www.google.com",
          },
        },
      ]),
    },
  },
  data() {
    return {
      embedData: this.datasource
        ? JSON.parse(this.datasource.replace(/\\"/g, "'"))
        : [],
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
    embedData: function (value) {
      console.log("embedData: ", value);
    },
  },
  methods: {},
};
</script>
