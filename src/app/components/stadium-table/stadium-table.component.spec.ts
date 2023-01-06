import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumTableComponent } from './stadium-table.component';

describe('StadiumTableComponent', () => {
  let component: StadiumTableComponent;
  let fixture: ComponentFixture<StadiumTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
