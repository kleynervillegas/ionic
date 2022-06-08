import { TestBed } from '@angular/core/testing';

import { SocketNotificService } from './socket-notific.service';

describe('SocketNotificService', () => {
  let service: SocketNotificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketNotificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
