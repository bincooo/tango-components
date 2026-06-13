import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from '../common';
import { Pagination } from '../pagination';

export const ProTable: IComponentPrototype = {
  name: 'ProTable',
  title: '高级表格',
  exportType: 'namedExport',
  icon: 'icon-biaoge',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProComponents 提供的高级表格组件，在 antd Table 基础上增加了搜索、工具栏、数据请求等功能。',
  hasChildren: false,
  initChildren: `
<ProTable
  columns={[
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address' },
  ]}
  dataSource={[
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  ]}
/>
`,
  props: [
    ...StylePrototypes,
    {
      name: 'columns',
      title: '表格列',
      setter: 'columnSetter',
      initValue: [
        { title: '姓名', dataIndex: 'name', key: 'name' },
        { title: '年龄', dataIndex: 'age', key: 'age' },
        { title: '住址', dataIndex: 'address', key: 'address' },
      ],
      group: 'basic',
    },
    {
      name: 'dataSource',
      title: '静态数据源',
      tip: '支持异步数据载入，与 request 互斥，优先使用 request',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'request',
      title: '获取数据的方法',
      tip: '格式：(params, sort, filter) => Promise<{ data, success, total }>',
      setter: 'expressionSetter',
      group: 'basic',
      autoCompleteOptions: [
        `async (params, sort, filter) => {
  return {
    data: [],
    success: true,
    total: 0,
  };
}`,
      ],
    },
    {
      name: 'params',
      title: '请求参数',
      tip: '用于 request 的额外参数，变化时会触发 request 重新执行',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'rowKey',
      title: '数据主键',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'search',
      title: '搜索配置',
      tip: 'false 时隐藏搜索表单，可配置搜索表单属性',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'toolBarRender',
      title: '工具栏渲染',
      tip: '格式：() => ReactNode[]',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'pagination',
      title: '分页设置',
      props: Pagination.props,
    },
    {
      name: 'rowSelection',
      title: '是否开启多选',
      defaultValue: false,
      props: [
        {
          name: 'type',
          title: '多选/单选',
          setter: 'choiceSetter',
          options: [
            { label: '多选', value: 'checkbox' },
            { label: '单选', value: 'radio' },
          ],
        },
        {
          name: 'fixed',
          title: '把选择框列固定在左边',
          setter: 'boolSetter',
        },
        {
          name: 'selectedRowKeys',
          title: '选中的项目',
          setter: 'expressionSetter',
          placeholder: '{[]}',
        },
        {
          name: 'onChange',
          title: '选中项变化时',
          setter: 'actionSetter',
          autoCompleteOptions: ['(selectedRowKeys, selectedRows) => {}'],
        },
      ],
    },
    {
      name: 'expandable',
      title: '配置展开属性',
      props: [
        {
          name: 'rowExpandable',
          title: '设置是否允许行展开',
          tip: '(record) => boolean',
          setter: 'expressionSetter',
        },
        {
          name: 'expandRowByClick',
          title: '点击行时可展开',
          setter: 'boolSetter',
        },
        {
          name: 'onExpand',
          title: '点击展开图标事件',
          setter: 'eventSetter',
          tip: '(expanded, record) => {}',
        },
        {
          name: 'defaultExpandAllRows',
          title: '默认是否展开所有行',
          setter: 'boolSetter',
        },
        {
          name: 'expandedRowKeys',
          title: '展开的行（受控）',
          setter: 'expressionSetter',
        },
      ],
    },
    {
      name: 'scroll',
      title: '表格滚动设置',
      props: [
        {
          name: 'scrollToFirstRowOnChange',
          title: '当分页、排序、筛选变化后是否滚动到表格顶部',
          setter: 'boolSetter',
        },
        {
          name: 'x',
          title: '横向滚动',
          tip: "也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 'max-content'",
          setter: 'expressionSetter',
        },
        {
          name: 'y',
          title: '纵向滚动',
          tip: '也可用于指定滚动区域的高，可以设置为像素值',
          setter: 'expressionSetter',
        },
      ],
    },
    {
      name: 'headerTitle',
      title: '表格头部标题',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'title',
      title: '表格标题',
      tip: '格式: (currentPageData) => {}',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'footer',
      title: '表格尾部',
      setter: 'expressionSetter',
    },
    {
      name: 'size',
      title: '表格大小',
      setter: 'choiceSetter',
      options: [
        { label: '默认', value: 'default' },
        { label: '中等', value: 'middle' },
        { label: '小', value: 'small' },
      ],
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '显示边框',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showHeader',
      title: '显示表头',
      setter: 'boolSetter',
      defaultValue: true,
      group: 'basic',
    },
    {
      name: 'loading',
      title: '表格加载中',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'sticky',
      title: '粘性头部和滚动条',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'options',
      title: '工具栏设置',
      tip: '设置表格右上角的工具（密度、全屏、刷新等），设为 false 可隐藏',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'dateFormat',
      title: '日期格式',
      setter: 'textSetter',
      group: 'advanced',
    },
    {
      name: 'mapKeyEnum',
      title: '枚举值映射',
      tip: '用于将值映射为显示文本，格式：Record<string, Record<string, ReactNode>>',
      setter: 'expressionSetter',
      group: 'advanced',
    },
    {
      name: 'onChange',
      title: '分页、排序、筛选变化',
      autoCompleteOptions: ['(pagination, filters, sorter, extra) => {}'],
      setter: 'expressionSetter',
      group: 'event',
    },
    {
      name: 'onLoad',
      title: '数据加载完成后触发',
      tip: '格式：(dataSource) => void',
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
    {
      name: 'onDataSourceChange',
      title: '数据源变化时触发',
      tip: '格式：(dataSource) => void',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onRow',
      title: '设置行属性',
      autoCompleteOptions: ['(record, index) => {}'],
      setter: 'expressionSetter',
      group: 'advanced',
    },
  ],
};
