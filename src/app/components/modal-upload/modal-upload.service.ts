import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ModalUploadService {

  public collection: string;
  public id: string;

  visible: boolean = false;

  public notification = new EventEmitter<any>();

  constructor() { }

  hideModal() {
    this.visible = false;
    this.collection = null;
    this.id = null;
  }

  showModal(collection: string, id: string) {
    this.id = id;
    this.collection = collection;
    this.visible = !this.visible;
  }


}
