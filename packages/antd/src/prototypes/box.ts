import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Box: IComponentPrototype = {
  name: 'Box',
  title: '盒子',
  icon: 'icon-mianban',
  type: 'container',
  package: 'antd',
  hasChildren: true,
  siblingNames: ['Box'],
  props: [
    ...StylePrototypes,
  ],
};
