import { Component, OnInit } from '@angular/core';
import { SuperGroup } from '../SuperGroup';
import { SuperGroupService } from '../super-group.service';
import { TitleService } from '../title.service';

@Component({
  selector: 'app-super-groups',
  templateUrl: './super-groups.component.html',
  styleUrls: ['./super-groups.component.scss']
})
export class SuperGroupsComponent implements OnInit {
  const TITLE: string = "Super Groups Tree";

  superGroups: SuperGroup[] = [];

  constructor(
    private superGroupService: SuperGroupService,
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.getSuperGroups();
    this.titleService.setTitle(this.TITLE);
  }
  
  getSuperGroups(): void {
    this.superGroupService.getSuperGroups()
        .subscribe(superGroups => this.superGroups = superGroups);
  }
}
