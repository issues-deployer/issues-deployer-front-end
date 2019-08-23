import {Component} from '@angular/core';
import {TitleService} from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Issues Deployer';

  constructor(public titleService: TitleService) {
  }
}
