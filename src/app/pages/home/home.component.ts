import { Component } from '@angular/core';
import { TimeService } from '../../core/services/time.service';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  horaActual: Time | null = null;

  horaActual$: Observable<string>



  constructor(private timeService: TimeService) {
    console.log(this.timeService.currentTime)
    this.horaActual$ = this.timeService.reloj;

  }


}
