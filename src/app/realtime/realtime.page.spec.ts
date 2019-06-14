import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimePage } from './realtime.page';

describe('RealtimePage', () => {
  let component: RealtimePage;
  let fixture: ComponentFixture<RealtimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
