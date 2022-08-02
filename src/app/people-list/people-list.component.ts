import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Person } from '../person'

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  public people: Person[] = [] as Person[];
  public people$: Observable<Person[]> = of(this.people);

  constructor()
  {
  }

  ngOnInit()
  {
    this.addRow(new Person('Ricky', 'Bobby'));
    this.addRow(new Person('John', 'Doe'));
  }

  addRow(person: Person)
  {
    this.people.push(person);
  }

  removeRow(person: Person)
  {
    const indexOfPerson = this.people.indexOf(person);
    this.people.splice(indexOfPerson, 1);
  }


}