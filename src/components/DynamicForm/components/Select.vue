<template>
  <div>
    <template v-if="isCreated">
      <el-input
        v-for="(item,index) in options"
        :key="item.value"
        v-model="item.label"
        placeholder="请输入内容"
      >
        <template slot="prepend">{{index+1}}</template>
        <el-button slot="append" icon="el-icon-close" @click="handleDelete(item.value)"></el-button>
      </el-input>
    </template>
    <el-select v-else v-model="select" placeholder="请选择" class="select">
      <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.label"></el-option>
    </el-select>
    <div v-if="isCreated"  class="operate">
      <el-button type="text" @click="handleAddOption">添加选项</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    isCreated: {
      type: Boolean,
      default: false,
    },
    property: {
      type: String,
      default: 'select',
    },
    option: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      select: '',
      options: [
        {
          value: 1,
          label: '选项1',
        },
      ],
      index: 2,
    };
  },
  computed: {
    formJson() {
      return {
        [this.property]: this.radio,
        options: this.options,
        component: 'Select',
      };
    },
  },
  methods: {
    handleDelete(val) {
      const index = this.options.findIndex(item => item.value === val);
      if (index !== -1) {
        this.options.splice(index, 1);
        if (val === 'other') {
          this.other = false;
        }
      }
    },
    handleAddOption() {
      this.options.push({
        value: this.index,
        label: `选项${this.index}`,
      });
      this.index += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.select{
  padding-left: 20px;
}
</style>
