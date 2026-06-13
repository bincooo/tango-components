import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const ProCard: IComponentPrototype = {
  name: 'ProCard',
  title: '高级卡片',
  exportType: 'namedExport',
  icon: 'icon-kapian',
  type: 'container',
  package: '@ant-design/pro-components',
  help: 'ProComponents 提供的高级卡片组件，支持标题、操作区、分割、内嵌卡片等功能。',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'title',
      title: '标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'subTitle',
      title: '二级标题',
      setter: 'textSetter',
    },
    {
      name: 'tooltip',
      title: '标题提示信息',
      setter: 'textSetter',
    },
    {
      name: 'extra',
      title: '操作区',
      tip: '位于 title 行的行尾',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '是否有边框',
      setter: 'boolSetter',
    },
    {
      name: 'hoverable',
      title: '鼠标悬停时是否显示阴影',
      setter: 'boolSetter',
    },
    {
      name: 'collapsible',
      title: '是否可折叠',
      setter: 'boolSetter',
    },
    {
      name: 'defaultCollapsed',
      title: '默认折叠状态',
      setter: 'boolSetter',
    },
    {
      name: 'collapsed',
      title: '折叠状态（受控）',
      setter: 'boolSetter',
    },
    {
      name: 'gutter',
      title: '子卡片之间的间距',
      tip: '设置子卡片之间的间距，支持数字或数组形式 [水平间距, 垂直间距]',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'direction',
      title: '子元素排列方向',
      setter: 'choiceSetter',
      options: [
        { label: '水平', value: 'row' },
        { label: '垂直', value: 'column' },
      ],
      defaultValue: 'row',
    },
    {
      name: 'ghost',
      title: '幽灵模式',
      tip: '幽灵模式即无边框、无背景色',
      setter: 'boolSetter',
    },
    {
      name: 'loading',
      title: '加载中状态',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '卡片大小',
      setter: 'choiceSetter',
      options: [
        { label: '默认', value: 'default' },
        { label: '小', value: 'small' },
      ],
    },
    {
      name: 'tabs',
      title: '标签页配置',
      tip: '配置后卡片顶部展示为标签页形式',
      setter: 'expressionSetter',
    },
    {
      name: 'headerBordered',
      title: '标题栏是否带分割线',
      setter: 'boolSetter',
    },
    {
      name: 'onCollapse',
      title: '折叠状态变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(collapsed: boolean) => void',
    },
    {
      name: 'onTabsChange',
      title: '标签页切换回调',
      setter: 'actionSetter',
      tip: '回调格式：(activeKey: string) => void',
      group: 'event',
    },
  ],
};
