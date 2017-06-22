import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesDetailComponent } from './series-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';

describe('SeriesDetailComponent', () => {
  let component: SeriesDetailComponent;
  let fixture: ComponentFixture<SeriesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesDetailComponent],
      imports: [HttpModule, RouterTestingModule, ReactiveFormsModule, FormsModule, MaterializeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
