import { EventEmitter } from "@angular/core";
import { Data } from "./Data";

export class CounterService {

    activeCount: number = 0;
    inactiveCount: number = 0;
    data: EventEmitter<Data> = new EventEmitter<Data>();

    increaseActiveCount(count: number) {
      this.activeCount ++;
      this.inactiveCount --;
      this.data.emit({activeCount: this.activeCount, inactiveCount: this.inactiveCount});
    }

    increaseInActiveCount(count: number) {
      this.inactiveCount++;
      this.activeCount --;
      this.data.emit({activeCount: this.activeCount, inactiveCount: this.inactiveCount});
    }
}