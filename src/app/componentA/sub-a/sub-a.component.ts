import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sub-a',
  templateUrl: './sub-a.component.html',
  styleUrls: ['./sub-a.component.css']
})
export class SubAComponent implements OnInit {

  @Output() messageOutPut =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendMessageToSubA() {
    this.messageOutPut.emit('Hello from sub A');
  }
}
