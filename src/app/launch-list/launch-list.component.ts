import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service'
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pastLaunchesServices: PastLaunchesListGQL) {
  }

  pastLaunches$ = this.pastLaunchesServices.fetch({ limit: 30 }).pipe(
    tap((data) => console.log(data.data)),
    map(res => res.data.launchesPast),
  )

  ngOnInit(): void {
  }

}
