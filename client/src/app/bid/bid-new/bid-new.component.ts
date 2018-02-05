import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';
import { BidService } from '../bid.service';
import { Bid } from '../bid';

@Component({
  selector: 'app-bid-new',
  templateUrl: './bid-new.component.html',
  styleUrls: ['./bid-new.component.css']
})
export class BidNewComponent implements OnInit {
  bid: Bid;
  product1 = 'product1';
  bid2 = [];
  currentUser;

  constructor(
    private _route: Router,
    private _bidService: BidService,
    private _userService: UserService
  ) { this.currentUser = this._userService.currentUser }

  ngOnInit() {
    this.bid = new Bid();

    if (!this.currentUser) {
      this._route.navigateByUrl('/')
    }

    this._bidService.getBids(
      (bids) => {
        this.bid2 = bids;
        console.log(this.bid2)
      },
      (err) => {
        console.log(err)
      }
    );
  }

  onSubmit(x) {
    this.bid.product = x;
    console.log(this.bid)
    this._bidService.createBid(this.bid,
      (bid) => {
        console.log(bid)
      },
      (err) => {
        console.log(err)
      });
      this.bid = new Bid();
  }

  result() {
    this._route.navigateByUrl('/result');
  }

}
