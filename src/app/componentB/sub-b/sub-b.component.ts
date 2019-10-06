import {Component, OnInit} from '@angular/core';
import {Contrat, ContratService} from '../../contrat.service';

@Component({
  selector: 'app-sub-b',
  templateUrl: './sub-b.component.html',
  styleUrls: ['./sub-b.component.css']
})
export class SubBComponent implements OnInit {
  contrat: Contrat = new Contrat('');

  constructor(private contratService: ContratService) {
  }

  ngOnInit() {
    this.contratService.conrratChanged$.subscribe(contrat => this.contrat = contrat);
  }

}

