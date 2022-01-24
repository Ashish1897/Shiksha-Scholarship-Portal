import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScholarshipComponent } from './add-scholarship.component';

describe('AddScholarshipComponent', () => {
  let component: AddScholarshipComponent;
  let fixture: ComponentFixture<AddScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScholarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
