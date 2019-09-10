<template>
  <div class="d-form">
    <div class="opeate">
      <el-button icon="el-icon-reading" @click="getFormJson">生成数据</el-button>
      <el-button icon="el-icon-data-line" @click="addFormItem">预览</el-button>
      <el-button icon="el-icon-plus" circle @click="addFormItem"></el-button>
    </div>
    <form-header :title="title" :subTitle="subTitle" ref="header"/>
    <FormItem
      v-for="(item,index) in formConfig"
      :ref="'formItem'+index"
      :key="index"
      :isCreated="item.isCreated"
    >
      <el-button icon="el-icon-delete" circle @click="deleteFormItem(index)"></el-button>
    </FormItem>
    <el-dialog
      title="数据"
      :visible.sync="dataVisible">
      <pre>{{formData}}</pre>
    </el-dialog>

  </div>
</template>

<script>
import FormHeader from './FormHeader.vue';
import FormItem from './FormItem.vue';

export default {
  name: 'DynamicForm',
  components: {
    FormHeader,
    FormItem,
  },
  data() {
    return {
      title: '',
      subTitle: '',
      formConfig: [
        {
          isCreated: true,
        },
      ],
      formData: {},
      dataVisible: false,
    };
  },
  methods: {
    addFormItem() {
      this.formConfig.push({
        isCreated: true,
      });
    },
    deleteFormItem(index) {
      this.formConfig.splice(index, 1);
    },
    getFormJson() {
      const data = {
        title: '',
        subTitle: '',
        formConfig: [],
      };
      if (this.formConfig.length > 0) {
        this.formConfig.map((item, index) => {
          data.formConfig.push({ ...this.$refs[`formItem${index}`][0].formJson() });
        });
      }
      // console.log(data);
      this.formData = data;
      this.dataVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.d-form {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  min-width: 500px;
  padding: 20px;
  .opeate {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
