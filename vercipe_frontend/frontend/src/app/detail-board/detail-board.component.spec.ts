import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardComponent } from './detail-board.component';

describe('DetailBoardComponent', () => {
  let component: DetailBoardComponent;
  let fixture: ComponentFixture<DetailBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
