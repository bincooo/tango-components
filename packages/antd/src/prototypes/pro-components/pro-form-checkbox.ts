import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormCheckboxGroup: IComponentPrototype = {
  name: 'ProFormCheckbox.Group',
  importAlias: 'ProFormCheckbox',
  title: '复选框组',
  icon: 'icon-duoxuankuang',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 复选框组，在一组可选项中进行多项选择',
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
      title: '指定选中项',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中项',
      setter: 'expressionSetter',
      initValue: ['option1'],
      group: 'basic',
    },
    {
      name: 'options',
      title: '指定可选项',
      tip: '支持异步数据载入',
      setter: 'optionSetter',
      initValue: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' },
      ],
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '整组失效',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'isPreview',
      title: '是否开启预览',
      setter: 'boolSetter',
      group: 'basic',
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
      name: 'onChange',
      title: '变化时回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(checkedValue) => {}'],
    },
  ],
};
