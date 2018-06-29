export class MonObj {
  // Private properties
  private _libelle:string;
  private _valeur:number;

  // Constructor
  constructor(libelle:string, valeur:number) {
    this._libelle = libelle;
    this._valeur = valeur;
  }

  // Getters
  get libelle():string {
    return this._libelle;
  }

  get valeur():number {
    return this._valeur;
  }

  // Setters
  set libelle(newLibelle:string) {
    this._libelle = newLibelle
  }

  set valeur(newValeur:number) {
    this._valeur = newValeur
  }

  // Affiche
  afficheLibelle() {
    return 'Et voila, ' + this._libelle;
  }

  afficheValeur() {
    return 'Et aussi, ' + this._valeur;
  }
}
