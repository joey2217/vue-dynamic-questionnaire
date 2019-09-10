<template>
  <div class="form-header">
    <div class="title">
      <input v-model="inputTitle" placeholder="请输入内容" />
      <span></span>
    </div>
    <div class="sub-title">
      <input v-model="inputSubTitle" placeholder="请输入内容" />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormHeader',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    subTitle: {
      type: String,
      default: 'subTitle',
    },
  },
  data() {
    return {
      inputTitle: '标题',
      inputSubTitle: '副标题',
    };
  },
};
</script>

<style lang="scss" scoped>
.form-header {
  .title {
    font-size: 30px;
    font-weight: 500;
    padding: 8px 16px 0 8px;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 500;
    padding: 8px 16px 0 8px;
    margin-top:16px;
  }
  div {
    position: relative;
  }
  input {
    width: 6.5em;
    color: #000;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom-color: hsla(185, 100%, 62%, 0.2);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #3cefff;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }

  input:focus ~ span {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
}
</style>
