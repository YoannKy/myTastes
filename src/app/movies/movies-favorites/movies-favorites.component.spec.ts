import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFavoritesComponent } from './movies-favorites.component';

describe('MoviesFavoritesComponent', () => {
  let component: MoviesFavoritesComponent;
  let fixture: ComponentFixture<MoviesFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
