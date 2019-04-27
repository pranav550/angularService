import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  dispaly(){
    return "Hello World"
  }
}
