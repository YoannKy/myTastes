import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFavoritesComponent } from './series-favorites.component';

describe('SeriesFavoritesComponent', () => {
  let component: SeriesFavoritesComponent;
  let fixture: ComponentFixture<SeriesFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesFavoritesComponent ]
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
