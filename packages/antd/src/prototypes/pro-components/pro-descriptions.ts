import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const ProDescriptions: IComponentPrototype = {
  name: 'ProDescriptions',
  title: '高级描述列表',
  exportType: 'namedExport',
  icon: 'icon-miaoshu',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProComponents 提供的高级描述列表组件，在 antd Descriptions 基础上增加了数据请求、列配置等功能。',
  hasChildren: false,
  props: [
    ...StylePrototypes,
    {
      name: 'columns',
      title: '列配置',
      tip: '描述列表的列配置，支持 valueType 渲染',
      setter: 'columnSetter',
      initValue: [
        { title: '姓名', dataIndex: 'name' },
        { title: '年龄', dataIndex: 'age' },
        { title: '住址', dataIndex: 'address' },
      ],
      group: 'basic',
    },
    {
      name: 'dataSource',
      title: '数据源',
      tip: '描述列表的数据对象',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'request',
      title: '获取数据的方法',
      tip: '格式：() => Promise<{ data }>',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'params',
      title: '请求参数',
      tip: '用于 request 的额外参数，变化时会触发 request 重新执行',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'title',
      title: '列表标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'tooltip',
      title: '标题提示信息',
      setter: 'textSetter',
    },
    {
      name: 'bordered',
      title: '是否展示边框',
      setter: 'boolSetter',
    },
    {
      name: 'column',
      title: '列数',
      setter: 'numberSetter',
      initValue: 3,
    },
    {
      name: 'size',
      title: '设置列表的大小',
      tip: '仅在展示边框时有效',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '默认', value: 'default' },
          { label: '中', value: 'middle' },
          { label: '小', value: 'small' },
        ],
      },
    },
    {
      name: 'extra',
      title: '标题栏自定义操作区',
      setter: 'expressionSetter',
    },
    {
      name: 'labelStyle',
      title: '标签样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'contentStyle',
      title: '内容样式',
      setter: 'expressionSetter',
      group: 'style',
    },
    {
      name: 'editable',
      title: '是否可编辑',
      setter: 'boolSetter',
    },
    {
      name: 'onLoad',
      title: '数据加载完成后触发',
      tip: '格式：(data) => void',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onRequestError',
      title: '数据加载失败时触发',
      tip: '格式：(error) => void',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
