import { Component, OnInit } from '@angular/core';
import { SuperGroup } from '../SuperGroup';

@Component({
  selector: 'app-super-groups',
  templateUrl: './super-groups.component.html',
  styleUrls: ['./super-groups.component.scss']
})
export class SuperGroupsComponent implements OnInit {

  superGroup2: SuperGroup = {
    id: 2,
    code: 'Test Code 2',
    shortName: 'Test Short Name 2',
    name: 'Test Name 2',
    description: 'Test Description 2',
    webUrl: 'http://google.com/1'
  };

  superGroups = [
    new SuperGroup(1, 'Test Code 1', 'Test Short Name 1', 'Test Name 1',
      'Test Description 1', 'http://google.com/2'),
    this.superGroup2
  ];

  constructor() { }

  ngOnInit() {
  }

}
