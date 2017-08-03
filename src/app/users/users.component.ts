import { Component, OnInit } from '@angular/core';
import { RestModelService } from '../services/rest-model.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: UserDetail;

  constructor(private rest: RestModelService) { }

  ngOnInit() {
    this.rest.getUsers()
      .subscribe( users => this.users = users);
  }

  selectUser(user: User) {
    if (this.selectedUser && this.selectedUser.id === user.id) {
      this.selectedUser = null;
    } else {
      this.selectedUser = user;
      this.rest.getDetails(user.id)
        .subscribe(userDetail => {
          this.selectedUser = {id: user.id, name: user.name, ...userDetail};
        });
    }
  }

  removeUser(user: User) {
    this.users = this.users.filter( ({id}) => id !== user.id);
  }

  updateUser(ref: User, name: string) {
    const index = this.users.findIndex(u => u.id === ref.id);
    this.users = [
      ...this.users.slice(0, index),
      {...ref, name},
      ...this.users.slice(index + 1)
    ];
  }

  addUser(userName) {
    const user = {
      id: this.users.length + 1,
      name: userName
    };
    this.users = [...this.users, user];
  }

}

interface User {
  id: number;
  name: string;
}

interface UserDetail {
  id: number;
  name: string;
  website?: string;
  email?: string;
  posts?: Post[];
}

interface Post {
  id: number;
  title: string;
  body: string;
}
