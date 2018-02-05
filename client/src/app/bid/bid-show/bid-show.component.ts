import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { BidService } from '../bid.service';
import { Bid } from '../bid';

@Component({
  selector: 'app-bid-show',
  templateUrl: './bid-show.component.html',
  styleUrls: ['./bid-show.component.css']
})
export class BidShowComponent implements OnInit {
  bid1 = [];
  currentUser;

  constructor(
    private _route: Router,
    private _bidService: BidService,
    private _userService: UserService
  ) { this.currentUser = this._userService.currentUser }

  ngOnInit() {
    if (!this.currentUser) {
      this._route.navigateByUrl('/')
    }

    this._bidService.getOne(
      (bidy) => {
        let bidee = bidy;
        for each in bidee{
          if (each.product = "product1") {
            this.bid1.push(each)
          }
        }
        console.log(this.bid1)
      },
      (err) => {
        console.log(err)
      }
    );
  }

}
