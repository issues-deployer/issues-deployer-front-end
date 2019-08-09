import { Component, OnInit } from '@angular/core';
import { SuperGroup } from '../SuperGroup';
import { SuperGroupService } from '../super-group.service';

@Component({
  selector: 'app-super-groups',
  templateUrl: './super-groups.component.html',
  styleUrls: ['./super-groups.component.scss']
})
export class SuperGroupsComponent implements OnInit {

  superGroups: SuperGroup[] = [];
  selectedSuperGroup: SuperGroup;

  constructor(private superGroupService: SuperGroupService) { }

  ngOnInit() {
    this.getSuperGroups();
  }
  
  getSuperGroups(): void {
    this.superGroupService.getSuperGroups()
        .subscribe(superGroups => this.superGroups = superGroups);
  }

  onSelectSuperGroup(superGroup: SuperGroup): void {
    this.selectedSuperGroup = superGroup;
  }
}
