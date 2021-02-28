import { Injectable } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}
export interface city{
  id: number;
  name: string;
  countrycode: string;
  district: string;
  population: number;
}

export interface Field{
  fieldName: string;
  displayName: string;
  inputType?: string;
}

export interface Buttons{
  class: string;
  matIcon: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  
  constructor() { }

  getDisplayedCols(fieldsArray: Field[]): string[]{
    let fields: string[] = [];

    for (let i = 0; i < fieldsArray.length; i++) {
     fields.push(fieldsArray[i].fieldName);
      
    }

    return fields;
  }
}
