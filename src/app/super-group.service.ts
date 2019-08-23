import {Injectable} from '@angular/core';
import {SuperGroup} from './SuperGroup';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

const SUPER_GROUP_QUERY = gql(`
    query SUPER_GROUP_QUERY {
        findAllSuperGroups {
            id
            code
            shortName
            name
            description
            webUrl
        }
    }
`);

@Injectable({
  providedIn: 'root'
})
export class SuperGroupService {

  constructor(
    private messageService: MessageService,
    private apollo: Apollo
  ) {
  }

  getSuperGroups(): Observable<SuperGroup[]> {
    return this.apollo.watchQuery<any>({
      query: SUPER_GROUP_QUERY
    })
    .valueChanges
    .pipe(map(({data}) => {
      this.messageService.add('SuperGroupService: fetched super groups');
      return data.findAllSuperGroups;
    }));
  }
}
