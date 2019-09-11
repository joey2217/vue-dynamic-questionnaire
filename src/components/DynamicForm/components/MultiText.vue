<template>
  <div>
    <el-input
      v-model="textarea"
      type="textarea"
      :rows="2"
      :placeholder="placeholder"
      :disabled="isCreated"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'MultiText',
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
      textarea: '',
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
        [this.property]: this.textarea,
        component: 'MultiText',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
