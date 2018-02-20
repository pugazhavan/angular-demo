import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { RouterModule, Routes }   from '@angular/router';
import { route } from './routingPage.route';

import { RolePermisionsService } from './services/role-permisions.service';
import { UtilsService } from "./services/utils.service";

import { AppComponent } from './app.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';
import { Test2Component } from './components/test2/test2.component';

import { StringCapitalizePipe } from './pipes/string-capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    StringCapitalizePipe,
    Test2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(route),
  ],
  providers: [RolePermisionsService, UtilsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
