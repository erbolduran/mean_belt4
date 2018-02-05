import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { BidComponent } from './bid/bid.component';
import { BidNewComponent } from './bid/bid-new/bid-new.component';
import { BidShowComponent } from './bid/bid-show/bid-show.component';
import { BidErrorComponent } from './bid/bid-error/bid-error.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UserComponent, children: [
    {path: '', component: UserNewComponent}
    ]
  },

  {path: 'show', pathMatch: 'full', component: UserComponent, children: [
    {path: '', component: UserNewComponent}
    ]
  },

  {path: 'new', component: BidComponent, children: [
    {path: '', component: BidNewComponent},
    ]
  },

  {path: 'result', component: BidComponent, children: [
    {path: '', component: BidShowComponent}
    ]
  },

  {path: 'error', component: BidErrorComponent},

  {path: '*', component: UserComponent, children: [
    {path: '*', component: UserNewComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
