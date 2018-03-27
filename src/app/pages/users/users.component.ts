import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


@Component({
  selector: 'page-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  users: User [] = [];

  from: number = 0;

  totalUsers: number = 0;

  loading: boolean;

  constructor (
    public _userService: UserService,
    public _modalUploadService: ModalUploadService,
  ) { }

  ngOnInit() {
    this.getUsers();
    this._modalUploadService.notification.subscribe(() => this.getUsers());
  }

  showModal(id) {
    this._modalUploadService.showModal('users', id);
  }

  getUsers() {
    this.loading = true;
    this._userService.getUsers( this.from )
      .subscribe((res: any) => {
        this.totalUsers = res.total;
        this.users = res.users;
        this.loading = false;
      });
  }

  countFromChange ( number: number) {
    if (this.from > this.totalUsers || this.from < 0 ) {
      return;
    }
    this.from += number;
    this.getUsers();
  }

  searchUser( term: string) {
    if (term.length > 0) {
      this.loading = true;
    this._userService.getUsersByTerm(term)
      .subscribe((res: any) => {
        this.users = res.users;
        this.loading = false;

        this.totalUsers = this.users.length;
      });
    }
  }

  deleteUser(user: User) {
    const id = user._id;

    swal({
      title: 'Are you sure',
      text: 'You will delete ' + user.name,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((willDelete) => {
      if (willDelete) {
        this._userService.deleteUser(id)
        .subscribe((res: any) => {
          swal('User ' + res.user.name, 'Deleted successfully', 'success' );
        });
      } else {
        swal('Perfect!', `If not sure, better don't delete`, 'warning');
      }
    });

  }

  updateUser(user: User) {
    this._userService.updateUser(user)
      .subscribe((res) => {

      });
  }

}
