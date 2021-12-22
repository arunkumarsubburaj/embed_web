<template>
  <div class="snippet" v-bind:style="styleObj" v-if="attributes">
    <div
      class="card-wrapper"
      v-bind:style="{
        backgroundColor: attributes.bg_Color,
      }"
    >
      <div class="box">
        <h3 class="titleHeader" v-html="attributes.title"></h3>
        <p class="description" v-html="attributes.description"></p>
        <button
          class="joinNow"
          v-bind:style="{
            color: attributes.btn_txt_color,
            backgroundColor: attributes.btn_color,
          }"
          v-html="attributes.btn_text"
        ></button>
      </div>
      <div class="smartVector">
        <div class="ellipsis embed-Ellipse"></div>
        <div
          class="bannerImage"
          v-bind:style="{
            backgroundImage: attributes.header_image,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./../../../am-embed-fonts.css");
.snippet {
  height: 400px;
  width: 100%;
  //   background-color: aquamarine;
  position: relative;
  color: #000;
  &::before {
    content: "";
    background-image: url("./../../../assets/Vector_Smart_Object_Left.png");
    background-position: -45% 80%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &::after {
    content: "";
    background-image: url("./../../../assets/Vector_Smart_Object_Right.png");
    background-position: 105% 102%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    .card-wrapper {
      justify-content: flex-start;
      .box {
        right: -15%;
      }
    }
  }

  .box {
    width: 470px;
    padding: 20px 10px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    font-family: "Poppins", sans-serif;
    .titleHeader {
      font-size: 36px;
      font-weight: bolder;
      letter-spacing: 2px;
      margin: 20px 0;
    }
    .description {
      font-size: 16px;
      margin: 10px 0;
      width: 70%;
    }
    .joinNow {
      padding: 20px;
      border-radius: 28px;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      min-width: 186px;
      border: none;
      cursor: pointer;
      box-sizing: border-box;
    }
  }
  .smartVector {
    width: 500px;
    height: 360px;
    position: absolute;
    right: 18%;
    .bannerImage {
      width: 100%;
      height: 100%;
      background-image: url("./../../../assets/Theme2/Group 3498.png");
      background-size: contain;
      z-index: 2;
    }
    .ellipsis {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>

<script>
export default {
  name: "ThemeOne",
  props: ["snippetData"],
  data: () => {
    return {
      attributes: null,
      styleObj: {},
    };
  },
  methods: {},
  mounted() {
    this.attributes = this.$props.snippetData.attributes;
  },

  watch: {
    snippetData: function (value) {
      this.attributes = value.attributes;
    },
    attributes: function (value) {
      this.styleObj = {
        backgroundImage: "url(" + this.attributes.header_image + ")",
        backgroundColor: this.attributes.bg_color,
      };
      console.log(value);
    },
  },
};
</script>
