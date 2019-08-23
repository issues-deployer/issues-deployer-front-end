import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SuperGroupsComponent} from './super-groups.component';

describe('SuperGroupsComponent', () => {
  let component: SuperGroupsComponent;
  let fixture: ComponentFixture<SuperGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperGroupsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
