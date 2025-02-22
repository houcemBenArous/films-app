import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiteurRoutingModule } from './visiteur-routing.module';
import { VisiteurComponent } from './visiteur.component';


@NgModule({
  declarations: [
    VisiteurComponent
  ],
  imports: [
    VisiteurRoutingModule
  ]
})
export class VisiteurModule { }
