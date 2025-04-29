import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBbUiComponent } from './ngx-bb-ui.component';

describe('NgxBbUiComponent', () => {
  let component: NgxBbUiComponent;
  let fixture: ComponentFixture<NgxBbUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBbUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBbUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
