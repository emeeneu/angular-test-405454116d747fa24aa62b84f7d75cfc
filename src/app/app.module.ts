import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './modules/main/pages/main.component';

// Modules
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';

// Routes
const routes: Routes = [
  { path: '', component: MainComponent },
]

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
