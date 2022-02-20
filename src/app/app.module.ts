import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {FooterComponent} from "./footer/footer.component";
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    CarComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
