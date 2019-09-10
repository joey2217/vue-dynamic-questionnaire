<template>
  <div>
    <el-input v-model="input" placeholder="待填写者输入" :disabled="isCreated"></el-input>
  </div>
</template>

<script>
export default {
  name: 'SingleText',
  props: {
    isCreated: {
      type: Boolean,
      default: false,
    },
    property: {
      type: String,
      default: 'input',
    },
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    formJson() {
      return {
        [this.property]: this.radio,
        options: this.options,
        component: 'SingleText',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
