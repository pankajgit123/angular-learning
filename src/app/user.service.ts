import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { 
    this.counterService.activeCount = this.activeUsers.length;
    this.counterService.inactiveCount = this.inactiveUsers.length;
  }

  setToInactive(id: number) {
    // const id = this.activeUsers.indexOf(user);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1)
    this.counterService.increaseInActiveCount(this.inactiveUsers.length);
  }

  setToActive(id: number) {
    // const id = this.inactiveUsers.indexOf(user);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1)
    this.counterService.increaseActiveCount(this.activeUsers.length);
  }

  getActiveUserCount() {
    return this.counterService.activeCount;
  }

  getInActiveUserCount() {
    return this.counterService.inactiveCount;
  }
}