import { TestBed, inject, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { PositionService } from './position.service';
import { Http, XHRBackend, HttpModule, RequestOptions, BaseRequestOptions } from '@angular/http';

describe('PositionService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        PositionService,
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
        }
      ],
      imports: [
        HttpModule
      ]
    });

  it('should be created', async(() => inject([PositionService], (service: PositionService) => {
    expect(service).toBeTruthy();
  })));

  }))

});
