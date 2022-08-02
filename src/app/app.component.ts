import { Component, ViewChild } from '@angular/core';
import { Person } from './person'
import { PeopleListComponent } from './people-list/people-list.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild(PeopleListComponent) peopleList: PeopleListComponent;

  OnNewPerson(person: Person)
  {
    this.peopleList.addRow(person);
  }
}
