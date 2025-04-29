import { TestBed } from '@angular/core/testing';

import { NgxBbUiService } from './ngx-bb-ui.service';

describe('NgxBbUiService', () => {
  let service: NgxBbUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBbUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
