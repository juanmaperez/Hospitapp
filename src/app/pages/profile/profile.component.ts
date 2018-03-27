import { Component, OnInit } from '@angular/core';

import { UserService, UploadFileService } from '../../services/services.index';

import swal from 'sweetalert2';

import { User } from '../../models/user.model';

@Component({
  selector: 'main-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  /* This function
  * @return {}
  * @params:
  */

  user: User;

  file: File;
  fileImageUrl: string;

  constructor(
    public _userService: UserService,
    public _uploader: UploadFileService
  ) {
    this.user = this._userService.user;
  }

  ngOnInit() {
  }

  /* This function calls to the profile service and updates its properties
  * @params: File
  * @return: void()
  */
  updateUser(user: User) {
    this.user.name = user.name;
    if ( !this.user.google ) {
      this.user.email = user.email;
    }
    this._userService.updateUser(this.user)
      .subscribe();
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

  /* This function connects with the uploader service and uploads the image in the preview
  * @return: void()
  */
  uploadImage() {
    this._uploader.uploadFile(this.file, 'users', this.user._id)
      .subscribe(
        (res: any) => {
          this.user.img = res.info.user.img;

          this.updateUser(this.user);

          swal( res.title, res.message, res.result);

        },
        err => swal( err.title, err.message, err.result),
        () => { }
    );
  }

}
