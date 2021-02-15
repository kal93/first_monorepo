import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {
  CoreDataModule,
  coreDataRoutes,
} from '@production-nx-angular/core-data';
import {
  CoreStateModule,
  coreStateRoutes,
} from '@production-nx-angular/core-state';
import {
  MaterialModule,
  materialRoutes,
} from '@production-nx-angular/material';
import { RouttingModule } from './routting.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';

@NgModule({
  declarations: [AppComponent, WidgetsComponent, WidgetsListComponent, WidgetDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RouttingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
