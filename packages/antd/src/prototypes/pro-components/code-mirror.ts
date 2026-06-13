import { IComponentPrototype } from '@music163/tango-helpers';
import { InstancePrototypes, StylePrototypes } from '../common';

export const ProCodeMirrorField: IComponentPrototype = {
  name: 'ProCodeMirrorField',
  exportType: 'defaultExport',
  title: '代码编辑框',
  icon: 'icon-shurukuang',
  type: 'element',
  package: '#src/components/code-mirror',
  help: '通过特定窗口输入内容，弹出选择的包装',
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
      name: 'searchId',
      title: '模态检索ID',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'title',
      title: '窗口标题',
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
      name: 'defaultValue',
      title: '默认内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'value',
      title: '当前内容',
      setter: 'textSetter',
      group: 'basic',
    },
    {
      name: 'onChange',
      title: '内容变化回调',
      setter: 'actionSetter',
      group: 'event',
      autoCompleteOptions: ['({target:{value}})=>{}'],
    },
    {
      name: 'readonly',
      title: '只读',
      setter: 'boolSetter',
    },
    {
      name: 'disabled',
      title: '禁用',
      setter: 'boolSetter',
      group: 'basic',
    },
    {
      name: 'language',
      title: '编码语言',
      group: 'basic',
      setter: 'choiceSetter',
      setterProps: {
        options: [
          { label: "javascript", value: "javascript" },
          { label: "typescript", value: "ts" },
          { label: "tsx", value: "tsx" },
          { label: "vue", value: "vue" },
          { label: "json", value: "json" },
          { label: "html", value: "html" },
          { label: "css", value: "css" },
          { label: "less", value: "less" },
          { label: "scss", value: "scss" },
          { label: "java", value: "java" },
          { label: "sql", value: "sql" },
          { label: "xml", value: "xml" },
        ],
      },
      initValue: "javascript",
    },
  ],
};
