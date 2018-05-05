import { Component, OnInit } from '@angular/core';
import { Osobni }    from '../osobni';
import { KrvnaSlika } from '../krvnaslika';
import { BmiService } from '../bmi.service';
import { WhrService } from '../whr.service';
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
  bmi: number;
  modelkks = new KrvnaSlika(null, null, null, null, null, null);
  submitted = false;

  constructor(private bmiService: BmiService) {
  }

  ngOnInit() {
  }

  ponistiUnos() {
    this.osobniPodaci = new Osobni();
    this.modelkks = new KrvnaSlika(null, null, null, null, null, null);
  }

  racunajBmi() {
    this.bmi = this.bmiService.getBmi(this.osobniPodaci);
    console.log(this.osobniPodaci);
  }

  racunajWHRstrukbokovi() {
    var whr = this.osobniPodaci.struk / this.osobniPodaci.bokovi;

    return whr;
  }

  racunajWHRstrukvisina() {
    var whr2 = this.osobniPodaci.struk / this.osobniPodaci.visina;

    return whr2;
  }

  racunajHomaIr() {
    return ((this.modelkks.glukoza * this.modelkks.inzulin) / 22.5);
  }

  racunajHomaBeta() {
    return ((20 * this.modelkks.inzulin) / (this.modelkks.glukoza - 3.5) / 100);
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.osobniPodaci);
  }
}
