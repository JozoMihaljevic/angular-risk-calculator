import { Injectable } from '@angular/core';
import { Osobni } from './osobni';

@Injectable()
export class BmiService {
  /**
   * Računa BMI index.
   *
   * @param {Osobni} osobni
   */
  getBmi(osobni: Osobni) {
    let bmi = osobni.masa/((osobni.visina/100) * (osobni.visina/100));
    return bmi;
  }

  getBodyFatPostotak(osobni: Osobni, bmi) {
  	let bodyFatPostotak = ((1.2 * bmi) + (0.23 * osobni.dob) - 5.4 - (10.8 * 1)).toFixed(0);
  	return bodyFatPostotak;
  }

  getPreporucenaTjelesnaMasa(osobni: Osobni) {
  	let preporucenaTjelesnaMasa = (((osobni.visina*osobni.visina)/10000) * 21.75).toFixed(0);
  	return preporucenaTjelesnaMasa;
  }

  bmiPoruka(bmi) {
  	let porukaBmi: string;
		if (bmi < 18.4) {
      porukaBmi = 'Tjelesna masa ispod preporučene, rizik u odnosu na BMI: Nizak'
    } else if (18.5 < bmi && bmi < 24.9) {
        porukaBmi = 'Idealna tjelesna masa, rizik u odnosu na BMI: Normalan'
    } else if (25.0 < bmi && bmi < 29.9) {
        porukaBmi = 'Povišena tjelesna masa, rizik u odnosu na BMI: Povišen'
    } else if (30.0 < bmi && bmi < 34.9) {
        porukaBmi = 'Prekomjerna tjelesna masa (gojaznost, pretilost) 1. stupnja!!! Rizik u odnosu na BMI: Visok'
    } else if (35.0 < bmi && bmi < 39.9) {
        porukaBmi = 'Prekomjerna tjelesna masa (gojaznost, pretilost) 2. stupnja!!! Rizik u odnosu na BMI: Visok'
    } else {
        porukaBmi = 'Prekomjerna tjelesna masa (gojaznost, pretilost) 3. stupnja!!! Rizik u odnosu na BMI: Visok'
    }

    return porukaBmi;
  }

  bodyFatPostotakPoruka(bodyFatPostotak) {
  	let porukaBodyFatPostotak: string;
  	// za muškarce:
    if (bodyFatPostotak < 6) {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Nizak';
    } else if (7 < bodyFatPostotak && bodyFatPostotak < 13) {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Nizak';
    } else if (14 < bodyFatPostotak && bodyFatPostotak < 17) {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Normalan';
    } else if (18 < bodyFatPostotak && bodyFatPostotak < 22) {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Povišen';
    } else if (23 < bodyFatPostotak && bodyFatPostotak < 29) {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Povišen';
    } else {
        porukaBodyFatPostotak = 'Rizik za nastanak kardiovaskularnih bolesti u odnosu na postotak tjelesnih masti: Visok';
    }

    return porukaBodyFatPostotak;
  }
}
