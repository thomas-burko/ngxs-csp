import { NgModule } from '@angular/core';
import { UserState } from './state/user.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    NgxsModule.forFeature([UserState])
  ]
})
export class SharedModule {
}
