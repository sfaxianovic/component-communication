import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export class Contrat {
  constructor(message: string) {
    this.message = message;
  }

  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrat: Contrat = new Contrat('Empty');

  private contratSubject$ = new BehaviorSubject<Contrat>(this.contrat);
  conrratChanged$ = this.contratSubject$.asObservable();

  constructor() {
  }

  contratchanged(model: Contrat) {
    this.contrat = model;
    this.contratSubject$.next(model);
  }
}
