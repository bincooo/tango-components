import { IComponentProp } from '@music163/tango-helpers';

export const StylePrototypes: IComponentProp[] = [
  {
    name: 'style',
    title: '样式对象',
    setter: 'expressionSetter',
    setterProps: {
      expressionType: 'cssObject',
    },
    group: 'style',
    autoCompleteOptions: ['{}'],
  },
  {
    name: 'className',
    title: '自定义样式类名',
    setter: 'classNameSetter',
    group: 'style',
  },
];

export const InstancePrototypes: IComponentProp[] = [
  {
    name: 'id',
    title: '唯一标识符',
    tip: '唯一标记此组件，可以用于快捷获取此组件的实例和状态',
    setter: 'textSetter',
    disableVariableSetter: true,
  },
];

export const CommonSystemStylePrototypes: IComponentProp[] = [
  {
    name: 'color',
    title: '文本颜色',
    setter: 'colorSetter',
    group: 'style',
  },
  {
    name: 'bg',
    title: '背景色',
    setter: 'bgSetter',
    group: 'style',
  },
  {
    name: 'opacity',
    title: '透明度',
    setter: 'sliderSetter',
    setterProps: {
      max: 1,
      min: 0,
      step: 0.1,
    },
    defaultValue: 1,
    group: 'style',
  },
  {
    name: 'm',
    title: '外间距',
    setter: 'spacingSetter',
    group: 'style',
  },
  {
    name: 'p',
    title: '内间距',
    setter: 'spacingSetter',
    group: 'style',
  },
];
