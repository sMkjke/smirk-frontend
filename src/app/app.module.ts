import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {initializeKeycloak} from "./init/keycloak-init.factory";
import {KeycloakService} from "keycloak-angular";

const routes: Routes = [
  { path: 'persons/:id', component: PersonDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    KeycloakService // Add KeycloakService to the providers array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

