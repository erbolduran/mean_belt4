import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidErrorComponent } from './bid-error.component';

describe('BidErrorComponent', () => {
  let component: BidErrorComponent;
  let fixture: ComponentFixture<BidErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
