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
      return;
    }
    this.file = file;
  }

  uploadImage() {
    this._uploader.uploadFile(this.file, 'users', this.user._id)
      .subscribe((res) => {
        console.log(res);
        }
      );
  }

}
