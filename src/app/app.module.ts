import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './componentA/component-a.component';
import { SubAComponent } from './componentA/sub-a/sub-a.component';
import { ComponentBComponent } from './componentB/component-b.component';
import { SubBComponent } from './componentB/sub-b/sub-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    SubAComponent,
    ComponentBComponent,
    SubBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
