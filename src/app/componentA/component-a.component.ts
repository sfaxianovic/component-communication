import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receiveMessageFromSubA($event: any) {
    console.log('receinve message from sub A');
    console.log('send message to upper component');
  }
}
