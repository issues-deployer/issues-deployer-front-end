import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperGroupsComponent } from './super-groups/super-groups.component';
import { MessagesComponent } from './messages/messages.component';
import { AccountComponent } from './account/account.component';
import { SubGroupsComponent } from './sub-groups/sub-groups.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperGroupsComponent,
    MessagesComponent,
    AccountComponent,
    SubGroupsComponent,
    GroupDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
