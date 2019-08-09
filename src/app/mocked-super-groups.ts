import { SuperGroup } from './SuperGroup';

export const SUPER_GROUPS: SuperGroup[] = [
  new SuperGroup(
    1,
    'Test Code 1',
    'Test Short Name 1',
    'Test Name 1',
    'Test Description 1',
    'http://google.com/1'
  ),
  {
    id: 2,
    code: 'Test Code 2',
    shortName: 'Test Short Name 2',
    name: 'Test Name 2',
    description: 'Test Description 2',
    webUrl: 'http://google.com/2'
  },
  {
    id: 3,
    code: 'Test Code 3',
    shortName: 'Test Short Name 3',
    name: 'Test Name 3',
    description: 'Test Description 3',
    webUrl: 'http://google.com/3'
  }
];