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
  payloads$

  constructor(private payloadsService: PayloadsGQL) {
    this.payloads$ = this.payloadsService.fetch({ limit: 30 }).pipe(
      tap((payloads) => console.log(payloads)),
      map((payloads) => payloads.data.payloads)
    )
  }

  ngOnInit(): void {
  }

}
