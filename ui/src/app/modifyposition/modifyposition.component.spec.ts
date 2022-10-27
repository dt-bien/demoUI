import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifypositionComponent } from './modifyposition.component';

describe('ModifypositionComponent', () => {
  let component: ModifypositionComponent;
  let fixture: ComponentFixture<ModifypositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifypositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifypositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
