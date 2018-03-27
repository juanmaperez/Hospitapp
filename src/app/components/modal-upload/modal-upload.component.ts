import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

import { UploadFileService } from './../../services/upload-file/upload-file.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  file: File;

  fileImageUrl: string;

  constructor(
    public _uploadFileService: UploadFileService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }


  uploadImage() {
    this._uploadFileService.uploadFile(this.file, this._modalUploadService.collection, this._modalUploadService.id)
      .subscribe(
        (res) => {
          this._modalUploadService.notification.emit();
          this.closeModal();
        },
        err => console.log(err),
        () => { }
    );
  }

  closeModal() {
    this.file = null;
    this.fileImageUrl = null;
    this._modalUploadService.hideModal();
  }

    /* This function adds an image in the preview
  * @params: File
  * @return: void()
  */
  addImage( file: File) {
    if (!file) {
      this.file = null;
      return;
    }

    if ( file.type.indexOf('image') < 0) {
      swal('Error', 'Type not allowed', 'error');
      return;
    }

    this.file = file;

    const reader = new FileReader();
    const imageTemp = reader.readAsDataURL(file);

    reader.onloadend = () => this.fileImageUrl = reader.result;

  }

}
