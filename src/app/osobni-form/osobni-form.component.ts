import { Component, OnInit } from '@angular/core';
import { Osobni }    from '../osobni';
import { KrvnaSlika } from '../krvnaslika';
import { BmiService } from '../bmi.service';
import { WhrService } from '../whr.service';

@Component({
  selector: 'app-osobni-form',
  templateUrl: './osobni-form.component.html',
  styleUrls: ['./osobni-form.component.css']
})
export class OsobniFormComponent implements OnInit {
  spol = ['muškarac', 'žena'];
  model = new Osobni(null, null, null, null, null, this.spol[0])
  modelkks = new KrvnaSlika(null, null, null, null, null, null)
  submitted = false;

  bmi: number;

  constructor(private bmiService: BmiService) {
  }

  ngOnInit() {
  }

  ponistiUnos() {
    this.model = new Osobni(null, null, null, null, null, this.spol[0]);
    this.modelkks = new KrvnaSlika(null, null, null, null, null, null);
  }

  racunajBmi() {
    this.bmi = this.bmiService.getBmi(this.model);
  }

  racunajWHRstrukbokovi() {
    var whr = this.model.struk/this.model.bokovi;

    return whr;
  }

  racunajWHRstrukvisina() {
    var whr2 = this.model.struk/this.model.visina;

    return whr2;
  }

  racunajHomaIr() {
    return ((this.modelkks.glukoza * this.modelkks.inzulin)/22.5);
  }

  racunajHomaBeta() {
    return ((20 * this.modelkks.inzulin)/(this.modelkks.glukoza - 3.5)/100);
  }

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
