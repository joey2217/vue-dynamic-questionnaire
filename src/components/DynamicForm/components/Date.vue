<template>
  <div>
    <template v-if="isCreated">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <span>{{label}}</span>
    </template>
    <div  v-else class="component">
      <el-date-picker
      v-model="date"
      :type="format"
      placeholder="选择日期"
      >
    </el-date-picker>
    </div>
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
      default: 'value',
    },
    format: {
      type: String,
      default: 'date',
    },
  },
  data() {
    return {
      value: 'date',
      date: '',
      options: [
        {
          value: 'date',
          label: '年-月-日',
        },
        {
          value: 'month',
          label: '年-月',
        },
        // {
        //   value: 'yyyy-MM-dd HH:mm',
        //   label: '年-月-日 时:分',
        // },
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
.component{
  padding-left: 20px;
}
</style>
