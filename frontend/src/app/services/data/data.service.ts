import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public messages : Message[] = [];

  constructor() { }
    
}
