import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidNewComponent } from './bid-new.component';

describe('BidNewComponent', () => {
  let component: BidNewComponent;
  let fixture: ComponentFixture<BidNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
