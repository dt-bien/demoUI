import { TestBed } from '@angular/core/testing';

import { RelatedmemberService } from './relatedmember.service';

describe('RelatedmemberService', () => {
  let service: RelatedmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatedmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
