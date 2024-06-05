export enum Color {
  red,
  black,
  blue,
  green,
}

export interface Hero {
  name: string;
  canFly: boolean;
  primaryColor: Color;
}
