import { Component, OnInit } from '@angular/core';
import { Group } from '../Group';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  group: Group;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGroup();
  }

  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('superGroupId');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }
  
  goBack(): void {
    this.location.back();
  }
}
