import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Collapse: IComponentPrototype = {
  name: 'Collapse',
  title: '折叠面板',
  package: 'antd',
  icon: 'icon-zhediemianban',
  help: '可以折叠/展开的内容区域，对复杂区域进行分组和隐藏，保持页面的整洁',
  type: 'element',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'accordion',
      title: '手风琴模式',
      setter: 'boolSetter',
    },
    {
      name: 'activeKey',
      title: '当前激活 tab 面板的 key',
      setter: 'textSetter',
    },
    {
      name: 'bordered',
      title: '带边框风格的折叠面板',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'collapsible',
      title: '可折叠',
      tip: '所有子面板是否可折叠或指定可折叠触发区域',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'header', value: 'header' },
          { label: 'disabled', value: 'disabled' },
        ],
      },
    },
    {
      name: 'defaultActiveKey',
      title: '初始化选中面板的 key',
      setter: 'textSetter',
    },
    {
      name: 'destroyInactivePanel',
      title: '销毁折叠隐藏的面板',
      setter: 'boolSetter',
    },
    {
      name: 'expandIcon',
      title: '自定义切换图标',
      setter: 'expressionSetter',
      tip: '例：{() => <Icon type="AccountBookOutlined" />}',
    },
    {
      name: 'expandIconPosition',
      title: '设置图标位置',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'start', value: 'start' },
          { label: 'end', value: 'end' },
        ],
      },
    },
    {
      name: 'ghost',
      title: '透明且无边框',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '切换面板的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(key)=>{}'],
    },
    {
      name: 'items',
      title: '折叠项目内容',
      setter: 'expressionSetter',
      tip: '例：{() => <Icon type="AccountBookOutlined" />}',
      initValue: `{{[
      {
        key: "1",
        label: "This is panel header 1",
        children: (
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        ),
      },
      {
        key: "2",
        label: "This is panel header 2",
        children: (
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        ),
      },
      {
        key: "3",
        label: "This is panel header 3",
        children: (
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        ),
      },
    ]}}`
    },
  ],
};

