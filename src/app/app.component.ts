import { Component } from '@angular/core';
import { SetUser, User, UserState } from './shared/state/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(UserState) user: Observable<User>;

  constructor(private store: Store) {
    this.store.dispatch(new SetUser({firstname: 'Firstname', lastname: 'Lastname'}));
  }
}
