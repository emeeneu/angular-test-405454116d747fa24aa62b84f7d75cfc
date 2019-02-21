import { NgModule } from '@angular/core';

// Components
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    // Components
    UsersComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [],
  providers: []
})
export class UsersModule {}
