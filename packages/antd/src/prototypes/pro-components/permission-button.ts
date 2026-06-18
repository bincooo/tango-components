import { IComponentPrototype } from '@music163/tango-helpers';
import { Button } from "../button";

export const PermissionButton: IComponentPrototype = {
    title: '权限按钮',
    name: 'PermissionButton',
    exportType: 'defaultExport',
    icon: 'icon-anniu',
    type: 'element',
    package: '#src/components/permission-button',
    help: '按钮用于开始一个即时操作，可额外设置权限标记',
    hasChildren: false,
    props: [
        ...Button.props,
        {
            name: 'perm',
            title: '按钮权限',
            setter: 'textSetter',
            group: 'advanced',
        },
        {
            name: 'role',
            title: '角色权限',
            setter: 'textSetter',
            group: 'advanced',
        },
    ],
}