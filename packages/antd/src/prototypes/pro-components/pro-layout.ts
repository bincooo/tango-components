import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';

export const ProLayout: IComponentPrototype = {
  name: 'ProLayout',
  title: '高级布局',
  exportType: 'namedExport',
  icon: 'icon-buju',
  type: 'page',
  package: '@ant-design/pro-components',
  help: 'ProComponents 提供的高级布局组件，提供标准的页面布局方案，包括导航、侧边栏、内容区域等。',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'title',
      title: '站点标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'logo',
      title: '站点 Logo',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'layout',
      title: '布局方式',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '侧边栏', value: 'side' },
          { label: '顶部', value: 'top' },
          { label: '混合', value: 'mix' },
        ],
      },
      defaultValue: 'side',
      group: 'basic',
    },
    {
      name: 'navTheme',
      title: '导航主题',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '亮色', value: 'light' },
          { label: '暗色', value: 'dark' },
          { label: '跟随系统', value: 'realDark' },
        ],
      },
      defaultValue: 'light',
    },
    {
      name: 'contentStyle',
      title: '内容区域样式',
      setter: 'expressionSetter',
      setterProps: { expressionType: 'cssObject' },
      group: 'style',
    },
    {
      name: 'fixSiderbar',
      title: '固定侧边栏',
      setter: 'boolSetter',
    },
    {
      name: 'fixedHeader',
      title: '固定头部',
      setter: 'boolSetter',
    },
    {
      name: 'headerTheme',
      title: '头部主题',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '亮色', value: 'light' },
          { label: '暗色', value: 'dark' },
        ],
      },
    },
    {
      name: 'menuData',
      title: '菜单数据',
      tip: '菜单数据配置，格式与 ProLayout 的 menuData 一致',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'menuHeaderRender',
      title: '自定义菜单头部',
      tip: '格式：(logo, title, props) => ReactNode',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'menuItemRender',
      title: '自定义菜单项渲染',
      tip: '格式：(item, dom) => ReactNode',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'headerContentRender',
      title: '自定义头部内容区',
      tip: '格式：() => ReactNode',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'footerRender',
      title: '自定义页脚',
      tip: '格式：() => ReactNode，设为 false 可隐藏页脚',
      setter: 'expressionSetter',
    },
    {
      name: 'collapsed',
      title: '侧边栏折叠状态（受控）',
      setter: 'boolSetter',
    },
    {
      name: 'defaultCollapsed',
      title: '侧边栏默认折叠',
      setter: 'boolSetter',
    },
    {
      name: 'disableContentMargin',
      title: '禁用内容区域 margin',
      setter: 'boolSetter',
    },
    {
      name: 'siderWidth',
      title: '侧边栏宽度',
      setter: 'numberSetter',
      defaultValue: 208,
    },
    {
      name: 'onCollapse',
      title: '侧边栏折叠回调',
      setter: 'eventSetter',
      tip: '回调格式：(collapsed: boolean) => void',
    },
    {
      name: 'onMenuHeaderClick',
      title: '菜单头部点击回调',
      setter: 'eventSetter',
    },
  ],
};
