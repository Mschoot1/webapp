import { TestBed, inject } from '@angular/core/testing';

import { Chat.Service.TsService } from './chat.service.ts.service';

describe('Chat.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chat.Service.TsService]
    });
  });

  it('should be created', inject([Chat.Service.TsService], (service: Chat.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
