import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Components
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';

// Routes
const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: NewUserComponent }
];

@NgModule({
  declarations: [
    // Components
    UsersComponent,
    UserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class UsersModule {}
