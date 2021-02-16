import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';

import { select, Store, Action } from '@ngrx/store';
import { Subject } from 'rxjs';

import * as fromWidgets from './widgets.reducer';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  // // QUERY => State flows out i.e state flows down
  // loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  // allWidgets$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  // selectedWidget$ = this.store.pipe(select(WidgetsSelectors.getSelected));

  // constructor(private store: Store<fromWidgets.WidgetsPartialState>) {}

  // // COMMAND => Events flow in i.e events bubble up
  // dispatch(action: Action) {
  //   this.store.dispatch(action);
  // }

  /**
   * Why are Subjects private?
   * Subject has ability to control the control flow within its observable stream. Do not expose this to outside the service.If exposed
   * you will end up with shared mutable state which is a recipe for disaster and will create memory leaks.
   * Expose the observable stream of the subject instead.
   */
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject<boolean>();
  private createdWidget = new Subject<Widget>();
  private updatedWidget = new Subject<Widget>();
  private deletedWidget = new Subject<Widget>();

  // Expose observable stream of the subject as observable. This observable will be responsible for propagating the data from the stream itself.
  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();
 

  constructor(private widgetsService: WidgetsService) {}

  loadWidgets() {
    this.widgetsService.all().subscribe({
      next: (response: Widget[]) => {
        this.allWidgets.next(response);
        console.log('Next...');
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed...');
      },
    });
  }

  selectWidget(widget: Widget) {
    // this.widgetsService.find(widget).subscribe((response) => {
    //   this.selectedWidget.next(widget);
    // });
    this.selectedWidget.next(widget);
  }

  createWidget(widget: Widget) {
    this.widgetsService.create(widget).subscribe((response) => {
      this.createdWidget.next(widget);
    });
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget).subscribe((response) => {
      this.updatedWidget.next(widget);
    });
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget).subscribe((response) => {
      this.deletedWidget.next(widget);
    });
  }


}
