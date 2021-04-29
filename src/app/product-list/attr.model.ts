export class Attribute {
  name: string;
  description: string;
  datatype: string;
  length: number;
  precision: number;
}
export class Collection {
  id: number;
  attr: Attribute[];
}
