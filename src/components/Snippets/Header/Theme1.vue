<template>
  <div class="snippet" v-if="attributes">
    <div
      class="card-wrapper"
      :style="{
        backgroundColor: attributes.bg_color,
      }"
    >
      <div class="box left">
        <figure
          class="bannerImg"
          :style="{
            backgroundImage: 'url(' + attributes.header_image + ')',
          }"
        ></figure>
      </div>
      <div class="box right">
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
    </div>
  </div>
</template>

<style lang="less" scoped>
.snippet {
  height: 400px;
  width: 100%;
  color: #fff;
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
    &.left {
      position: relative;
      figure {
        background-size: 100% 100%;
      }
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
      padding-left: 10%;
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
  @media screen and (max-width: 1200px) {
    .box.left {
      display: none;
    }
    .box.right {
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
      console.log(value);
    },
  },
};
</script>
