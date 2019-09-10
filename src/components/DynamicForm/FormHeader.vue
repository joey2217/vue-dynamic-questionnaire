<template>
  <div class="form-header">
    <div class="title">
      <input v-model="inputTitle" :readonly="readonly" placeholder="标题" />
      <span></span>
    </div>
    <div class="sub-title">
      <input v-model="inputSubTitle" :readonly="readonly" placeholder="副标题" />
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormHeader',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputTitle: '',
      inputSubTitle: '',
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
    width: 100%;
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
    color: rgba($color: #000000, $alpha: 0.6)
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
