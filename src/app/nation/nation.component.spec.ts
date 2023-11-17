import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationComponent } from './nation.component';

describe('NationComponent', () => {
  let component: NationComponent;
  let fixture: ComponentFixture<NationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationComponent]
    });
    fixture = TestBed.createComponent(NationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
