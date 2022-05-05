import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptproComponent } from './uptpro.component';

describe('UptproComponent', () => {
  let component: UptproComponent;
  let fixture: ComponentFixture<UptproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
