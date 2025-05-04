import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInputGroupComponent } from './dropdown-input-group.component';

describe('DropdownInputGroupComponent', () => {
  let component: DropdownInputGroupComponent;
  let fixture: ComponentFixture<DropdownInputGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownInputGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownInputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
