import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-b',
  templateUrl: './sub-b.component.html',
  styleUrls: ['./sub-b.component.css']
})
export class SubBComponent implements OnInit {
  @Input() messagefromA: string;

  constructor() { }

  ngOnInit() {
  }

}

