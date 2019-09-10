<template>
  <div>
    <el-checkbox-group v-model="checkList" :disabled="isCreated">
      <el-checkbox
        v-for="item in options"
        :key="item.label"
        :label="item.label"
        style="display:block"
      >
        <el-input v-if="isCreated" v-model="item.label" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-close" @click="handleDelete(item.value)"></el-button>
        </el-input>
        <span v-else>
          <el-input v-if="item.value==='other'" v-model="item.label"  placeholder="请输入内容"/>
          <span v-else >{{item.label}}</span>
        </span>
      </el-checkbox>
    </el-checkbox-group>
    <div  v-if="isCreated" class="operate">
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
    option: {
      type: Array,
      default: () => [],
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
        component: 'Checkbox',
      };
    },
  },
  watch: {
    option: {
      handler(val) {
        console.log(val);
        this.options = [...val];
      },
      deep: true,
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
  mounted() {
    if (this.option.length > 0) {
      this.options = [...this.option];
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
