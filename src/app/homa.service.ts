import { Injectable } from '@angular/core';
import { KrvnaSlika } from './krvnaslika';

@Injectable()
export class HomaService {

  getHomaIr(krvnaSlika: KrvnaSlika) {
		let homaIr = (krvnaSlika.glukoza * krvnaSlika.inzulin) / 22.5;
		return homaIr;
	}

	getHomaBeta(krvnaSlika: KrvnaSlika) {
		let homaIr = (20 * krvnaSlika.inzulin) / (krvnaSlika.glukoza - 3.5) / 100;
		return homaIr;
	}

}
