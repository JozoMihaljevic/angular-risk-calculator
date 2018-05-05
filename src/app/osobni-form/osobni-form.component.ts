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
    { key: 'm', name: 'Muško'},
    { key: 'f', name: 'Žensko'},
  ];

  osobniPodaci: Osobni = new Osobni();
  krvnaSlika: KrvnaSlika = new KrvnaSlika();

  bmi: number;
  whr: number;
  whr2: number;
  homaIr: number;
  homaBeta: number;
  
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

  racunajWHRstrukbokovi() {
    this.whr = this.whrService.getWhr(this.osobniPodaci);
  }

  racunajWHRstrukvisina() {
    this.whr2 = this.whrService.getWhr2(this.osobniPodaci);
  }

  racunajHomaIr() {
    this.homaIr = this.homaService.getHomaIr(this.krvnaSlika);
    console.log(this.krvnaSlika);
  }

  racunajHomaBeta() {
    this.homaBeta = this.homaService.getHomaBeta(this.krvnaSlika);
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.osobniPodaci);
  }
}
