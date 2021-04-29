import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { products } from "../products";

import { Attribute, Collection } from "./attr.model";
import { AttrService } from "./attr.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  //Getting List of Attributes from Service
  attributes: Attribute[] = this._attrService.getAttrs();

  //Initialize Serice
  constructor(private _attrService: AttrService) {}

  ngOnInit() {
    //this.attributes = this._attrService.getAttrs();
  }

  //Create Empty attribute Model
  attrModel: Attribute = {
    name: null,
    description: null,
    datatype: null,
    length: null,
    precision: null
  };

  //Parent/Full Object
  collection: Collection[] = [
    {
      id: 123,
      attr: this.attributes
    }
  ];

  //Saving the Form
  saveAttr(attrForm: NgForm): void {
    //Save into Service
    this._attrService.saveAttr(attrForm.value);

    //Empty the Form Fields
    this.attrModel = {
      name: null,
      description: null,
      datatype: null,
      length: null,
      precision: null
    };

    console.log(attrForm.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
