import { Component, NgModule } from '@angular/core';

import {
  OnsLazyRepeat,
  OnsenModule,
  ViewChild
} from 'ngx-onsenui';

// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as models from '../service/model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pet Editor';

  @ViewChild(OnsLazyRepeat) lazyRepeat: OnsLazyRepeat;

  show(id) {
    alert(id);
  }

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
        "/assets/dog1.jpeg", 
        "/assets/dog2.jpeg"
      ]
  };
}
