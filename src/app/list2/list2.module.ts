import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List2Component } from './list2.component';
import { List2RoutingModule } from './list2-routing.module';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
    declarations: [
        List2Component,
        JanuaryComponent,
        FebruaryComponent,
        MarchComponent,
        AprilComponent,
        MayComponent,
        JuneComponent,
        JulyComponent,
        AugustComponent,
        SeptemberComponent,
        OctoberComponent,
        NovemberComponent,
        DecemberComponent
    ],
    imports: [
        CommonModule,
        List2RoutingModule
    ]
})
export class List2Module { }
