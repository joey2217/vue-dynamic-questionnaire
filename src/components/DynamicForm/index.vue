<template>
  <div class="d-form">
    <div class="opeate">
      <el-button icon="el-icon-reading" @click="showFormJson">生成数据</el-button>
      <el-button icon="el-icon-data-line" @click="preview">预览</el-button>
      <el-button icon="el-icon-plus" circle @click="addFormItem"></el-button>
    </div>
    <form-header :title="title" :subTitle="subTitle" ref="header" />
    <FormItem
      v-for="(item,index) in formConfig"
      :ref="'formItem'+index"
      :key="index"
      :index="index+1"
      :isCreated="item.isCreated"
    >
      <el-button icon="el-icon-delete" circle @click="deleteFormItem(index)"></el-button>
    </FormItem>
    <el-dialog title="数据" :visible.sync="dataVisible">
      <pre>{{formData}}</pre>
    </el-dialog>
    <el-dialog title="预览" :visible.sync="previewVisible" width="700px" top="5vh">
      <div>
        <generate-form :formData="formData" @confirm="handleConfirm"/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import FormHeader from './FormHeader.vue';
import FormItem from './FormItem.vue';
import GenerateForm from './GenerateForm.vue';

export default {
  name: 'DynamicForm',
  components: {
    FormHeader,
    FormItem,
    GenerateForm,
  },
  data() {
    return {
      title: '',
      subTitle: '',
      formConfig: [],
      formData: {},
      dataVisible: false,
      previewVisible: false,
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
        title: this.$refs.header.inputTitle,
        subTitle: this.$refs.header.inputSubTitle,
        formConfig: [],
      };
      if (this.formConfig.length > 0) {
        this.formConfig.map((item, index) => {
          data.formConfig.push({ ...this.$refs[`formItem${index}`][0].formJson() });
        });
      }
      // console.log(data);
      this.formData = data;
    },
    showFormJson() {
      this.getFormJson();
      this.dataVisible = true;
    },
    preview() {
      this.getFormJson();
      this.previewVisible = true;
    },
    handleConfirm(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.d-form {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  min-width: 700px;
  padding: 20px;
  overflow: auto;
  .opeate {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
