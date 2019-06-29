import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSalonsComponent } from './service-salons.component';

describe('ServiceSalonsComponent', () => {
  let component: ServiceSalonsComponent;
  let fixture: ComponentFixture<ServiceSalonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSalonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSalonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
