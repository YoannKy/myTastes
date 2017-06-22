import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthApiComponent } from './auth-api.component';

describe('AuthApiComponent', () => {
  let component: AuthApiComponent;
  let fixture: ComponentFixture<AuthApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
