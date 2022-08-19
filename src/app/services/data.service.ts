import { Injectable } from '@angular/core';
import SampleJson from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return (SampleJson);
  }
}
