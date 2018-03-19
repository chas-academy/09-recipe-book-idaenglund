import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDetailsComponent } from './saved-details.component';

describe('SavedDetailsComponent', () => {
  let component: SavedDetailsComponent;
  let fixture: ComponentFixture<SavedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
