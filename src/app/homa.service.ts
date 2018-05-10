import { Injectable } from '@angular/core';
import { KrvnaSlika } from './krvnaslika';

@Injectable()
export class HomaService {

  getHomaIr(krvnaSlika: KrvnaSlika) {
		let homaIr = (krvnaSlika.glukoza * krvnaSlika.inzulin) / 22.5;
		return homaIr;
	}

	getHomaBeta(krvnaSlika: KrvnaSlika) {
		let homaBeta = (20 * krvnaSlika.inzulin) / (krvnaSlika.glukoza - 3.5) / 100;
		return homaBeta;
	}

	homaIrPoruka(homaIr) {
		let porukaHomaIr: string;
		if (homaIr < 0.5) {
      porukaHomaIr = 'Povećana osjetljivost na inzulin – izrazito nizak rizik za nastanak inzulinske rezistencije. Rizik za kardiovaskularne bolesti - Nizak';
    } else if (0.5 <= homaIr && homaIr < 1.8) {
      porukaHomaIr = 'Normalna osjetljivost na inzulin – nizak rizik za nastanak inzulinske rezistencije. Rizik za kardiovaskularne bolesti - Normalan';
    } else if (1.8 <= homaIr && homaIr < 2.9) {
      porukaHomaIr = 'Smanjena osjetljivost na inzulin – blago povećan rizik za nastanak inzulinske rezistencije. Rizik za kardiovaskularne bolesti - Blago povišen';
    } else if (2.9 <= homaIr && homaIr < 4) {
      porukaHomaIr = 'Smanjena osjetljivost na inzulin – visok rizik za nastanak inzulinske rezistencije. Rizik za kardiovaskularne bolesti - Povišen';
    } else {
      porukaHomaIr = 'Izrazito visok rizik za nastanak inzulinske rezistencije – preddijabetičko stanje. Rizik za kardiovaskularne bolesti - Visok';
    }
    return porukaHomaIr;
	}

	homaBetaPoruka(homaBeta) {
		let porukaHomaBeta: string;
		if (homaBeta < 0.12) {
      porukaHomaBeta = 'Normalna aktivnost beta otočića - izrazito nizak rizik za nastanak dijabetesa tipa 2. Rizik za kardiovaskularne bolesti - Nizak';
    } else if (0.12 <= homaBeta && homaBeta < 0.5) {
      porukaHomaBeta = 'Normalna aktivnost beta otočića – nizak rizik za nastanak dijabetesa tipa 2. Rizik za kardiovaskularne bolesti - Normalan';
    } else if (0.5 <= homaBeta && homaBeta < 0.56) {
      porukaHomaBeta = 'Smanjena aktivnost beta otočića – povišen rizik za nastanak dijabetesa tipa 2. Rizik za kardiovaskularne bolesti - Blago povišen'
    } else if (0.56 <= homaBeta && homaBeta < 0.64) {
      porukaHomaBeta = 'Smanjena aktivnost beta otočića – visok rizik za nastanak dijabetesa tipa 2. Rizik za kardiovaskularne bolesti - Povišen'
    } else {
      porukaHomaBeta = 'Izrazito smanjena aktivnost beta otočića – izrazito visok rizik za nastanak dijabetesa tipa 2. Rizik za kardiovaskularne bolesti - Visok';
    }
    return porukaHomaBeta;
	}
}
