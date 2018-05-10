import { Injectable } from '@angular/core';
import { KrvnaSlika } from './krvnaslika';
import { Osobni } from './osobni';

@Injectable()
export class KrvnaSlikaService {

stupanjGlukoza: number;
stupanjUkupniKolesterol: number;
stupanjLdlKolesterol: number;
stupanjHdlKolesterol: number;
stupanjTrigliceridi: number;

  glukozaPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaGlukoza;

  	if (krvnaSlika.glukoza < 4.5) {
    	porukaGlukoza = 'Vrijednost ispod referentnih vrijednosti. <4.5';
    	this.stupanjGlukoza = 0;
    } else if (4.5 <= krvnaSlika.glukoza && krvnaSlika.glukoza < 6.5) {
      porukaGlukoza = 'Vrijednost unutar referentnih intervala.< 6.5';
    	this.stupanjGlukoza = 1;
    } else if (6.5 <= krvnaSlika.glukoza && krvnaSlika.glukoza < 8.5) {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti.< 8.5';
    	this.stupanjGlukoza = 2;
    } else {
      porukaGlukoza = 'Vrijednost iznad referentnih vrijednosti.>';
    	this.stupanjGlukoza = 3;
    }
    console.log(this.stupanjGlukoza);

    return porukaGlukoza;
  }

  ukupniKolPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaUkupniKolesterol;

  	if (krvnaSlika.ukupnikol < 4) {
      porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
    	this.stupanjUkupniKolesterol = 0;
    } else if (4 <= krvnaSlika.ukupnikol && krvnaSlika.ukupnikol < 5) {
      porukaUkupniKolesterol = 'Vrijednost unutar referentnih intervala. Rizik za razvoj kardiovaskularnih bolesti: Normalan';
      this.stupanjUkupniKolesterol = 1;
    } else if (5 <= krvnaSlika.ukupnikol && krvnaSlika.ukupnikol < 6) {
      porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti.5<x<6';
    	this.stupanjUkupniKolesterol = 2;
    } else {
      porukaUkupniKolesterol = 'Vrijednost iznad referentnih vrijednosti.x>6';
    	this.stupanjUkupniKolesterol = 3;
    }
    console.log(this.stupanjUkupniKolesterol);

    return porukaUkupniKolesterol;
  }

  ldlKolPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaldlKolesterol;

  	if (krvnaSlika.ldlkol < 1) {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti. Rizik za razvoj kardiovaskularnih bolesti: Visok';    
    	this.stupanjLdlKolesterol = 0;
    } else if (1 <= krvnaSlika.ldlkol && krvnaSlika.ldlkol < 3) {
      porukaldlKolesterol = 'Nalaz uredan. Imate smanjen rizik od nastanka kardiovaskularnih bolesti';
    	this.stupanjLdlKolesterol = 1;
    } else if (3 <= krvnaSlika.ldlkol && krvnaSlika.ldlkol < 5) {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti.3<x5';   
    	this.stupanjLdlKolesterol = 2;
    } else {
      porukaldlKolesterol = 'Vrijednost iznad referentnih vrijednosti.x>5';    
    	this.stupanjLdlKolesterol = 3;
    }
    console.log(this.stupanjLdlKolesterol);

    return porukaldlKolesterol;
  }

  hdlKolPoruka(krvnaSlika: KrvnaSlika, osobni: Osobni) {
  	let porukahdlKolesterol;

  	if (osobni.spol == 'm') {
      if (1 <= krvnaSlika.hdlkol) {
        porukahdlKolesterol = 'Vrijednost unutar referentnih intervala. 1<x';
        this.stupanjHdlKolesterol = 0;              
      } else {
        porukahdlKolesterol = 'Vrijednost ispod referentnih vrijednosti.x>1';
       this.stupanjHdlKolesterol = 1;          
      }
    } else {
      if (1.2 <= krvnaSlika.hdlkol) {
        porukahdlKolesterol = 'Vrijednost unutar referentnih intervala.1.2<x';
        this.stupanjHdlKolesterol = 0;              
      } else {
        porukahdlKolesterol = 'Vrijednost ispod referentnih vrijednosti.x>1.2';
        this.stupanjHdlKolesterol = 1;              
      }
    }
    console.log(this.stupanjHdlKolesterol);

    return porukahdlKolesterol;    
  }

  trigliceridiPoruka(krvnaSlika: KrvnaSlika) {
  	let porukaTrigliceridi;
  	
  	if (krvnaSlika.trigliceridi < 1.7) {
        porukaTrigliceridi = 'Vrijednost unutar referentnih intervala.x<1.7';
        this.stupanjTrigliceridi = 0;      
    } else if (1.7 <= krvnaSlika.trigliceridi && krvnaSlika.trigliceridi < 3) {
        porukaTrigliceridi = 'Vrijednost iznad referentnih vrijednosti.1.7<x<3';
        this.stupanjTrigliceridi = 1;    
    } else {
        porukaTrigliceridi = 'Vrijednost iznad referentnih vrijednosti.x>3';
        this.stupanjTrigliceridi = 2;    
    }
    console.log(this.stupanjTrigliceridi);

    return porukaTrigliceridi;
  }

  getRizikKKS() {
  	let stupanjRizikaKks;

  	stupanjRizikaKks = 	this.stupanjGlukoza
											+ this.stupanjUkupniKolesterol
											+	this.stupanjLdlKolesterol
											+	this.stupanjHdlKolesterol
											+	this.stupanjTrigliceridi

		console.log(stupanjRizikaKks);

		return stupanjRizikaKks;
  }
}
