import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StashDetailComponent } from './stash-detail.component';

describe('StashDetailComponent', () => {
  let component: StashDetailComponent;
  let fixture: ComponentFixture<StashDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StashDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
