import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { PastLaunchesListGQL, PayloadsGQL } from '../services/spacexGraphql.service';

@Component({
  selector: 'app-payloads',
  templateUrl: './payloads.component.html',
  styleUrls: ['./payloads.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PayloadsComponent implements OnInit {
  pastLaunches$
  payloads$

  constructor(private payloadsService: PayloadsGQL, private pastLaunchesServices: PastLaunchesListGQL, private readonly route: ActivatedRoute) {
    console.log(`Am I called?`)
    this.pastLaunches$ = this.pastLaunchesServices.fetch({ limit: 30 }).pipe(
      tap((pastLaunches) => console.log(pastLaunches.data)),
      map(res => res.data.launchesPast),
    )
    this.payloads$ = this.payloadsService.fetch({ limit: 30 }).pipe(
      tap((payloads) => console.log(payloads)),
      map((payloads) => payloads.data.payloads)
    )
  }

  ngOnInit(): void {
  }

}
