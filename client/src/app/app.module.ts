import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user/user.service';
import { BidService } from './bid/bid.service'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { BidComponent } from './bid/bid.component';
import { BidNewComponent } from './bid/bid-new/bid-new.component';
import { BidShowComponent } from './bid/bid-show/bid-show.component';
import { BidErrorComponent } from './bid/bid-error/bid-error.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    BidComponent,
    BidNewComponent,
    BidShowComponent,
    BidErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService, BidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
