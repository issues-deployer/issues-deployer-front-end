import { Injectable } from '@angular/core';
import { SuperGroup } from './SuperGroup';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { SUPER_GROUPS } from './mocked-super-groups';

@Injectable({
  providedIn: 'root'
})
export class SuperGroupService {

  constructor(private messageService: MessageService) { }
  
  getSuperGroups(): Observable<SuperGroup[]> {
    // TODO: send the message _after_ fetching the super groups.
    this.messageService.add('SuperGroupService: fetched super groupos');
    return of(SUPER_GROUPS);
  }
}
