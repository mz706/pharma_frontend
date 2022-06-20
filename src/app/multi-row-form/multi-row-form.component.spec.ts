import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowFormComponent } from './multi-row-form.component';

describe('MultiRowFormComponent', () => {
  let component: MultiRowFormComponent;
  let fixture: ComponentFixture<MultiRowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRowFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
