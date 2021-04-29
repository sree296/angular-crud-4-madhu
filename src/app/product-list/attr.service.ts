import { Injectable } from "@angular/core";
import { Attribute } from "./attr.model";

@Injectable()
export class AttrService {
  private listAttrs: Attribute[] = [];

  getAttrs(): Attribute[] {
    return this.listAttrs;
  }
  saveAttr(_attr: Attribute) {
    this.listAttrs.push(_attr);
  }
}
