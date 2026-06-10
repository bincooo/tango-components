import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormSelect: IComponentPrototype = {
  name: 'ProFormSelect',
  title: '下拉选择框',
  icon: 'icon-shurukuang',
  type: 'element',
  package: '@ant-design/pro-components',
  help: '弹出一个下拉菜单给用户选择操作',
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
      name: 'defaultValue',
      title: '默认内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'maxLength',
      title: '最大长度',
      setter: 'numberSetter',
    },
    {
      name: 'size',
      title: '控件大小',
      tip: '控件大小。注：标准表单内的输入框大小限制为 large',
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
      name: 'allowClear',
      title: '允许清除内容',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}}) => {}'],
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
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
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'options',
      title: '回车回调',
      setter: 'expressionSetter',
      group: 'basic',
    },
  ],
};
