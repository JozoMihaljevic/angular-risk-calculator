import { Component, OnInit } from '@angular/core';
import { Osobni }    from '../osobni';
import { KrvnaSlika } from '../krvnaslika';


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

	ponistiUnos() {

  this.model = new Osobni(null, null, null, null, null, this.spol[0]);

  this.modelkks = new KrvnaSlika(null, null, null, null, null, null);

	}

	racunajBMI() {
		var bmi = this.model.masa/((this.model.visina)/100 * (this.model.visina)/100);
		return bmi;
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

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
