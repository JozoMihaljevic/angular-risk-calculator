export class Osobni {
  public dob: number;
  public visina: number;
  public masa: number;
  public struk: number;
  public bokovi: number;
  public spol: string;

	constructor(
    dob: number,
    visina: number,
    masa: number,
    struk: number,
    bokovi: number,
    spol: string,
  ) {
    this.dob = dob;
    this.visina = visina;
    this.masa = masa;
    this.struk = struk;
    this.bokovi = bokovi;
    this.spol = spol;
  }
}
