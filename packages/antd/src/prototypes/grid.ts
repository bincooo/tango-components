import { IComponentPrototype, Dict } from '@music163/tango-helpers';

import { StylePrototypes } from './common';
import { omitProps } from '../helpers';



export const Row: IComponentPrototype = {
  name: 'Row',
  title: '栅格行',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'container',
  package: 'antd',
  help: '最基本的栅格组件，可以创建一个栅格布局。',
  hasChildren: true,
  relatedImports: ['Col'],
  initChildren: `
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
    <Col span={8}>col-8</Col>
  `,
  childrenName: ['Col'],
  props: [
    ...StylePrototypes,
    {
      name: 'align',
      title: '垂直对齐方式',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: 'top', value: 'top' },
          { label: 'middle', value: 'middle' },
          { label: 'bottom', value: 'bottom' },
          { label: 'stretch', value: 'stretch' },
        ],
      },
    },
    {
      name: 'gutter',
      title: '栅格间隔',
      setter: 'numberSetter',
    },
    {
      name: 'justify',
      title: '水平排列方式',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: 'start', value: 'start' },
          { label: 'center', value: 'center' },
          { label: 'end', value: 'end' },
        ],
      },
    },
    {
      name: 'wrap',
      title: '是否自动换行',
      setter: 'boolSetter',
    },
  ],
};


export const Col: IComponentPrototype = {
  name: 'Col',
  title: '栅格列',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'container',
  package: 'antd',
  help: '一个基本的栅格列',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'span',
      title: '栅格占位格数',
      setter: 'numberSetter',
    },
    {
      name: 'flex',
      title: 'flex 布局属性',
      setter: 'numberSetter',
    },
    {
      name: 'offset',
      title: '栅格左侧的间隔格数',
      setter: 'numberSetter',
      initValue: '表单项',
    },
    {
      name: 'order',
      title: '栅格顺序',
      setter: 'numberSetter',
    },
  ],
};
