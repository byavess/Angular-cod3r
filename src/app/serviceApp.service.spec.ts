/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceAppService } from './serviceApp.service';

describe('Service: ServiceApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAppService]
    });
  });

  it('should ...', inject([ServiceAppService], (service: ServiceAppService) => {
    expect(service).toBeTruthy();
  }));
});
