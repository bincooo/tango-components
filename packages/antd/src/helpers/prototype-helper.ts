import { IComponentPrototype } from '@music163/tango-helpers';

export function omitProps(props: IComponentPrototype['props'], omitList: string[]) {
  return props?.filter((prop) => !omitList.includes(prop.name));
}

export function pickProps(props: IComponentPrototype['props'], pickList: string[]) {
  return props?.filter((prop) => pickList.includes(prop.name));
}
