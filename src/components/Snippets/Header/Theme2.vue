<template>
  <div class="snippet" v-if="attributes">
    <div
      class="card-wrapper"
      :style="{
        backgroundColor: attributes.bg_color,
      }"
    >
      <div class="box left">
        <h3 class="titleHeader" v-html="attributes.title"></h3>
        <p class="description" v-html="attributes.description"></p>
        <button
          class="joinNow"
          :style="{
            color: attributes.btn_txt_color,
            backgroundColor: attributes.btn_color,
          }"
          v-html="attributes.btn_text"
        ></button>
      </div>
      <div class="box right">
        <figure
          class="bannerImg"
          :style="{
            backgroundImage: 'url(' + attributes.header_image + ')',
          }"
        ></figure>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("./../../../am-embed-fonts.css");
.snippet {
  height: 400px;
  width: 100%;
  .card-wrapper {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
  }

  .box {
    width: 50%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    font-family: "Poppins", sans-serif;
    figure {
      background-size: 100% 100%;
    }
    &.left {
      padding-left: 10%;
      position: relative;
      &::before {
        // content: "";
        background-image: url("./../../../assets/Vector_Smart_Object_Left.png");
        background-position: -45% 80%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    &.right {
      &::after {
        // content: "";
        background-image: url("./../../../assets/Vector_Smart_Object_Right.png");
        background-position: 105% 102%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .bannerImg {
      width: 100%;
      height: 100%;
      background-color: green;
    }
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
      border-radius: 30px;
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
  @media screen and (max-width: 1200px) {
    .box.right {
      display: none;
    }
    .box.left {
      padding: 0;
      position: relative;
      width: 90%;
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
