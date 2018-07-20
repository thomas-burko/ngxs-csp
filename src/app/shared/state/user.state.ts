import { Action, State, StateContext } from '@ngxs/store';

export class SetUser {
  static readonly type = '[User] Set User';

  constructor(public user: User) {
  }
}

export interface User {
  firstname?: string;
  lastname?: string;
  rechte?: string[];
}

@State<User>({
  name: 'user',
  defaults: null,
})
export class UserState {
  @Action(SetUser)
  setUser(ctx: StateContext<User>, action: SetUser) {
    ctx.patchState(action.user);
  }
}
