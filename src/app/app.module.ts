import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { RestModelService } from './services/rest-model.service';
import { InlineInputComponent } from './shared/inline-input/inline-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    InlineInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RestModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
