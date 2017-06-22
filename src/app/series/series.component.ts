import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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
  loading: boolean = true;
  page: number = 1;
  limit: number = 20;
  searchInput: string = '';
  searchInputControl = new FormControl();
  getSeries(): void {
    this.loading = true;
    this.seriesService
      .getSeries({page: this.page, limit: this.limit, title: this.searchInput})
      .then((series) => {
        this.series = series;
        this.loading = false;
      });
  };
  constructor(private seriesService: SeriesService) { }

  pageUp(): void {
    this.page++;
    this.getSeries();
  }

  pageDown(): void {
    if (this.page >= 0) {
      this.page--;
      this.getSeries();
    }
  }

  ngOnInit() {
    this.getSeries();
    this.searchInputControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {this.searchInput = newValue; this.getSeries()});
  }
}
