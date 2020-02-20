import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {EmitEvent} from "./EmitEvent";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject();

  constructor() {
  }

  emit(eventEmmitted: EmitEvent) {
    this.subject$.next(eventEmmitted);
  }

  on(eventType: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EmitEvent) => e.name === eventType),
      map((e: EmitEvent) => e.message))
      .subscribe(action);
  }
}
