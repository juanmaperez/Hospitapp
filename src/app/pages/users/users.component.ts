import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import swal from 'sweetalert2';


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
    public _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
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
    if (this.from >= this.totalUsers || this.from < 0 ) {
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
    this._userService.deleteUser(id)
      .subscribe((res: any) => {
        const userDeleted = res.user;
        swal('User' + userDeleted.username, 'Deleted successfully', 'success' );
      });
  }

}
