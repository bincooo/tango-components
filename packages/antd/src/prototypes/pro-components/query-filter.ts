import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const QueryFilter: IComponentPrototype = {
  name: 'QueryFilter',
  title: '查询筛选表单',
  exportType: 'namedExport',
  icon: 'icon-shurukuang',
  type: 'container',
  package: '@ant-design/pro-components',
  help: '查询筛选表单，一般用于表格上方的搜索区域，支持折叠展开',
  hasChildren: true,
  initChildren: `
<ProFormText name="name" label="名称" />
<ProFormSelect name="status" label="状态" />
`,
  relatedImports: ['ProFormText', 'ProFormSelect'],
  props: [
    ...StylePrototypes,
    {
      name: 'collapsed',
      title: '是否折叠',
      tip: '受控模式下控制折叠状态',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'defaultCollapsed',
      title: '默认折叠',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'collapseRender',
      title: '自定义折叠按钮',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'span',
      title: '表单项栅格宽度',
      tip: '表单项占用的栅格数，支持 colSize 配置',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultColsNumber',
      title: '默认展示的表单项数量',
      tip: '超过此数量的表单项会被折叠',
      setter: 'numberSetter',
      defaultValue: 4,
      group: 'basic',
    },
    {
      name: 'labelWidth',
      title: '标签宽度',
      tip: '统一设置 label 的宽度',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'labelAlign',
      title: '标签对齐方式',
      setter: 'choiceSetter',
      options: [
        { label: '左对齐', value: 'left' },
        { label: '右对齐', value: 'right' },
      ],
    },
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
      name: 'split',
      title: '是否使用分割线',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'preserveGutter',
      title: '保留行间距',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'isPreview',
      title: '是否为预览态',
      setter: 'boolSetter',
    },
    {
      name: 'initialValues',
      title: '表单默认值',
      setter: 'expressionSetter',
    },
    {
      name: 'onFinish',
      title: '提交表单成功回调',
      setter: 'eventSetter',
      tip: '回调格式：(values) => Promise<any>',
    },
    {
      name: 'onReset',
      title: '重置表单回调',
      setter: 'eventSetter',
      tip: '点击重置按钮时触发',
    },
    {
      name: 'onCollapse',
      title: '折叠状态变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(collapsed: boolean) => void',
    },
    {
      name: 'onValuesChange',
      title: '表单字段值变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedValues, allValues) => void',
    },
  ],
};
