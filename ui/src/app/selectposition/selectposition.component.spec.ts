import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpositionComponent } from './selectposition.component';

describe('SelectpositionComponent', () => {
  let component: SelectpositionComponent;
  let fixture: ComponentFixture<SelectpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
