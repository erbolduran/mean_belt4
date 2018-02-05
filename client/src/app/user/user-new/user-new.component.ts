import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user'


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: User;

  constructor(
    private _route: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.user = new User();

    if (this._userService.currentUser) {
      this._route.navigateByUrl('/show')
    }
  }

  onSubmit() {
    this._userService.createUser(this.user,
      (user) => {
        console.log(user)
        this._route.navigateByUrl('/new')
      },
      (err) => {
        console.log(err);
      });
      this.user = new User();
  }

}
