import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LaunchDetailsGQL } from '../services/spacexGraphql.service'
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {

  constructor(private launchDetailsService: LaunchDetailsGQL, private readonly route: ActivatedRoute) { }

  launchDetails$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id')
      return this.launchDetailsService.fetch({ id })
    }),
    map(res => res.data.launch)
  )

  ngOnInit(): void {
  }

}
