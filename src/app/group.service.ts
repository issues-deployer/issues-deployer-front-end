import { Injectable } from '@angular/core';
import { Group } from './Group';
import { Observable, of } from 'rxjs';
import { SUPER_GROUPS } from './mocked-super-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  
  getGroup(id: number): Observable<Group> {
    return of(SUPER_GROUPS.find(group => group.id === id));
  }
}
