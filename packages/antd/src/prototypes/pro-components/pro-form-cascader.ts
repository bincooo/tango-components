import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProFormCascader: IComponentPrototype = {
  name: 'ProFormCascader',
  title: '级联选择',
  icon: 'icon-jilianxuanze',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 级联选择框，从一组相关联的数据集合进行选择，如省市区，公司层级，事物分类等',
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
      title: '占位符',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '值',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'defaultValue',
      title: '默认值',
      setter: 'expressionSetter',
      group: 'basic',
    },
    {
      name: 'options',
      title: '选项列表',
      tip: '支持异步数据载入',
      setter: 'expressionSetter',
      group: 'basic',
      initValue: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                { value: 'xihu', label: 'West Lake' },
              ],
            },
          ],
        },
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
      title: '是否允许显示清空',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'showSearch',
      title: '是否显示搜索框',
      setter: 'boolSetter',
    },
    {
      name: 'multiple',
      title: '是否支持多选',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '输入框大小',
      setter: 'pickerSetter',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'medium' },
          { label: '大', value: 'large' },
        ],
      },
    },
    {
      name: 'loadData',
      title: '动态加载选项',
      setter: 'expressionSetter',
      autoCompleteOptions: ['(selectedOptions) => {}'],
      tip: '无法与 showSearch 一起使用',
    },
    {
      name: 'isPreview',
      title: '预览态',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '选择完成后的回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(value, selectedOptions) => {}'],
    },
    {
      name: 'onSearch',
      title: '搜索输入时的回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
