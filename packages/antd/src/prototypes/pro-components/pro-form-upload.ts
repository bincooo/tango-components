import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

const ProFormUploadCommonProps: IComponentPrototype['props'] = [
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
    name: 'max',
    title: '最大上传数量',
    setter: 'numberSetter',
    group: 'basic',
  },
  {
    name: 'accept',
    title: '接受上传的文件类型',
    setter: 'textSetter',
  },
  {
    name: 'action',
    title: '上传的地址',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'data',
    title: '额外参数',
    tip: '上传所需额外参数或返回上传额外参数的方法',
    setter: 'expressionSetter',
  },
  {
    name: 'listType',
    title: '上传列表的内建样式',
    setter: 'pickerSetter',
    setterProps: {
      options: [
        { label: 'text', value: 'text' },
        { label: 'picture', value: 'picture' },
        { label: 'picture-card', value: 'picture-card' },
      ],
    },
  },
  {
    name: 'disabled',
    title: '是否禁用',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'multiple',
    title: '是否支持多选文件',
    setter: 'boolSetter',
  },
  {
    name: 'directory',
    title: '支持上传文件夹',
    setter: 'boolSetter',
  },
  {
    name: 'fileList',
    title: '已经上传的文件列表（受控）',
    setter: 'expressionSetter',
  },
  {
    name: 'defaultFileList',
    title: '默认已上传文件列表',
    setter: 'expressionSetter',
  },
  {
    name: 'showUploadList',
    title: '是否展示文件列表',
    setter: 'boolSetter',
  },
  {
    name: 'fieldProps',
    title: 'antd原始组件属性',
    setter: 'expressionSetter',
    group: 'advanced',
  },
  {
    name: 'customRequest',
    title: '覆盖默认的上传行为',
    setter: 'expressionSetter',
    group: 'advanced',
  },
  {
    name: 'withCredentials',
    title: '上传请求时是否携带 cookie',
    setter: 'boolSetter',
    group: 'advanced',
  },
  {
    name: 'onChange',
    title: '上传文件改变时的状态',
    setter: 'actionSetter',
    group: 'event',
  },
  {
    name: 'onPreview',
    title: '点击文件链接或预览图标时的回调',
    setter: 'actionSetter',
    group: 'event',
  },
  {
    name: 'onRemove',
    title: '点击移除文件时的回调',
    setter: 'actionSetter',
    group: 'event',
  },
];

export const ProFormUploadButton: IComponentPrototype = {
  name: 'ProFormUploadButton',
  title: '按钮上传',
  icon: 'icon-shangchuan',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 按钮上传组件，点击按钮触发文件上传',
  hasChildren: false,
  props: [
    ...ProFormUploadCommonProps,
    {
      name: 'title',
      title: '上传按钮文字',
      setter: 'textSetter',
      initValue: '点击上传',
      group: 'basic',
    },
    {
      name: 'maxCount',
      title: '限制上传数量',
      setter: 'numberSetter',
    },
  ],
};

export const ProFormUploadDragger: IComponentPrototype = {
  name: 'ProFormUploadDragger',
  title: '拖拽上传',
  icon: 'icon-shangchuan',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 拖拽上传组件，将文件拖入区域触发上传',
  hasChildren: false,
  props: [
    ...ProFormUploadCommonProps,
    {
      name: 'maxCount',
      title: '限制上传数量',
      setter: 'numberSetter',
    },
    {
      name: 'height',
      title: '高度',
      setter: 'textSetter',
    },
  ],
};
