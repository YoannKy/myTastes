import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie';
import { SeriesService } from '../services/series.service';
@Component({
  selector: 'app-series-favorites',
  templateUrl: './series-favorites.component.html',
  styleUrls: ['./series-favorites.component.css'],
  providers: [SeriesService]
})
export class SeriesFavoritesComponent implements OnInit {
  series: Serie[];
  constructor(
      private seriesService: SeriesService
  ) {}

  getFavoriteSeries(): void {
    this.seriesService
        .getFavoriteSeries()
        .then((series) => {
          this.series = series;
        });
  };
  ngOnInit() {
    this.getFavoriteSeries();
  }
}
