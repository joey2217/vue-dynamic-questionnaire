<template>
  <div id="app">
    <dynamic-form />
  </div>
</template>

<script>
import { DynamicForm } from './components/DynamicForm';

export default {
  name: 'app',
  components: {
    DynamicForm,
  },
};
</script>

<style lang="scss">
#app{
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  width: 840px;
}
</style>
