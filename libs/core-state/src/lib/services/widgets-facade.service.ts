import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetsFacadeService {

  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private createdWidget = new Subject<Widget>();
  private updatedWidget = new Subject<Widget>();
  private deletedWidget = new Subject<Widget>();
  private mutations = new Subject<boolean>();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();
  constructor(private widgetsService: WidgetsService) {}

  reset() {
    this.mutations.next(true);
  }

  loadAllWidgets() {
    this.widgetsService.all().subscribe((response: Widget[]) => {
      this.allWidgets.next(response);
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
