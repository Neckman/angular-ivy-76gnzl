import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageHeaderComponent } from './page-header/page-header.component'
import { AddPeopleFormComponent } from './add-people-form/add-people-form.component'
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    PageHeaderComponent,
    AddPeopleFormComponent,
    PeopleListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
