<template>
  <div>
    <el-input v-model="input" :placeholder="placeholder" :disabled="isCreated"></el-input>
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
      default: 'value',
    },
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    placeholder() {
      if (this.isCreated) {
        return '待填写者输入';
      }
      return '请输入';
    },
    formJson() {
      return {
        [this.property]: this.input,
        component: 'SingleText',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
