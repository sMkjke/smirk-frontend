import {Component, OnInit} from '@angular/core';
import {PersonService} from './person.service';
import {PersonModel} from './person.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  person: PersonModel | undefined;

  constructor(private personService: PersonService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = 10; // Replace with the actual ID or fetch it from the route parameters
    this.personService.getPerson(id).subscribe((person) => {
      this.person = person;
    });
  }

  getCharacterImage(): string {
    if (this.person?.sex === 'Male') {
      return 'assets/male.png';
    } else if (this.person?.sex === 'Female') {
      return 'assets/female.png';
    } else {
      return 'assets/character.png';
    }
  }

  getGenderImage(): string {
    if (this.person?.sex === 'Male') {
      return 'assets/male-icon.png';
    } else {
      return 'assets/female-icon.png';
    }
  }
}
