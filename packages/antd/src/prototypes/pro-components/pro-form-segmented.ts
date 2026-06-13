import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormSegmented: IComponentPrototype = {
  name: 'ProFormSegmented',
  title: '分段控制器',
  icon: 'icon-xuanzeqi',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 分段控制器，展示一组互斥的选项',
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
      title: '当前选中项',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中项',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'options',
      title: '数据源',
      setter: 'optionSetter',
      initValue: [
        { label: '选项1', value: 'seg1' },
        { label: '选项2', value: 'seg2' },
        { label: '选项3', value: 'seg3' },
      ],
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'block',
      title: '撑满父元素宽度',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '选项变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value) => {}'],
    },
  ],
};
