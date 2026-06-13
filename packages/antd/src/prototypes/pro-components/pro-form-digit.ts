import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormDigit: IComponentPrototype = {
  name: 'ProFormDigit',
  title: '数字输入框',
  icon: 'icon-jishuqi',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 数字输入框，用于输入数值类型的数据',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    ...InstancePrototypes,
    {
      name: 'label',
      title: '标签',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'name',
      title: '表单字段',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'placeholder',
      title: '占位符',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前值',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认值',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'min',
      title: '最小值',
      setter: 'numberSetter',
    },
    {
      name: 'max',
      title: '最大值',
      setter: 'numberSetter',
    },
    {
      name: 'step',
      title: '步长',
      tip: '每次改变步数，可以为小数',
      setter: 'numberSetter',
    },
    {
      name: 'precision',
      title: '数值精度',
      tip: '数值精度，配置 formatter 时会以 formatter 为准',
      setter: 'numberSetter',
    },
    {
      name: 'formatter',
      title: '格式',
      tip: '指定输入框展示值的格式',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'parser',
      title: '转换回数字的方式',
      tip: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'size',
      title: '控件大小',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'default' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'controls',
      title: '增减按钮',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'addonAfter',
      title: '后置标签',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'addonBefore',
      title: '前置标签',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'prefix',
      title: '前缀图标',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'stringMode',
      title: '字符值模式',
      tip: '开启后支持高精度小数，同时 onChange 将返回 string 类型',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '值变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value) => {}'],
    },
    {
      name: 'onPressEnter',
      title: '回车回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onStep',
      title: '点击步数回调',
      tip: '点击上下箭头的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
