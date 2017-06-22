import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { SerieDetails } from '../model/serieDetails';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css'],
  providers: [SeriesService]
})
export class SeriesDetailComponent implements OnInit {
  serie: SerieDetails;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.seriesService.getSerie(+params['id']))
      .subscribe(serie => this.serie = serie);
  }

}
