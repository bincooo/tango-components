import { IComponentPrototype } from '@music163/tango-helpers';

export const SwitchControl: IComponentPrototype = {
    title: '条件控制',
    name: 'SwitchControl',
    exportType: 'defaultExport',
    icon: 'icon-anniu',
    type: 'container',
    package: '#src/components/switch-control',
    help: '一个用于条件或遍历的盒子',
    hasChildren: true,
    props: [
        {
            name: 'condition',
            title: '条件开关',
            setter: 'boolSetter',
        },
        {
            name: 'fallback',
            title: '条件不匹配回调',
            setter: 'expressionSetter',
        },
        {
            name: 'each',
            title: '遍历器',
            setter: 'expressionSetter',
            initValue: `{{{ data: [1, 2, 3] }}}`
        },
    ],
}