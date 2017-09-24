import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Worshop seed';

  constructor() { }

  ngOnInit() {

  }
}
