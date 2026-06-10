import { IComponentPrototype } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Layout: IComponentPrototype = {
  name: 'Layout',
  title: '布局',
  package: 'antd',
  icon: 'icon-card',
  help: '协助进行页面级整体布局',
  type: 'container',
  hasChildren: true,
  initChildren: `
    <Layout style={{ height: 300 }}>
      <Layout.Sider
        width="25%"
        style={{ backgroundColor: "#1677ff" }}
      ></Layout.Sider>
      <Layout.Content
        style={{ backgroundColor: "#0958d9" }}
      ></Layout.Content>
    </Layout>
    <Layout.Footer style={{ backgroundColor: "#4096ff" }}></Layout.Footer>
  `,
  props: [
    ...StylePrototypes,
    { name: 'hasSider', title: '表示子元素里有 Sider, 避免样式闪动', setter: 'boolSetter' },
  ],
};
