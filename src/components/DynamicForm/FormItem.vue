<template>
  <div class="form-item">
    <div class="form-item-top">
      <div class="index">{{index}}</div>
      <div v-if="isCreated" class="title">
        <input v-model="input" type="textarea" placeholder="输入问题" />
        <span></span>
      </div>
      <div v-else class="title">
        <input v-model="questionText" readonly type="textarea" placeholder="输入问题" />
        <span></span>
      </div>
      <div v-if="isCreated" class="select">
        <el-select v-model="current" placeholder="请选择">
          <el-option-group v-for="group in groupOptions" :key="group.label" :label="group.label">
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
      <component v-if="isCreated" v-bind:is="current" :isCreated="isCreated" ref="component"></component>
      <component v-else v-bind:is="component" :option="options" :format="format" ref="component"></component>
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
    component: {
      type: String,
      default: 'SingleText',
    },
    options: {
      type: Array,
      default: () => [],
    },
    questionText: {
      type: String,
      default: '',
    },
    index: {
      type: [String, Number],
      default: 0,
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd',
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
      current: 'SingleText',
      input: '',
      groupOptions: [
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
        questionText: this.isCreated ? this.input : this.questionText,
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
    align-items: center;
    flex-wrap: wrap;
    .index {
      color: #0188fb;
      font-size: 26px;
      font-weight: 550;
      padding: 0 10px;
    }
    .title {
      position: relative;
      flex-grow: 1;
      input {
        width: 100%;
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
        color: rgba($color: #000000, $alpha: 0.7);
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
    .select {
      padding-left: 20px;
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
