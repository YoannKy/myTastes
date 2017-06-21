import { Component, OnInit } from '@angular/core';
import { SeriesService } from './services/series.service';
import { Serie } from './model/serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [SeriesService]
})
export class SeriesComponent implements OnInit {
  series: Serie[];
  getSeries(): void {
    this.seriesService
      .getSeries()
      .then((series) => {
        console.log(series);
        this.series = series;
      });
  };
  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }
}
