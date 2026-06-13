import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormSwitch: IComponentPrototype = {
  name: 'ProFormSwitch',
  title: '开关',
  icon: 'icon-kaiguan',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 开关选择器，需要表示开关状态/两种状态之间的切换控件',
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
      name: 'checked',
      title: '是否选中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'defaultChecked',
      title: '初始选中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'checkedChildren',
      title: '选中时的内容',
      setter: 'textSetter',
    },
    {
      name: 'unCheckedChildren',
      title: '非选中时的内容',
      setter: 'textSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'loading',
      title: '加载中的开关',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '开关大小',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '小', value: 'small' },
        ],
      },
      setter: 'pickerSetter',
    },
    {
      name: 'onChange',
      title: '变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(checked, event) => {}'],
    },
  ],
};
