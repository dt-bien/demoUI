import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallpositionComponent } from './showallposition.component';

describe('ShowallpositionComponent', () => {
  let component: ShowallpositionComponent;
  let fixture: ComponentFixture<ShowallpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallpositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
