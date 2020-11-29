import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadsComponent } from './payloads.component';

describe('PayloadsComponent', () => {
  let component: PayloadsComponent;
  let fixture: ComponentFixture<PayloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
