<template>
  <div id="app">
    <dynamic-form />
    <generate-form />
  </div>
</template>

<script>
import { DynamicForm, GenerateForm } from './components/DynamicForm';

export default {
  name: 'app',
  components: {
    DynamicForm,
    GenerateForm,
  },
};
</script>

<style lang="scss">
#app{
  margin: 20px;
  padding: 20px;
}
</style>
