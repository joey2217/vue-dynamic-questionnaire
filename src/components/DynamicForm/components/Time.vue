<template>
  <div>
    <template v-if="isCreated">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span>{{label}}</span>
    </template>
    <div  v-else class="component">
      <el-time-picker v-model="date" placeholder="任意时间点"></el-time-picker>
    </div>
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
      default: 'value',
    },
  },
  data() {
    return {
      value: 'time',
      date: '',
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
    formJson() {
      return {
        [this.property]: this.date,
        options: this.options,
        component: 'Time',
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
