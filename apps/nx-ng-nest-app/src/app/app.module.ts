import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CoreDataModule
} from '@fem/core-data';
import {
  CoreStateModule
} from '@fem/core-state';
import {
  MaterialModule
} from '@fem/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routting.module';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    WidgetDetailsComponent, 
    WidgetsComponent,
    WidgetsListComponent, 
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    // StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
