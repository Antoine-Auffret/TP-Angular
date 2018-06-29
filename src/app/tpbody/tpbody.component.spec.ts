import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpbodyComponent } from './tpbody.component';

describe('TpbodyComponent', () => {
  let component: TpbodyComponent;
  let fixture: ComponentFixture<TpbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
