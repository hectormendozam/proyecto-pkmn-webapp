import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { PageHeaderComponent } from './partials/page-header/page-header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LoadingSpinnerComponent } from './partials/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    NavbarComponent,
    SidenavComponent,
    PageHeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
