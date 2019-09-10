<template>
  <div>
    <el-input
      v-model="textarea"
      type="textarea"
      :rows="2"
      placeholder="待填写者输入"
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
      default: 'textarea',
    },
  },
  data() {
    return {
      textarea: '',
    };
  },
  computed: {
    formJson() {
      return {
        [this.property]: this.textarea,
        options: this.options,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
