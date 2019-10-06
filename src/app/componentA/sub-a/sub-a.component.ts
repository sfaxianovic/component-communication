import {Component, OnInit} from '@angular/core';
import {Contrat, ContratService} from '../../contrat.service';

@Component({
  selector: 'app-sub-a',
  templateUrl: './sub-a.component.html',
  styleUrls: ['./sub-a.component.css']
})
export class SubAComponent implements OnInit {

  constructor(private contratService: ContratService) { }

  index = 0;
  ngOnInit() {
  }


  sendContratChanged() {
    this.contratService.contratchanged(new Contrat('contrat changed from sub A' + this.index++));
  }
}
