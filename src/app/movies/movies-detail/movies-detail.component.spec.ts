import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesDetailComponent } from './movies-detail.component';
import { MaterializeModule } from 'ng2-materialize';

describe('MoviesDetailComponent', () => {
  let component: MoviesDetailComponent;
  let fixture: ComponentFixture<MoviesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule, ReactiveFormsModule, FormsModule, MaterializeModule],
      declarations: [ MoviesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
