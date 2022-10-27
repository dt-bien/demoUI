import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsupervisorComponent } from './selectsupervisor.component';

describe('SelectsupervisorComponent', () => {
  let component: SelectsupervisorComponent;
  let fixture: ComponentFixture<SelectsupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectsupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
