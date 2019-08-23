import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuperGroup} from '../SuperGroup';
import {SuperGroupService} from '../super-group.service';
import {TitleService} from '../title.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-super-groups',
  templateUrl: './super-groups.component.html',
  styleUrls: ['./super-groups.component.scss']
})
export class SuperGroupsComponent implements OnInit, OnDestroy {
  superGroups: SuperGroup[] = [];
  private TITLE = 'Super Groups Tree';
  private querySubscription: Subscription;

  constructor(
    private superGroupService: SuperGroupService,
    private titleService: TitleService
  ) {
  }

  ngOnInit() {
    this.getSuperGroups();
    this.titleService.setTitle(this.TITLE);
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }

  getSuperGroups(): void {
    this.querySubscription = this.superGroupService.getSuperGroups()
    .subscribe(superGroups => {
      this.superGroups = superGroups;
    });
  }
}
