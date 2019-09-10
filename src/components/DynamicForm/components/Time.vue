<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  name: 'Time',
  components: {},
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
      value: 'time',
      options: [
        {
          value: 'time',
          label: '时:分:秒',
        },
      ],
    };
  },
  computed: {
    label() {
      let text = '';
      if (this.value) {
        const option = this.options.find(item => item.value === this.value);
        if (option) {
          text = option.label;
        }
      }
      return text;
    },
    computed: {
      formJson() {
        return {
          [this.property]: this.radio,
          options: this.options,
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
