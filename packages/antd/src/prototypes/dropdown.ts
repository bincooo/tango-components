import { IComponentPrototype } from '@music163/tango-helpers';

export const Dropdown: IComponentPrototype = {
  name: 'Dropdown',
  title: '下拉菜单',
  package: 'antd',
  icon: 'icon-xialacaidan',
  type: 'element',
  initChildren: '<a>Hover me</a>',
  hasChildren: true,
  help: '向下弹出的列表，当页面上的操作命令过多时，用此组件可以收纳操作元素',
  props: [
    {
      name: 'arrow',
      title: '下拉框箭头是否显示',
      setter: 'boolSetter',
    },
    { name: 'disabled', title: '菜单是否禁用', tip: '菜单是否禁用', setter: 'boolSetter' },
    {
      name: 'destroyPopupOnHide',
      title: '关闭后是否销毁 Dropdown',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'getPopupContainer',
      title: '菜单渲染父节点',
      tip: '默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'menu',
      title: '菜单',
      setter: 'expressionSetter',
      initValue:
        `{{{
            items: [
              {
                key: "1", label: (
                  <a target="_blank">
                    1st menu item
                  </a>
                ),
              },
              {
                key: "2",
                label: (
                  <a target="_blank">
                    2nd menu item (disabled)
                  </a>
                ),
                icon: <span />,
                disabled: true,
              },
              {
                key: "3",
                label: (
                  <a target="_blank">
                    3rd menu item (disabled)
                  </a>
                ),
                disabled: true,
              },
            ],
        }}}`,
    },
    {
      name: 'placement',
      title: '菜单弹出位置',
      setter: 'textSetter',
      tip: '菜单弹出位置：bottomLeft｜bottomCenter｜bottomRight｜topLeft｜topCenter｜topRight',
    },
    {
      name: 'trigger',
      title: '触发下拉的行为',
      tip: '移动端不支持 hover',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: 'click', value: 'click' },
          { label: 'hover', value: 'hover' },
          { label: 'contextMenu', value: 'contextMenu' },
        ],
      },
    },
    {
      name: 'open',
      title: '菜单是否显示',
      setter: 'boolSetter',
      defaultValue: true,
    },
    {
      name: 'onOpenChange',
      title: '菜单显示状态改变时调用',
      tip: '参数为 open。点击菜单按钮导致的消失不会触发',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
