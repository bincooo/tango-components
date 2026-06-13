import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormMoney: IComponentPrototype = {
  name: 'ProFormMoney',
  title: '金额输入框',
  icon: 'icon-jishuqi',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 金额输入框，用于输入金额类型的数据',
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
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认值',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'precision',
      title: '数值精度',
      setter: 'numberSetter',
    },
    {
      name: 'prefix',
      title: '前缀',
      tip: '金额符号，默认为 ¥',
      setter: 'textSetter',
      defaultValue: '¥',
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
      name: 'fieldSymbol',
      title: '是否将符号视为表单值的一部分',
      setter: 'boolSetter',
    },
    {
      name: 'symbolAlign',
      title: '符号位置',
      setter: 'choiceSetter',
      options: [
        { label: '左侧', value: 'left' },
        { label: '右侧', value: 'right' },
      ],
    },
    {
      name: 'onChange',
      title: '值变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value) => {}'],
    },
  ],
};
