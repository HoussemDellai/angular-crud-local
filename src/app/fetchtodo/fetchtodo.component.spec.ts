import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchtodoComponent } from './fetchtodo.component';

describe('FetchtodoComponent', () => {
  let component: FetchtodoComponent;
  let fixture: ComponentFixture<FetchtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
