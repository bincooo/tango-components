import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormRate: IComponentPrototype = {
  name: 'ProFormRate',
  title: '评分',
  icon: 'icon-pingfen',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 评分组件，用于对评价进行展示或对事物进行快速的评级操作',
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
      title: '当前分数',
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
      name: 'count',
      title: 'star 总数',
      setter: 'numberSetter',
    },
    {
      name: 'allowHalf',
      title: '是否允许半选',
      setter: 'boolSetter',
    },
    {
      name: 'allowClear',
      title: '是否允许再次点击后清除',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '只读，无法进行交互',
      setter: 'boolSetter',
    },
    {
      name: 'character',
      title: '自定义字符',
      setter: 'expressionSetter',
    },
    {
      name: 'tooltips',
      title: '自定义每项的提示信息',
      setter: 'expressionSetter',
    },
    {
      name: 'onChange',
      title: '选择时的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value) => {}'],
    },
    {
      name: 'onHoverChange',
      title: '鼠标经过时数值变化的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
