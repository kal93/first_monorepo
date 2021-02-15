import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
// import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'production-nx-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // allWidgets$: Observable<Widget[]> = this.widgetsFacade.allWidgets$;

  constructor() {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    // this.widgetsFacade.loadWidgets();
  }
}
