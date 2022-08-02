import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'add-people-form',
  templateUrl: './add-people-form.component.html',
  styleUrls: ['./add-people-form.component.css']
})
export class AddPeopleFormComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  @Output() newPersonEvent = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
    this.clearForm();
  }

  private clearForm()
  {
    this.firstName = '';
    this.lastName = '';
  }

  public onAdd()
  {
    var newPerson = new Person(this.firstName, this.lastName);
    this.newPersonEvent.emit(newPerson);
    this.clearForm();
  }

}