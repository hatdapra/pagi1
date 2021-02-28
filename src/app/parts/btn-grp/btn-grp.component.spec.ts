import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGrpComponent } from './btn-grp.component';

describe('BtnGrpComponent', () => {
  let component: BtnGrpComponent;
  let fixture: ComponentFixture<BtnGrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
