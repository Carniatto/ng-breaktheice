import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: string[];

  constructor() { }

  ngOnInit() {
    this.users = [
      'Mateus',
      'Tali',
      'Steve',
      'Jonny',
      'Renato',
      'Camila'
    ];
  }

  removeUser(user: string) {
    this.users = this.users.filter(u => u !== user);
  }

  updateUser(ref, change) {
    const index = this.users.findIndex(u => u === ref);
    this.users = [
      ...this.users.slice(0, index),
      change,
      ...this.users.slice(index + 1)
    ];
  }

}
