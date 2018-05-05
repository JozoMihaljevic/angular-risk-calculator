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

	getWhr2(osobni: Osobni) {
		let whr2 = osobni.struk/osobni.visina;
		return whr2;
	}
}
