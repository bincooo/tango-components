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
      items: ['Button', 'Space'],
    },
    {
      title: '输入',
      items: ['Input', 'InputNumber', 'Select'],
    },
    {
      title: '布局',
      items: ['Layout', 'Slider', 'Form', 'FormItem','Table', 'Row', 'Col'],
    },
    {
      title: '高级布局',
      items: ['DrawerForm'],
    },
    {
      title: '高级输入',
      items: ['ProFormText', 'ProFormTextArea', 'ProFormTextPassword', 'ProFormSelect', 'ModalSearch'],
    }
  ]
};
