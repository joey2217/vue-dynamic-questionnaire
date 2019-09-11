<template>
  <div>
    <form-header ref="header" readonly />
    <FormItem
      v-for="(item,index) in formConfig"
      :ref="'formItem'+index"
      :key="index"
      :index="index+1"
      :component="item.formJson.component"
      :options="item.formJson.options"
      :questionText="item.questionText"
      :format="item.formJson.value"
    ></FormItem>
    <div class="slot">
      <el-button type="primary" @click="submit">确定</el-button>
    </div>
  </div>
</template>

<script>
import FormHeader from './FormHeader.vue';
import FormItem from './FormItem.vue';

export default {
  name: 'GenerateForm',
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  components: {
    FormHeader,
    FormItem,
  },
  data() {
    return {
      formConfig: [],
      formJson: {},
    };
  },
  watch: {
    formData: {
      handler(val) {
        const { title, subTitle, formConfig } = val;
        this.$refs.header.inputTitle = title;
        this.$refs.header.inputSubTitle = subTitle;
        this.formConfig = [...formConfig];
      },
      deep: true,
    },
  },
  methods: {
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
      this.formJson = data;
    },
    submit() {
      this.getFormJson();
      this.$emit('confirm', this.formJson);
    },
  },
  mounted() {
    const { title, subTitle, formConfig } = this.formData;
    this.$refs.header.inputTitle = title;
    this.$refs.header.inputSubTitle = subTitle;
    this.formConfig = [...formConfig];
  },
};
</script>

<style lang="scss" scoped>
.slot {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
