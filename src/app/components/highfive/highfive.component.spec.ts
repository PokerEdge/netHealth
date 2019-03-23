import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighfiveComponent } from './highfive.component';

describe('HighfiveComponent', () => {
  let component: HighfiveComponent;
  let fixture: ComponentFixture<HighfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
