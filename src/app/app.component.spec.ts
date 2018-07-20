import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
