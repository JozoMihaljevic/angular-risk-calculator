import { Spol } from './spol';

export class Osobni {
  public dob: number;
  public visina: number;
  public masa: number;
  public struk: number;
  public bokovi: number;
  public spol: Spol;

  constructor() {
    this.spol = Spol.Muškarac;
  }
}
