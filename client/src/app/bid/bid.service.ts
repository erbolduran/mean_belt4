import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bid } from './bid';

@Injectable()
export class BidService {
  bid: Bid = new Bid();
  bids: Bid[] = [];

  constructor(
    private _http: Http
  ) { }

  createBid(bid: Bid, callback, errorback) {
    this._http.post('/bids', bid).subscribe(
      (res) => {
        const biid = res.json();
        this.bid = biid;
        callback(this.bid);
      },
      (err) => {
        errorback(err)
      } 
    );
  }

  getBids(callback, errorback) {
    this._http.get('/bids').subscribe(
      (res) => {
        console.log(res)
        const biid = res.json();
        this.bids = biid
        callback(this.bids)
      },
      (err) => {
        errorback(err)
      }
    );
  }

  getOne(callback, errorback) {
    this._http.get('/bid').subscribe(
      (res) => {
        const bid1 = res.json();
        console.log(bid1)
        callback(bid1)
      },
      (err) => {
        errorback(err);
      }
    );
  }

}
