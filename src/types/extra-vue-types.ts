/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type {
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentPropsOptions,
  EmitsOptions,
  ExtractPropTypes,
  ObjectEmitsOptions,
  VNodeProps
} from 'vue'

export type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {
  [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any
} : T extends ObjectEmitsOptions ? {
  [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never
} : {}

export type ResolveProps<PropsOrPropOptions, E extends EmitsOptions> = Readonly<PropsOrPropOptions extends ComponentPropsOptions ? ExtractPropTypes<PropsOrPropOptions> : PropsOrPropOptions> & ({} extends E ? {} : EmitsToProps<E>)

export type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps
