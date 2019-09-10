<template>
  <div>
    <template v-if="isCreated">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <span>{{label}}</span>
    </template>
    <el-date-picker
      v-else
      v-model="value2"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'Date',
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
      value: 'yyyy-MM-dd',
      date: '',
      options: [
        {
          value: 'yyyy-MM-dd',
          label: '年-月-日',
        },
        {
          value: 'yyyy-MM',
          label: '年-月',
        },
        {
          value: 'yyyy-MM-dd HH:mm',
          label: '年-月-日 时:分',
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
    formJson() {
      return {
        [this.property]: this.date,
        value: this.value,
        options: this.options,
        component: 'Date',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
