import { IComponentPrototype, Dict } from '@music163/tango-helpers';
import { Input, Password, TextArea } from './input';
import { InputNumber } from './input-number';
import { Switch } from './switch';
import { RadioGroup } from './radio';
import { Checkbox, CheckboxGroup } from './checkbox';
import { Select } from './select';
import { Cascader } from './cascader';
import { TreeSelect } from './tree-select';
import { DatePicker, DateRangePicker } from './date-picker';
import { TimePicker, TimeRangePicker } from './time-picker';
import { Upload } from './upload';

import { StylePrototypes } from './common';
import { omitProps } from '../helpers';

const componentMap: Dict = {
  Input,
  Password,
  TextArea,
  InputNumber,
  Switch,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Cascader,
  TreeSelect,
  DatePicker,
  DateRangePicker,
  RangePicker: DateRangePicker,
  TimePicker,
  TimeRangePicker,
  UploadImage: Upload,
  UploadFile: Upload,
};

export const Form: IComponentPrototype = {
  name: 'Form',
  title: '基本表单',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'element',
  package: 'antd',
  help: '最基本的表单组件，可以创建一个轻量级表单。',
  hasChildren: true,
  relatedImports: ['Input'],
  initChildren: `
    <Form.Item label="表单项"><Input /></Form.Item>
    <Form.Item label="表单项"><Input /></Form.Item>
    <Form.Item label="表单项"><Input /></Form.Item>
  `,
  childrenName: ['FormItem'],
  props: [
    ...StylePrototypes,
    {
      name: 'layout',
      title: '表单布局',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '水平布局', value: 'horizontal' },
          { label: '垂直布局', value: 'vertical' },
          { label: '行内布局', value: 'inline' },
        ],
      },
    },
    {
      name: 'labelCol',
      title: 'label 标签布局',
      setter: 'expressionSetter',
      initValue: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
    },
    {
      name: 'wrapperCol',
      title: '控件布局',
      setter: 'expressionSetter',
      initValue: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    },
    {
      name: 'colon',
      title: '是否显示标签后的冒号',
      setter: 'boolSetter',
    },
    {
      name: 'labelAlign',
      title: '标签文本对齐',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: '左侧', value: 'left' },
          { label: '右侧', value: 'right' },
        ],
      },
    },
    {
      name: 'labelWrap',
      title: '标签文本换行方式',
      setter: 'boolSetter',
    },
    {
      name: 'initialValues',
      title: '表单默认值',
      setter: 'expressionSetter',
    },
    {
      name: 'isPreview',
      title: '是否为预览态',
      setter: 'boolSetter',
    },
    {
      name: 'onFinish',
      title: '提交表单成功回调',
      setter: 'eventSetter',
      tip: '回调格式：(values) => void',
    },
    {
      name: 'onFinishFailed',
      title: '提交表单失败回调',
      setter: 'eventSetter',
      tip: '回调格式：({ values, errorFields, outOfDate }) => void',
    },
    {
      name: 'onFieldsChange',
      title: '表单字段变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedFields, allFields) => void',
    },
    {
      name: 'onValuesChange',
      title: '表单字段值变化回调',
      setter: 'eventSetter',
      tip: '回调格式：(changedValues, allValues) => void',
    },
  ],
};


export const FormItem: IComponentPrototype = {
  name: 'Form.Item',
  importAlias: 'Form',
  title: '基本表单项',
  exportType: 'namedExport',
  icon: 'icon-biaodan',
  type: 'container',
  package: 'antd',
  help: '一个基本的表单项',
  hasChildren: true,
  props: [
    ...StylePrototypes,
    {
      name: 'component',
      title: '控件类型',
      setter: 'pickerSetter',
      options: [
        { label: '文本输入', value: 'Input' },
        { label: '数字输入', value: 'InputNumber' },
        { label: '密码', value: 'Password' },
        { label: '多行文本', value: 'TextArea' },
        // { label: '带自动提示的输入框', value: 'AutoComplete' },
        { label: '开关', value: 'Switch' },
        { label: '单选框', value: 'RadioGroup' },
        { label: '复选框', value: 'Checkbox' },
        { label: '复选框组', value: 'CheckboxGroup' },
        // { label: '颜色选择', value: 'ColorPicker' },
        { label: '下拉选择', value: 'Select' },
        // { label: '级联选择', value: 'Cascader' },
        { label: '树形选择', value: 'TreeSelect' },
        // { label: '穿梭选择', value: 'Transfer' },
        { label: '日期选择', value: 'DatePicker' },
        { label: '时间选择', value: 'TimePicker' },
        // { label: '日期时间选择', value: 'DateTimePicker' },
        { label: '日期范围选择', value: 'RangePicker' },
        { label: '时间范围选择', value: 'TimeRangePicker' },
        // { label: '月选择', value: 'MonthPicker' },
        // { label: '周选择', value: 'WeekPicker' },
        // { label: '星级评分', value: 'Rate' },
        // { label: '区间选择', value: 'Slider' },
        // { label: '图片上传', value: 'UploadImage' },
        // { label: '文件上传', value: 'UploadFile' },
      ],
    },
    {
      name: 'name',
      title: '标识名',
      setter: 'textSetter',
    },
    {
      name: 'label',
      title: '标签',
      setter: 'textSetter',
      initValue: '表单项',
    },
    {
      name: 'tip',
      title: '提示信息',
      setter: 'textSetter',
    },
    {
      name: 'extra',
      title: '附加内容',
      setter: 'jsxSetter',
    },
    {
      name: 'required',
      title: '必填',
      setter: 'boolSetter',
    },
    {
      name: 'initialValue',
      title: '默认值',
      setter: 'textSetter',
      tip: '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
    },
    {
      name: 'isPreview',
      title: '是否为预览态',
      setter: 'boolSetter',
    },
    {
      name: 'rules',
      title: '校验规则',
      tip: '校验规则，设置字段的校验逻辑。',
      setter: 'expressionSetter',
    },
    {
      name: 'options',
      title: '数据列表',
      setter: 'optionSetter',
      getVisible: (form) => {
        const value = form.getValue('component');
        return ['CheckboxGroup', 'RadioGroup', 'Select'].includes(value);
      },
    },
    {
      name: 'componentProps',
      title: '子组件属性',
      getProp(form) {
        const type = form.getValue('component');
        const proto = { ...componentMap[type] };
        const props = omitProps(proto.props, [
          'placeholder',
          'options',
          'onChange',
          'defaultValue',
          'value',
        ]);
        return proto.title ? null : {
          title: proto.title + '属性',
          props,
        };
      },
      getVisible(form) {
        const type = form.getValue('component');
        if (!type) {
          return false;
        }
        return !!componentMap[type];
      },
      disableVariableSetter: true,
    },
  ],
};
