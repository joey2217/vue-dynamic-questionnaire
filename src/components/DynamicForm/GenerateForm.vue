<template>
  <div>
    <form-header ref="header" readonly/>
    <FormItem
      v-for="(item,index) in formConfig"
      :ref="'formItem'+index"
      :key="index"
      :index="index+1"
      :component="item.formJson.component"
      :options="item.formJson.options"
      :questionText="item.questionText"
    >
    </FormItem>
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
  mounted() {
    const { title, subTitle, formConfig } = this.formData;
    this.$refs.header.inputTitle = title;
    this.$refs.header.inputSubTitle = subTitle;
    this.formConfig = [...formConfig];
  },
};
</script>

<style lang="scss" scoped>
</style>
