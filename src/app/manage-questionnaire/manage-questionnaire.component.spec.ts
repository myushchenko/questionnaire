import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuestionnaireComponent } from './manage-questionnaire.component';

describe('ManageQuestionnaireComponent', () => {
  let component: ManageQuestionnaireComponent;
  let fixture: ComponentFixture<ManageQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
