import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesFavoritesComponent } from './series-favorites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';

describe('SeriesFavoritesComponent', () => {
  let component: SeriesFavoritesComponent;
  let fixture: ComponentFixture<SeriesFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesFavoritesComponent],
      imports: [HttpModule, RouterTestingModule, ReactiveFormsModule, FormsModule, MaterializeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
