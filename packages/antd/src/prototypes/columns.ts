import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Columns: IComponentPrototype = {
  name: 'Columns',
  type: 'container',
  icon: 'icon-column-4',
  package: 'antd',
  hasChildren: true,
  childrenName: ['Column'],
  props: [...StylePrototypes],
};

export const Column: IComponentPrototype = {
  name: 'Column',
  type: 'container',
  icon: 'icon-column-4',
  package: 'antd',
  hasChildren: true,
  props: [...StylePrototypes],
};
