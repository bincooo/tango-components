import { IComponentPrototype } from '@music163/tango-helpers';

export const S3Uploader: IComponentPrototype = {
    title: 'S3 文件上传',
    name: 'S3Uploader',
    exportType: 'defaultExport',
    icon: 'icon-shangchuan',
    type: 'element',
    package: '#src/components/upload/oss-upload',
    help: '用于系统OSS AWS-S3协议 预签名上传组件',
    hasChildren: false,
    props: [
        {
            name: 'disabled',
            title: '禁用开关',
            setter: 'boolSetter',
        },
        {
            name: 'maxFileSize',
            title: '最大文件大小',
            setter: 'textSetter',
            tip: 'Unit = "k" | "m" | "g" | "t" | "K" | "M" | "G" | "T"'
        },
        {
            name: 'maxNumberOfFiles',
            title: '可上传数量',
            setter: 'numberSetter',
        },
    ],
}