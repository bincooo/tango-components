import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

const ProFormDatePickerCommonProps: IComponentPrototype['props'] = [
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
    name: 'disabled',
    title: '禁用',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'allowClear',
    title: '清除按钮',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'format',
    title: '显示的日期格式',
    tip: '年-月-日：YYYY-MM-DD，时:分:秒：HH:mm:ss',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'valueType',
    title: '提交的日期格式',
    setter: 'choiceSetter',
    options: [
      { label: 'Moment', value: 'moment', tip: '返回 Moment 对象' },
      { label: '字符串', value: 'string', tip: '返回格式化日期字符串' },
      { label: '时间戳', value: 'timestamp', tip: '返回时间戳（毫秒）' },
    ],
    defaultValue: 'moment',
  },
  {
    name: 'showTime',
    title: '增加时间选择',
    setter: 'boolSetter',
    group: 'basic',
  },
  {
    name: 'picker',
    title: '设置选择器类型',
    setterProps: {
      options: [
        { label: '时间', value: 'date' },
        { label: '周', value: 'week' },
        { label: '月', value: 'month' },
        { label: '年', value: 'year' },
        { label: '十年', value: 'decade' },
      ],
    },
    setter: 'pickerSetter',
  },
  {
    name: 'defaultValue',
    title: '默认日期值',
    setter: 'textSetter',
    group: 'basic',
  },
  {
    name: 'size',
    title: '输入框大小',
    setterProps: {
      options: [
        { label: '小', value: 'small' },
        { label: '中', value: 'middle' },
        { label: '大', value: 'large' },
      ],
    },
    setter: 'choiceSetter',
    group: 'basic',
  },
  {
    name: 'bordered',
    title: '边框',
    setter: 'boolSetter',
    group: 'style',
  },
  {
    name: 'disabledDate',
    title: '不可选择的日期',
    setter: 'expressionSetter',
    group: 'advanced',
    autoCompleteOptions: [
      `current => {
  return current && current < moment().endOf('day');
}`,
    ],
  },
  {
    name: 'suffixIcon',
    title: '选择框后缀图标',
    setter: 'iconSetter',
    group: 'advanced',
  },
  {
    name: 'renderExtraFooter',
    title: '额外的页脚',
    setter: 'expressionSetter',
    group: 'advanced',
    autoCompleteOptions: ['() => "extraFooter"'],
  },
  {
    name: 'onChange',
    title: '时间变化回调',
    setter: 'actionSetter',
    group: 'event',
    autoCompleteOptions: ['(date, dateString) => {}'],
  },
  {
    name: 'onOpenChange',
    title: '日历弹出关闭回调',
    setter: 'actionSetter',
    group: 'event',
  },
];

export const ProFormDatePicker: IComponentPrototype = {
  name: 'ProFormDatePicker',
  title: '日期选择框',
  icon: 'icon-riqishijian',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 日期选择框，用于在表单中选择日期',
  hasChildren: false,
  props: [
    ...ProFormDatePickerCommonProps,
    {
      name: 'ranges',
      title: '时间范围快捷选择',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: [
        `{
  Today: moment(),
  'This Month': moment().endOf('month'),
}`,
      ],
    },
    {
      name: 'showNow',
      title: '显示"此刻"按钮',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'showToday',
      title: '展示"今天"按钮',
      setter: 'boolSetter',
      group: 'advanced',
    },
    {
      name: 'onOk',
      title: '确定按钮回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const ProFormDateRangePicker: IComponentPrototype = {
  name: 'ProFormDateRangePicker',
  title: '日期范围选择框',
  icon: 'icon-date-range',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 日期范围选择框，用于在表单中选择日期范围',
  hasChildren: false,
  props: [
    ...ProFormDatePickerCommonProps,
    {
      name: 'ranges',
      title: '时间范围快捷选择',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: [
        `{
  Today: [moment(), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
}`,
      ],
    },
    {
      name: 'allowEmpty',
      title: '允许起始项部分为空',
      setter: 'expressionSetter',
      group: 'advanced',
      autoCompleteOptions: ['[true, false]'],
    },
    {
      name: 'separator',
      title: '分隔符',
      setter: 'iconSetter',
      group: 'advanced',
    },
    {
      name: 'onCalendarChange',
      title: '日期发生变化回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};

export const ProFormTimePicker: IComponentPrototype = {
  name: 'ProFormTimePicker',
  title: '时间选择框',
  icon: 'icon-riqishijian',
  type: 'element',
  package: '@ant-design/pro-components',
  help: 'ProForm 时间选择框，用于在表单中选择时间',
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
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'allowClear',
      title: '清除按钮',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'format',
      title: '显示的时间格式',
      tip: '时:分:秒：HH:mm:ss',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'use12Hours',
      title: '使用12小时制',
      setter: 'boolSetter',
    },
    {
      name: 'hourStep',
      title: '小时选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'minuteStep',
      title: '分钟选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'secondStep',
      title: '秒选项间隔',
      setter: 'numberSetter',
    },
    {
      name: 'showNow',
      title: '显示"此刻"按钮',
      setter: 'boolSetter',
    },
    {
      name: 'size',
      title: '输入框大小',
      setterProps: {
        options: [
          { label: '小', value: 'small' },
          { label: '中', value: 'middle' },
          { label: '大', value: 'large' },
        ],
      },
      setter: 'choiceSetter',
      group: 'basic',
    },
    {
      name: 'bordered',
      title: '边框',
      setter: 'boolSetter',
    },
    {
      name: 'onChange',
      title: '时间变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['(time, timeString) => {}'],
    },
    {
      name: 'onOpenChange',
      title: '弹窗开关回调',
      setter: 'actionSetter',
      group: 'event',
    },
    {
      name: 'onOk',
      title: '确定按钮回调',
      setter: 'actionSetter',
      group: 'event',
    },
  ],
};
