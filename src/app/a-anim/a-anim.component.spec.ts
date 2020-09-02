import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAnimComponent } from './a-anim.component';

describe('AAnimComponent', () => {
  let component: AAnimComponent;
  let fixture: ComponentFixture<AAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
