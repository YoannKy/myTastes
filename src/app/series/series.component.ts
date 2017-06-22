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
  start: number = 0;
  limit: number = 20;
  getSeries(): void {
    this.seriesService
      .getSeries({start: this.start, limit: this.limit})
      .then((series) => {
        console.log(series);
        this.series = series;
      });
  };
  constructor(private seriesService: SeriesService) { }

  pageUp(): void {
    this.start += this.limit;
    this.getSeries();
  }

  pageDown(): void {
    if (this.start - this.limit >= 0) {
      this.start -= this.limit;
      this.getSeries();
    }
  }

  ngOnInit() {
    this.getSeries();
  }
}
