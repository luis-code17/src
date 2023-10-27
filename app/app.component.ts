import { Component } from '@angular/core';
import { data } from './data';
import { Bird } from 'bird';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title: string;

  constructor() {
    const mybird = new Bird('pardal', 3, "petit");
    console.log(mybird.Birdname);
    console.log(mybird.Wingspan);
    console.log(mybird.eggsize);

    this.title = this.titleOfTheApplication()
  }

  private titleOfTheApplication(): string {
    
    return data.app.generalInformation.title;
  }
}


