import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsanewsComponent } from './usanews.component';

describe('UsanewsComponent', () => {
  let component: UsanewsComponent;
  let fixture: ComponentFixture<UsanewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsanewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
