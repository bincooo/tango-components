import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormTreeSelect: IComponentPrototype = {
  name: 'ProFormTreeSelect',
  title: '树选择',
  icon: 'icon-shuxingjiegou',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 树型选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构时使用',
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
      title: '选择框默认文字',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前选中的条目',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认选中的条目',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'treeData',
      title: '数据源',
      setter: 'expressionSetter',
      group: 'basic',
      initValue: [
        {
          title: 'Node1',
          value: '0-0',
          children: [
            { title: 'Child Node1', value: '0-0-1' },
            { title: 'Child Node2', value: '0-0-2' },
          ],
        },
        { title: 'Node2', value: '0-1' },
      ],
    },
    {
      name: 'fieldNames',
      title: '数据源的字段映射',
      tip: '当您传入的数据源的字段不是组件期望的字段时，可以使用该属性进行自定义映射',
      props: [
        { name: 'label', title: '标签', setter: 'textSetter' },
        { name: 'value', title: '值', setter: 'textSetter' },
        { name: 'children', title: '子结点', setter: 'textSetter' },
      ],
    },
    {
      name: 'allowClear',
      title: '是否显示清除按钮',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
    },
    {
      name: 'multiple',
      title: '支持多选',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showSearch',
      title: '可搜索',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'treeCheckable',
      title: '显示 Checkbox',
      setter: 'boolSetter',
    },
    {
      name: 'treeDefaultExpandAll',
      title: '默认展开所有树节点',
      setter: 'boolSetter',
    },
    {
      name: 'treeLine',
      title: '展示线条样式',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '选择框大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'isPreview',
      title: '预览态',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '值变化时回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value, label, extra) => {}'],
    },
    {
      name: 'onSearch',
      title: '文本框值变化时回调',
      tip: '仅在可搜索项为 true 时生效',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onSelect',
      title: '被选中时调用',
      tip: '格式：(value, node, extra) => {}',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onTreeExpand',
      title: '展示节点时调用',
      tip: '格式：(expandedKeys) => {}',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
