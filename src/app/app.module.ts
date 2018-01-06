import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    BookmarkComponent,
    ProfileComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'list1', component: List1Component},
      {path: 'list2', component: List2Component},
      {path: 'bookmark', component: BookmarkComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'notification', component: NotificationComponent},
      {path: '', redirectTo: 'list1', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
