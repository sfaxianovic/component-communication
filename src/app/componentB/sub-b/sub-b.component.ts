import {Component, OnInit} from '@angular/core';
import {EventBusService} from '../../event-bus.service';
import {Events} from '../../EmitEvent';

@Component({
  selector: 'app-sub-b',
  templateUrl: './sub-b.component.html',
  styleUrls: ['./sub-b.component.css']
})
export class SubBComponent implements OnInit {
  private messageFromSubA: string;

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {

    this.eventBusService.on(Events.SUB_COMPONENT_A_EVENT, (message) => this.messageFromSubA = message );
  }

}

