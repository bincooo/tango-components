import { IComponentPrototype } from '@music163/tango-helpers';

import { StylePrototypes } from '../common';

export const BasicContent: IComponentPrototype = {
  name: 'BasicContent',
  title: '抽屉表单',
  exportType: 'defaultExport',
  icon: 'icon-biaodan',
  type: 'page',
  package: '#src/components/basic-table',
  help: '页面组件。',
  hasChildren: true,
  props: [
    ...StylePrototypes,
  ],
};
