<template>
  <div>
    <el-checkbox-group v-model="checkList" :disabled="isCreated">
      <el-checkbox
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        style="display:block"
      >
        <el-input v-model="item.label" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-close" @click="handleDelete(item.value)"></el-button>
        </el-input>
      </el-checkbox>
    </el-checkbox-group>
    <div class="operate">
      <el-button type="text" @click="handleAddOption">添加选项</el-button>
      <el-button v-if="!other" type="text" @click="handleAddOtherOption">添加"其他"项</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    isCreated: {
      type: Boolean,
      default: false,
    },
    property: {
      type: String,
      default: 'checkList',
    },
  },
  data() {
    return {
      checkList: [],
      options: [
        {
          label: '选项1',
        },
      ],
      index: 2,
      other: false,
    };
  },
  computed: {
    formJson() {
      return {
        [this.property]: this.checkList,
        options: this.options,
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
    handleAddOtherOption() {
      this.options.push({
        value: 'other',
        label: '其他',
      });
      this.other = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
