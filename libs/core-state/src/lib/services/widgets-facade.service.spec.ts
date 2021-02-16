import { TestBed } from '@angular/core/testing';

import { WidgetsFacadeServiceOld } from './widgets-facade.service';

describe('WidgetsFacadeServiceOld', () => {
  let service: WidgetsFacadeServiceOld;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsFacadeServiceOld);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
