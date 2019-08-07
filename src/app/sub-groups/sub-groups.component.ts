import {Component, Input, OnInit} from '@angular/core';
import {SuperGroup} from '../SuperGroup';
import {SubGroup} from '../SubGroup';

@Component({
  selector: 'app-sub-groups',
  templateUrl: './sub-groups.component.html',
  styleUrls: ['./sub-groups.component.scss']
})
export class SubGroupsComponent implements OnInit {

  @Input() superGroup: SuperGroup;
  subGroups: SubGroup[] = [
    {
      id: 10,
      code: 'Test Code 10',
      shortName: 'Test Short Name 10',
      name: 'Test Name 10',
      description: 'Test Description 10',
      webUrl: 'http://google.com/10'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
