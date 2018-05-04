import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalazComponent } from './nalaz.component';

describe('NalazComponent', () => {
  let component: NalazComponent;
  let fixture: ComponentFixture<NalazComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalazComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
