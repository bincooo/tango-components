import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormText: IComponentPrototype = {
  name: 'ProFormText',
  title: '输入框',
  icon: 'icon-shurukuang',
  type: 'element',
  package: '@ant-design/pro-components',
  help: '通过鼠标或键盘输入内容，表单域的包装',
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
      name: 'showCount',
      title: '展示字数',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}})=>{}'],
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
      name: 'suffix',
      title: '后缀图标',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'type',
      title: '类型',
      tip: '声明 input 类型，同原生 input 标签的 type 属性',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'onPressEnter',
      title: '回车回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const ProFormTextArea: IComponentPrototype = {
  name: 'ProFormTextArea',
  title: '文本框',
  icon: 'icon-wenbenyu',
  type: 'element',
  package: '@ant-design/pro-components',
  help: '用于多行文本输入',
  hasChildren: false,
  props: [
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
      title: '当前内容',
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
      name: 'maxLength',
      title: '内容最大长度',
      setter: 'numberSetter',
    },
    {
      name: 'rows',
      title: '内容行数',
      tip: '也可在高级选项中设置自适应高度',
      setter: 'numberSetter',
    },
    {
      name: 'allowClear',
      title: '允许清空',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showCount',
      title: '展示字数',
      setter: 'boolSetter',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'autoSize',
      title: '自适应内容高度',
      tip: '可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      tip: '示例： ({target:{value}})=>{console.log(value)}',
    },
    {
      name: 'onPressEnter',
      title: '回车回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onResize',
      title: '调整高度回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const ProFormTextPassword: IComponentPrototype = {
  name: 'ProFormText.Password',
  importAlias: 'ProFormText',
  title: '密码输入',
  icon: 'icon-password',
  type: 'element',
  package: '@ant-design/pro-components',
  help: '需要输入密码的控件',
  hasChildren: false,
  props: [
    ...ProFormText.props,
    {
      name: 'visibilityToggle',
      title: '显示切换按钮',
      setter: 'boolSetter',
    },
    {
      name: 'iconRender',
      title: '自定义切换按钮',
      setter: 'iconSetter',
    },
  ],
};
