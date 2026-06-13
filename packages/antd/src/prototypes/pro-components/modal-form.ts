import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const ModalForm: IComponentPrototype = {
  name: 'ModalForm',
  title: '弹窗表单',
  exportType: 'namedExport',
  icon: 'icon-tanchuang',
  type: 'container',
  package: '@ant-design/pro-components',
  help: '高级 antd 组件，可以创建一个弹窗表单，适合表单内容较少的场景',
  hasChildren: true,
  initChildren: `
<ProFormText name="name" label="名称" />
<ProFormText name="desc" label="描述" />
`,
  relatedImports: ['ProFormText'],
  props: [
    ...StylePrototypes,
    {
      name: 'title',
      title: '弹窗标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'trigger',
      title: '触发元素',
      tip: '触发弹窗打开的元素，一般放置一个按钮',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'open',
      title: '是否打开',
      tip: '受控模式下控制弹窗开关',
      setter: 'boolSetter',
      initValue: true,
    },
    {
      name: 'width',
      title: '弹窗宽度',
      setter: 'numberSetter',
      group: 'basic',
    },
    {
      name: 'modalProps',
      title: 'Modal 属性配置',
      tip: '透传给 antd Modal 的属性',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'destroyOnClose',
      title: '关闭后销毁子元素',
      tip: '默认关闭后状态不会自动清空，如果希望每次打开都是新内容，请设置 destroyOnClose',
      setter: 'boolSetter',
    },
    {
      name: 'maskClosable',
      title: '点击蒙层允许关闭',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'submitter',
      title: '提交按钮相关配置',
      setter: 'expressionSetter',
      tip: '可设置为 false 隐藏提交按钮，或配置按钮属性',
    },
    {
      name: 'isPreview',
      title: '是否为预览态',
      setter: 'boolSetter',
    },
    {
      name: 'onFinish',
      title: '提交数据时触发事件',
      setter: 'eventSetter',
      tip: '回调格式：(values) => Promise<any>，返回 true 或 resolve 则关闭弹窗',
    },
    {
      name: 'onOpenChange',
      title: '弹窗打开/关闭回调',
      setter: 'eventSetter',
      tip: '回调格式：(open: boolean) => void',
    },
    {
      name: 'onValuesChange',
      title: '表单字段值变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedValues, allValues) => void',
    },
    {
      name: 'onFinishFailed',
      title: '提交表单失败回调',
      setter: 'eventSetter',
      tip: '回调格式：({ values, errorFields, outOfDate }) => void',
    },
  ],
};
