import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDisplayComponent } from './db-display.component';

describe('DbDisplayComponent', () => {
  let component: DbDisplayComponent;
  let fixture: ComponentFixture<DbDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
