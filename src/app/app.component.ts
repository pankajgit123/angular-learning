import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeCount: number = 0;
  inactiveCount: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.data.subscribe(data => {
      this.activeCount = data.activeCount;
      this.inactiveCount = data.inactiveCount;
    })
  }

}
