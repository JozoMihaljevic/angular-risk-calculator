export class KrvnaSlika {
  public glukoza: number;
  public inzulin: number;
  public ukupnikol: number;
  public ldlkol: number;
  public hdlkol: number;
  public trigliceridi: number;

	constructor(
    glukoza: number,
    ukupnikol: number,
    ldlkol: number,
    hdlkol: number,
    trigliceridi: number,
    inzulin: number = null
  ) {
    this.glukoza = glukoza;
    this.ukupnikol = ukupnikol;
    this.ldlkol = ldlkol;
    this.hdlkol = hdlkol;
    this.trigliceridi = trigliceridi;
    this.inzulin = inzulin;
  }
}