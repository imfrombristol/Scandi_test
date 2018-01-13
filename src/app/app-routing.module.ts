import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { List2RoutingModule } from './list2/list2-routing.module';

const appRoutes: Routes = [
  {
    path: 'list1',
    component: List1Component
  },
  {
    path: 'list2',
    component: List2Component
  },
  {
    path: 'bookmark',
    component: BookmarkComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  { path: '',
    redirectTo: 'list1',
    pathMatch: 'full'
}
];
@NgModule({
  declarations: [
    List1Component,
    List2Component,
    BookmarkComponent,
    ProfileComponent,
    NotificationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      {
      enableTracing: true, // <-- debugging purposes only
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
