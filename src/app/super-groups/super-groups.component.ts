import { Component, OnInit } from '@angular/core';
import { SuperGroup } from '../SuperGroup';
import { SuperGroupService } from '../super-group.service';

@Component({
  selector: 'app-super-groups',
  templateUrl: './super-groups.component.html',
  styleUrls: ['./super-groups.component.scss']
})
export class SuperGroupsComponent implements OnInit {

  selectedSuperGroup: SuperGroup;

  superGroups: SuperGroup[];

  constructor(private superGroupService: SuperGroupService) { }

  getSuperGroups(): void {
    this.superGroupService.getSuperGroups()
      .subscribe(superGroups => this.superGroups = superGroups);
  }

  ngOnInit() {
    this.getSuperGroups();
  }

  onSuperGroupSelect(superGroup: SuperGroup) {
    this.selectedSuperGroup = superGroup;
  }
}
