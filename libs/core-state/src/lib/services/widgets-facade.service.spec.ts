import { TestBed } from '@angular/core/testing';

import { WidgetsFacadeService } from './widgets-facade.service';

describe('WidgetsFacadeService', () => {
  let service: WidgetsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
