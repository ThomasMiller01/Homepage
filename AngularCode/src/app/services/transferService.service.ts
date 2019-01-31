import { Injectable } from '@angular/core';

@Injectable()
export class TransfereService {

  constructor() { }

  private data;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}