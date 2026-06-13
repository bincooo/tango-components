import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormRadioGroup: IComponentPrototype = {
  name: 'ProFormRadio.Group',
  importAlias: 'ProFormRadio',
  title: '单选框组',
  icon: 'icon-danxuankuang',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 单选框组，一组互斥的 Radio 配合使用',
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
      name: 'value',
      title: '选中的值',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中值',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'options',
      title: '数据源',
      tip: '支持异步数据载入',
      setter: 'optionSetter',
      initValue: [
        { label: '选项1', value: 'radio1' },
        { label: '选项2', value: 'radio2' },
        { label: '选项3', value: 'radio3' },
      ],
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '禁选所有子单选器',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'direction',
      title: '显示方向',
      setter: 'choiceSetter',
      defaultValue: 'horizontal',
      options: [
        { label: '水平展示', value: 'horizontal' },
        { label: '垂直展示', value: 'vertical' },
      ],
    },
    {
      name: 'optionType',
      title: '子元素类型',
      tip: '用于设置 Radio options 类型',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '按钮', value: 'button' },
        ],
      },
      group: 'advanced',
    },
    {
      name: 'size',
      title: '大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'fieldNames',
      title: '数据源的字段映射',
      tip: '当您传入的数据源的字段不是组件期望的字段时，可以使用该属性进行自定义映射',
      props: [
        { name: 'label', title: '标签', setter: 'textSetter' },
        { name: 'value', title: '值', setter: 'textSetter' },
      ],
      group: 'advanced',
    },
    {
      name: 'isPreview',
      title: '是否开启预览',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '选项变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}}) => {}'],
    },
  ],
};
