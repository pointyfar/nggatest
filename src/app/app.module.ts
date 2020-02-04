import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutItemComponent } from './layout-builder/layout-item/layout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
