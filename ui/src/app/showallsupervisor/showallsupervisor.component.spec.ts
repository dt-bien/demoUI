import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallsupervisorComponent } from './showallsupervisor.component';

describe('ShowallsupervisorComponent', () => {
  let component: ShowallsupervisorComponent;
  let fixture: ComponentFixture<ShowallsupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallsupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
