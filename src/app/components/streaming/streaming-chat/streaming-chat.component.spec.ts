import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingChatComponent } from './streaming-chat.component';

describe('StreamingChatComponent', () => {
  let component: StreamingChatComponent;
  let fixture: ComponentFixture<StreamingChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
