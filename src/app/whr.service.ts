import { Injectable } from '@angular/core';
import { Osobni } from './osobni';

@Injectable()
export class WhrService {
	/**
	* Računa WHR index.
	*
	* @param {Osobni} osobni
	*/
	getWhr(osobni: Osobni) {
		let whr = osobni.struk/osobni.bokovi;
		return whr;
	}

	whrPoruka (osobni: Osobni, whr) {
		let porukaWHR: string;
		if (osobni.spol == 'm') {
      if (whr < 0.9) {
          porukaWHR = 'Rizik nizak, tip gionidni, rizik za nastanak kardiovaskularnih bolesti nizak. U slučaju nakupljanja masnog tkiva, ono se nakuplja na području bokova i bedara.';
      } else if (0.91 < whr && whr < 0.99) {
          porukaWHR = 'Rizik prosječan, tip gionidni, rizik za nastanak kardiovaskularnih bolesti normalan. U slučaju nakupljanja masnog tkiva, ono se nakuplja na području bokova i bedara.'
      } else {
          porukaWHR = 'Rizik povišen, tip visceralni, rizik za nastanak kardiovaskularnih bolesti visok. U slučaju nakupljanja masnog tkiva, ono se nakuplja u području trbuha.';
      }
  	} else {
      if (whr < 0.8) {
          porukaWHR = 'Rizik nizak, tip gionidni, rizik za nastanak kardiovaskularnih bolesti nizak. U slučaju nakupljanja masnog tkiva, ono se nakuplja na području bokova i bedara.';
      } else if (0.81 < whr && whr < 0.84) {
          porukaWHR = 'Rizik prosječan, tip gionidni, rizik za nastanak kardiovaskularnih bolesti normalan. U slučaju nakupljanja masnog tkiva, ono se nakuplja na području bokova i bedara.';
      } else {
          porukaWHR = 'Rizik povišen, tip visceralni, rizik za nastanak kardiovaskularnih bolesti visok. U slučaju nakupljanja masnog tkiva, ono se nakuplja u području trbuha.';
      }
  	}
  	return porukaWHR;
	}

	getWhr2(osobni: Osobni) {
		let whr2 = osobni.struk/osobni.visina;
		return whr2;
	}
}
