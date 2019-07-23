import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
data = '2009-10-03T21:01:00+03:00';
  constructor() {}

    getValueFromInput(event) {
        console.log(event.target.value);
    }
}
