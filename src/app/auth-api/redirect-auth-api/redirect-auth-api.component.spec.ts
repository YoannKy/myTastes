import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CallbackHttpService } from '../services/callback-http.service';
import { MaterializeModule } from 'ng2-materialize';
import { RedirectAuthApiComponent } from './redirect-auth-api.component';

describe('RedirectAuthApiComponent', () => {
  let component: RedirectAuthApiComponent;
  let fixture: ComponentFixture<RedirectAuthApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectAuthApiComponent ],
      imports: [HttpModule, RouterTestingModule, ReactiveFormsModule, FormsModule, MaterializeModule],
      providers : [CallbackHttpService]

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
