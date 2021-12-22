<template>
  <div class="snippet" v-bind:style="styleObj" v-if="attributes">
    <div
      class="card-wrapper"
      v-bind:style="{
        backgroundColor: attributes.bg_Color,
      }"
    >
      <div class="smartVector left">
        <div
          class="bannerImage"
          v-bind:style="{
            backgroundImage: attributes.header_image,
          }"
        ></div>
      </div>
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
    </div>
  </div>
</template>

<style lang="less" scoped>
.snippet {
  height: 400px;
  width: 100%;
  //   background-color: aquamarine;
  color: #fff;
  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("./../../../assets/Theme1/Group 1961.png");
    background-position: 20% 96%;
    box-sizing: border-box;
    display: flex;
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
  }
  @media screen and (min-width: 1024px) {
    .card-wrapper {
      justify-content: flex-end;
      .box {
        right: 10%;
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
      border-radius: 5px;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      margin: 10px 0;
      min-width: 186px;
      border: none;
      cursor: pointer;
      box-sizing: border-box;
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
