import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../models/User.models";
import { Subscription } from "rxjs/Subscription";
import { Userservice } from '../services/user.service';
import {  } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;

  constructor(private userService: Userservice) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
