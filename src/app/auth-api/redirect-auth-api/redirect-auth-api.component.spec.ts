import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAuthApiComponent } from './redirect-auth-api.component';

describe('RedirectAuthApiComponent', () => {
  let component: RedirectAuthApiComponent;
  let fixture: ComponentFixture<RedirectAuthApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectAuthApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectAuthApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
