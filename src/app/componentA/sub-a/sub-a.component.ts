import {Component, OnInit} from '@angular/core';
import {EventBusService} from '../../event-bus.service';
import {EmitEvent, Events} from '../../EmitEvent';

@Component({
  selector: 'app-sub-a',
  templateUrl: './sub-a.component.html',
  styleUrls: ['./sub-a.component.css']
})
export class SubAComponent implements OnInit {
  constructor(private eventBusService: EventBusService) { }

  index = 0;
  ngOnInit() {
  }

  sentEventToSubB() {
    this.eventBusService.emit(new EmitEvent(Events.SUB_COMPONENT_A_EVENT, 'Hello from Sub A' + this.index ++));
  }
}
