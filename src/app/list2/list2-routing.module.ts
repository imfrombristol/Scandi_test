
import { NgModule } from '@angular/core';
import { JanuaryComponent } from './months/january/january.component';
import { FebruaryComponent } from './months/february/february.component';
import { MarchComponent } from './months/march/march.component';
import { AprilComponent } from './months/april/april.component';
import { MayComponent } from './months/may/may.component';
import { JuneComponent } from './months/june/june.component';
import { JulyComponent } from './months/july/july.component';
import { AugustComponent } from './months/august/august.component';
import { SeptemberComponent } from './months/september/september.component';
import { OctoberComponent } from './months/october/october.component';
import { NovemberComponent } from './months/november/november.component';
import { DecemberComponent } from './months/december/december.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { List2Component } from './list2.component';

const list2Routes: Routes = [
  {
    path: '',
    component: List2Component,
    children: [
      {
        path: '',
        children: [
          { path: 'january', component: JanuaryComponent, outlet: 'list2' },
          { path: 'february', component: FebruaryComponent, outlet: 'list2' },
          { path: 'march', component: MarchComponent },
          { path: 'april', component: AprilComponent },
          { path: 'may', component: MayComponent },
          { path: 'june', component: JuneComponent },
          { path: 'july', component: JulyComponent },
          { path: 'august', component: AugustComponent },
          { path: 'september', component: SeptemberComponent },
          { path: 'october', component: OctoberComponent },
          { path: 'november', component: NovemberComponent },
          { path: 'december', component: DecemberComponent },
          { path: '**', redirectTo: '' }
        ]
      }
    ]
  }
];

@NgModule ({
    imports: [
        RouterModule.forChild(list2Routes)
    ],
    exports: [
        RouterModule
    ]
})
export class List2RoutingModule { }
