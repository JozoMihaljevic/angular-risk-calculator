import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs/Subject';

@Injectable()
export class KalkulatorRizikaService {
  //private dataObs$ = new Subject<any>();

  // getData() {
  //   return this.dataObs$;
  // }

  // updateData(fastPreview) {
  //   this.dataObs$.next(fastPreview);
  // }
ukupniRizik: number;
ukupniRizikPostotak: number;

  racunajUkupniRizik(rizikKks, rizikHoma, rizikWHR, rizikBMI) {
    this.ukupniRizik = rizikBMI + rizikWHR + rizikHoma + rizikKks;
    return  this.ukupniRizik;
  }

  racunajUkupniRizikPostotak() {
  	this.ukupniRizikPostotak = this.ukupniRizik/36;
  	return this.ukupniRizikPostotak;
  }
}
