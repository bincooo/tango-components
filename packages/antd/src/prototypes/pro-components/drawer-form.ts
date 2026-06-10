import { IComponentPrototype, Dict } from '@music163/tango-helpers';

import { StylePrototypes } from '../common';
import { omitProps } from '../../helpers';

export const DrawerForm: IComponentPrototype = {
  name: 'DrawerForm',
  title: '抽屉表单',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'container',
  package: '@ant-design/pro-components',
  help: '高级antd组件，可以创建一个抽屉表单。',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'open',
      title: '是否打开',
      setter: 'boolSetter',
    },
    {
      name: 'title',
      title: '抽屉的标题',
      setter: 'textSetter',
    },
    {
      name: 'width',
      title: '抽屉的宽度',
      setter: 'textSetter',
    },
    {
      name: 'resize',
      title: '是否允许拖拽调整抽屉宽度',
      setter: 'expressionSetter',
    },
    {
      name: 'onFinish',
      title: '提交数据时触发事件',
      setter: 'eventSetter',
      tip: '回调格式：(values: any) => Promise<any>',
    },
    {
      name: 'onFieldsChange',
      title: '表单字段变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(open: boolean) => void',
    },
  ],
};
