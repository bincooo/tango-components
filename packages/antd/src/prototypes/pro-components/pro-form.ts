import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const ProForm: IComponentPrototype = {
  name: 'ProForm',
  title: '高级表单',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'container',
  package: '@ant-design/pro-components',
  help: 'ProComponents 提供的高级表单组件，在 antd Form 基础上增加了列表设置、布局、通用 action 等功能。',
  hasChildren: true,
  initChildren: `
<ProFormText name="name" label="名称" />
<ProFormText name="desc" label="描述" />
`,
  relatedImports: ['ProFormText'],
  props: [
    ...StylePrototypes,
    {
      name: 'layout',
      title: '表单布局',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '水平布局', value: 'horizontal' },
          { label: '垂直布局', value: 'vertical' },
          { label: '行内布局', value: 'inline' },
        ],
      },
    },
    {
      name: 'grid',
      title: '开启栅格布局',
      setter: 'boolSetter',
      tip: '开启后子元素会按照栅格规则排列',
    },
    {
      name: 'rowProps',
      title: 'Row 配置',
      setter: 'expressionSetter',
      tip: '开启 grid 时生效，配置 Row 属性',
    },
    {
      name: 'colProps',
      title: 'Col 配置',
      setter: 'expressionSetter',
      tip: '开启 grid 时生效，配置 Col 属性',
    },
    {
      name: 'labelCol',
      title: 'label 标签布局',
      setter: 'expressionSetter',
    },
    {
      name: 'wrapperCol',
      title: '控件布局',
      setter: 'expressionSetter',
    },
    {
      name: 'colon',
      title: '是否显示标签后的冒号',
      setter: 'boolSetter',
    },
    {
      name: 'initialValues',
      title: '表单默认值',
      setter: 'expressionSetter',
    },
    {
      name: 'isPreview',
      title: '是否为预览态',
      setter: 'boolSetter',
    },
    {
      name: 'readonly',
      title: '只读模式',
      setter: 'boolSetter',
    },
    {
      name: 'submitter',
      title: '提交按钮相关配置',
      setter: 'expressionSetter',
      tip: '可设置为 false 隐藏提交按钮，或配置按钮属性',
    },
    {
      name: 'syncToUrl',
      title: '同步参数到 URL',
      setter: 'boolSetter',
      tip: '是否将表单值同步到 URL 参数',
    },
    {
      name: 'omitNil',
      title: '是否忽略值为 nil 的字段',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'onFinish',
      title: '提交表单成功回调',
      setter: 'eventSetter',
      tip: '回调格式：(values) => Promise<any>',
    },
    {
      name: 'onFinishFailed',
      title: '提交表单失败回调',
      setter: 'eventSetter',
      tip: '回调格式：({ values, errorFields, outOfDate }) => void',
    },
    {
      name: 'onFieldsChange',
      title: '表单字段变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedFields, allFields) => void',
    },
    {
      name: 'onValuesChange',
      title: '表单字段值变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedValues, allValues) => void',
    },
  ],
};
