import { Component, OnInit } from '@angular/core';
import { Osobni }    from '../osobni';
import { KrvnaSlika } from '../krvnaslika';
import { BmiService } from '../bmi.service';
import { WhrService } from '../whr.service';
import { HomaService } from '../homa.service';
import { Spol } from '../spol';

@Component({
  selector: 'app-osobni-form',
  templateUrl: './osobni-form.component.html',
  styleUrls: ['./osobni-form.component.css']
})
export class OsobniFormComponent implements OnInit {

  spolovi: any[] = [
    { key: 'm', name: 'Muškarac'},
    { key: 'f', name: 'Žena'},
  ];

  osobniPodaci: Osobni = new Osobni();
  krvnaSlika: KrvnaSlika = new KrvnaSlika();

  bmi: number;
  bodyFatPostotak: string;
  preporucenaTjelesnaMasa: number;
  bodyFatPostotakPoruka: string;
  bmiPoruka: string;
  whr: number;
  whrPoruka: string;
  whr2: number;
  homaIr: number;
  homaIrPoruka: string;
  homaBeta: number;
  homaBetaPoruka: string;
  
  submitted = false;

  constructor(
    private bmiService: BmiService,
    private whrService: WhrService,
    private homaService: HomaService) {
  }

  ngOnInit() {
  }

  ponistiUnos() {
    this.osobniPodaci = new Osobni();
    this.krvnaSlika = new KrvnaSlika();
  }

  racunajBmi() {
    this.bmi = this.bmiService.getBmi(this.osobniPodaci);
    console.log(this.osobniPodaci);
  }

  racunajBodyFatPostotak() {
    this.bodyFatPostotak = this.bmiService.getBodyFatPostotak(this.osobniPodaci, this.bmi)
  }

  racunajPreporucenaTjelesnaMasa() {
    this.preporucenaTjelesnaMasa = this.bmiService.getPreporucenaTjelesnaMasa(this.osobniPodaci)
  }

  prikaziBmiPoruku() {
    this.bmiPoruka = this.bmiService.bmiPoruka(this.bmi)
  }

  prikaziBodyFatPostotakPoruku() {
    this.bodyFatPostotakPoruka = this.bmiService.bodyFatPostotakPoruka(this.bodyFatPostotak, this.osobniPodaci)
  }

  racunajWHRstrukbokovi() {
    this.whr = this.whrService.getWhr(this.osobniPodaci);
  }

  prikaziWHRPoruku() {
    this.whrPoruka = this.whrService.whrPoruka(this.osobniPodaci, this.whr);
  }

  racunajWHRstrukvisina() {
    this.whr2 = this.whrService.getWhr2(this.osobniPodaci);
  }

  racunajHomaIr() {
    this.homaIr = this.homaService.getHomaIr(this.krvnaSlika);
    console.log(this.krvnaSlika);
  }

  prikaziHomaIrPoruku() {
    this.homaIrPoruka = this.homaService.homaIrPoruka(this.homaIr);
  }

  racunajHomaBeta() {
    this.homaBeta = this.homaService.getHomaBeta(this.krvnaSlika);
  }

  prikaziHomaBetaPoruku() {
    this.homaBetaPoruka = this.homaService.homaBetaPoruka(this.homaBeta);
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.osobniPodaci);
  }
}
