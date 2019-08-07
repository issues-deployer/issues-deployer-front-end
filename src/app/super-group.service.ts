import {Injectable} from '@angular/core';
import {SuperGroup} from './SuperGroup';
import {SUPER_GROUPS} from './mock-super-groups';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SuperGroupService {

  getSuperGroups(): Observable<SuperGroup[]> {
    // TODO: send the message _after_ fetching the super groups.
    this.messageService.add('SuperGroupService: fetched super groupos');
    return of(SUPER_GROUPS);
  }

  constructor(private messageService: MessageService) {
  }
}
