import { Component } from '@angular/core';
import{environment} from '../environments/environment';
import { CarouselConfig } from 'ngx-bootstrap/carousel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5500, noPause: true, showNavigationArrows: true,showIndicators: true} }
  ]

})
export class AppComponent {
  title = 'my-app';
  hostURL=environment.hostURL;
}
