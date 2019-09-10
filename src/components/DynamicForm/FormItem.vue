<template>
  <div class="form-item">
    <div class="form-item-top">
      <div class="title">
        <input v-model="input" placeholder="请输入内容" />
        <span></span>
      </div>
      <div class="select">
        <el-select v-model="current" placeholder="请选择">
          <el-option-group v-for="group in options" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
        </el-select>
      </div>
    </div>
    <div class="form-item-content">
      <component v-bind:is="current" :isCreated="isCreated" ref="component"></component>
    </div>
    <div class="form-item-footer">
      <div class="slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SingleText from './components/SingleText.vue';
import MultiText from './components/MultiText.vue';
import Radio from './components/Radio.vue';
import Checkbox from './components/Checkbox.vue';
import Select from './components/Select.vue';
import Date from './components/Date.vue';
import Time from './components/Time.vue';

export default {
  name: 'FormItem',
  props: {
    isCreated: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SingleText,
    MultiText,
    Radio,
    Checkbox,
    Select,
    Date,
    Time,
  },
  data() {
    return {
      current: '',
      input: '',
      options: [
        {
          label: '文本',
          options: [
            {
              value: 'SingleText',
              label: '单行文本',
            },
            {
              value: 'MultiText',
              label: '多行文本',
            },
          ],
        },
        {
          label: '选择',
          options: [
            {
              value: 'Radio',
              label: '单选',
            },
            {
              value: 'Checkbox',
              label: '多选',
            },
            {
              value: 'Select',
              label: '下拉选择',
            },
          ],
        },
        {
          label: '日期时间',
          options: [
            {
              value: 'Date',
              label: '日期',
            },
            {
              value: 'Time',
              label: '时间',
            },
          ],
        },
      ],
    };
  },
  methods: {
    formJson() {
      return {
        input: this.input,
        formJson: this.$refs.component.formJson,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  margin-top: 20px;
  padding: 20px;
  &-top {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .title {
      position: relative;
      input {
        width: 6.5em;
        height: 36px;
        color: #000;
        font-size: inherit;
        font-family: inherit;
        background-color: transparent;
        border: 1px solid transparent;
        border-bottom-color: hsla(185, 100%, 62%, 0.2);
      }

      input:focus {
        outline: none;
      }

      input::placeholder {
        color: hsla(0, 0%, 100%, 0.6);
      }

      span {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: #3cefff;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.5s ease;
      }

      input:focus ~ span {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
  }
  &-content {
    padding: 20px 0;
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
