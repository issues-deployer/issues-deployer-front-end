import {Component, OnInit} from '@angular/core';
import {TitleService} from '../title.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  private TITLE = 'My Account';

  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.TITLE);
  }
}
