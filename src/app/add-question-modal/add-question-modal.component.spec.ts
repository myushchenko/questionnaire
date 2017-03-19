import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionModalComponent } from './add-question-modal.component';

describe('AddQuestionModalComponent', () => {
  let component: AddQuestionModalComponent;
  let fixture: ComponentFixture<AddQuestionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
