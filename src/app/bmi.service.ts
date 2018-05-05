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
    let bmi = osobni.masa/(osobni.visina/100 ** 2);
    return bmi;
  }
}
