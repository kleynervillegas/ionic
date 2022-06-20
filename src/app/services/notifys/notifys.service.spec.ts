import { TestBed } from '@angular/core/testing';

import { NotifysService } from './notifys.service';

describe('NotifysService', () => {
  let service: NotifysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
