import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
// import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'production-nx-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allWidgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.allWidgets$ = this.widgetsService.all();
  }
}
