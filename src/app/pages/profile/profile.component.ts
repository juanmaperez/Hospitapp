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

  updateUser(user: User) {
    this.user.name = user.name;
    if ( !this.user.google ) {
      this.user.email = user.email;
    }
    this._userService.updateUser(this.user)
      .subscribe();
  }

  addImage( file: File) {
    if (! file) {
      this.file = null;
      return;
    }

    if ( file.type.indexOf('image') < 0) {
      swal('Error', 'Type not allowed', 'error');
      return;
    }

    const reader = new FileReader();
    const imageTemp = reader.readAsDataURL(file);

    reader.onloadend = () => this.fileImageUrl = reader.result;

    this.file = file;
  }

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
