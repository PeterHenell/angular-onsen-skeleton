import { Component } from '@angular/core';

import {
  OnsLazyRepeat,
  ViewChild
} from 'ngx-onsenui';

import * as models from '../service/model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pet Editor';

  @ViewChild(OnsLazyRepeat) lazyRepeat: OnsLazyRepeat;

  pet: models.Pet = {
    id: 1,
    name: 'Spot',
    category: {
      id: 222,
      name: "Dogs and Hens"
    },
    status: models.Pet.StatusEnum.available,
    tags: [{name: "Nice Doggo"}, {name: "Good dogs"}],
    photoUrls: [
        "http://whaddagooddog.com/wp-content/uploads/2016/04/57951907.jpg", 
        "https://images.petsbest.com/marketing/blog/Dogs-Bite.jpg"
      ]
  };
}
