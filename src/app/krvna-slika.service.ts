import { Injectable } from '@angular/core';
import { KrvnaSlika } from './krvnaslika';

@Injectable()
export class KrvnaSlikaService {

  glukozaPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaGlukoza;
  	if (krvnaSlika.glukoza < 4.5) {
    	porukaGlukoza = 'Vrijednost ispod referentnih vrijednosti. <4.5';
    } else if (4.5 <= krvnaSlika.glukoza && krvnaSlika.glukoza < 6.5) {
      porukaGlukoza = 'Vrijednost unutar referentnih intervala.< 6.5';
    } else if (6.5 <= krvnaSlika.glukoza && krvnaSlika.glukoza < 8.5) {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti.< 8.5';
    } else {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti.>';
    }
    return porukaGlukoza;
  }

  ukupniKolPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaUkupniKolesterol;
  	if (krvnaSlika.ukupnikol < 4) {
        porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
    } else if (4 <= krvnaSlika.ukupnikol && krvnaSlika.ukupnikol < 5) {
        porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
        
    } else if (5 <= krvnaSlika.ukupnikol && krvnaSlika.ukupnikol < 6) {
        porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti.5<x<6';
    } else {
        porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti.x>6';
    }
    return porukaUkupniKolesterol;
  }

  ldlKolPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaldlKolesterol;
  	if (krvnaSlika.ldlkol < 1) {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Visok';    
    } else if (1 <= krvnaSlika.ldlkol && krvnaSlika.ldlkol < 3) {
      porukaldlKolesterol = 'Nalaz uredan. Imate smanjen rizik od nastanka kardiovaskularnih bolesti';
    } else if (3 <= krvnaSlika.ldlkol && krvnaSlika.ldlkol < 5) {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti.3<x5';   
    } else {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti.x>5';    
    }
    return porukaldlKolesterol;
  }
}
