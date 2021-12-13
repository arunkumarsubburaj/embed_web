<template>
  <div class="snippet" v-bind:style="styleObj" v-if="attributes">
    <div class="card-wrapper">
      <div class="box">
        <h3 class="titleHeader" v-html="attributes.title"></h3>
        <p class="description" v-html="attributes.description"></p>
        <button
          class="joinNow"
          v-bind:style="{ color: attributes.btn_color }"
          v-html="attributes.btn_text"
        ></button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.snippet {
  max-height: 400px;
  width: 100%;
  //   background-color: aquamarine;
  color: #fff;
  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-image: url("./../assets/header_banner.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    &::before {
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 1024px) {
    .card-wrapper {
      justify-content: flex-end;
      .box {
        right: 45px;
      }
    }
  }

  .box {
    width: 80%;
    max-width: 400px;
    border: 10px solid #fff;
    padding: 20px 10px;
    box-sizing: border-box;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .titleHeader {
      font-size: 18px;
      font-weight: bolder;
      letter-spacing: 2px;
      margin: 20px 0;
    }
    .description {
      font-size: 14px;
      margin: 10px 0;
    }
    .joinNow {
      padding: 20px;
      border-radius: 20px;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;
      min-width: 180px;
      border: none;
      cursor: pointer;
    }
  }
}
</style>

<script>
export default {
  name: "embedHeader",
  props: ["snippetData"],
  data: () => {
    return {
      attributes: null,
      styleObj: {},
      infoHidden: false,
    };
  },
  methods: {},
  mounted() {
    this.attributes = this.$props.snippetData.attributes;
    // this.applyStyles();
  },
  computed: {
    // attributes: function () {
    //   return this.$props.snippetData.attributes;
    // },
  },
  watch: {
    snippetData: function (value) {
      this.attributes = value.attributes;
    },
    attributes: function (value) {
      // this.attributes = value;
      // this.applyStyles();
      console.log(value);
    },
  },
};
</script>
