export * as prototypes from './prototypes';

/**
 * 物料类型
  common: '基础组件',
  atom: '原子组件',
  snippet: '组合',
  bizComp: '业务组件',
  localComp: '本地组件',
 */
export const menuData = {
  common: [
    {
      title: '基本',
      items: ['Button', 'Space', 'Divider', 'Typography', 'Paragraph', 'Title', 'Text', 'Link'],
    },
    {
      title: '布局',
      items: ['Layout', 'Row', 'Col', 'Card', 'CardGrid', 'CardMeta', 'Tabs', 'TabPane', 'Collapse', 'CollapsePanel'],
    },
    {
      title: '导航',
      items: ['Breadcrumb', 'BreadcrumbItem', 'Menu', 'MenuItem', 'MenuSubMenu', 'MenuItemGroup', 'Steps', 'StepsItem', 'Pagination', 'Anchor', 'AnchorLink', 'PageHeader', 'Dropdown', 'DropdownButton'],
    },
    {
      title: '输入',
      items: ['Input', 'InputGroup', 'Password', 'TextArea', 'Search', 'InputNumber', 'AutoComplete', 'Mentions', 'Select', 'Cascader', 'TreeSelect', 'DatePicker', 'DateRangePicker', 'TimePicker', 'TimeRangePicker'],
    },
    {
      title: '表单',
      items: ['Form', 'FormItem', 'Checkbox', 'CheckboxGroup', 'Radio', 'RadioGroup', 'Switch', 'Slider', 'Rate', 'Upload', 'UploadDragger'],
    },
    {
      title: '展示',
      items: ['Table', 'TableColumn', 'List', 'ListItem', 'ListItemMeta', 'Descriptions', 'DescriptionItem', 'Statistic', 'StatisticCountdown', 'Tag', 'CheckableTag', 'Badge', 'RibbonBadge', 'Avatar', 'AvatarGroup', 'Image', 'ImageList', 'Timeline', 'TimelineItem', 'Tree', 'DirectoryTree', 'TreeNode', 'Calendar', 'Progress', 'Carousel'],
    },
    {
      title: '反馈',
      items: ['Modal', 'Drawer', 'Alert', 'AlertErrorBoundary', 'Popconfirm', 'Popover', 'Tooltip', 'Spin', 'Skeleton', 'Result', 'Empty'],
    },
    {
      title: '其他',
      items: ['Affix', 'BackTop', 'Comment', 'Toolbar', 'Transfer', 'Column', 'Columns'],
    },
    {
      title: '高级布局',
      items: ['ProLayout', 'ProCard'],
    },
    {
      title: '高级表单',
      items: ['ProForm', 'DrawerForm', 'ModalForm', 'QueryFilter'],
    },
    {
      title: '高级输入',
      items: [
        'ProFormText', 'ProFormTextArea', 'ProFormTextPassword',
        'ProFormSelect', 'ProFormDigit', 'ProFormMoney',
        'ProFormDatePicker', 'ProFormDateRangePicker', 'ProFormTimePicker',
        'ProFormRadioGroup', 'ProFormCheckboxGroup', 'ProFormSwitch',
        'ProFormSlider', 'ProFormRate',
        'ProFormUploadButton', 'ProFormUploadDragger',
        'ProFormSegmented', 'ProFormTreeSelect', 'ProFormCascader',
        'ProModalSearchField', 'ProCodeMirrorField',
      ],
    },
    {
      title: '高级展示',
      items: ['ProTable', 'ProList', 'ProDescriptions'],
    },
  ]
};
