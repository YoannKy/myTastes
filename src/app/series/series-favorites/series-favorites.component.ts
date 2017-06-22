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
  isConnectedToBetaSeries: boolean = false;
  constructor(
      private seriesService: SeriesService
  ) {
    this.isConnectedToBetaSeries = localStorage.getItem('access_token_api') !== null;
  }

  getFavoriteSeries(): void {
    this.seriesService
        .getFavoriteSeries()
        .then((series) => {
          this.series = series;
        });
  };
  ngOnInit() {
    if(this.isConnectedToBetaSeries === true) {
      this.getFavoriteSeries();
    }
  }
}
