import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'production-nx-angular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget;

  widgets$: Observable<Widget[]> = this.widgetFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetFacade.selectedWidget$;

  constructor(private widgetFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.widgetFacade.mutations$.subscribe((_) => {
      this.reset();
    });
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    this.selectedWidget = {
      description: '',
      id: '',
      title: '',
    };
  }

  selectWidget(widget: Widget) {
    this.widgetFacade.selectWidget(widget);
    // this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgetFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    if (widget.id) {
      this.widgetFacade.updateWidget(widget);
    } else {
      this.widgetFacade.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    // const newWidget = Object.assign({}, widget, { id: this.getRandomID()})
    // this.widgets = [...this.widgets, newWidget];
    this.widgetFacade.createWidget(widget);
    this.resetForm();
  }

  updateWidget(widget: Widget) {
    // this.widgets = this.widgets.map(w => {
    //   return (widget.id === w.id) ? widget : w;
    // });
    this.widgetFacade.updateWidget(widget);
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    // this.widgets = this.widgets.filter(w => widget.id !== w.id);
    this.widgetFacade.deleteWidget(widget);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
