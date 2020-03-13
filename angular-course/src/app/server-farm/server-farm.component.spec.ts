import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerFarmComponent } from './server-farm.component';

describe('ServerFarmComponent', () => {
  let component: ServerFarmComponent;
  let fixture: ComponentFixture<ServerFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
