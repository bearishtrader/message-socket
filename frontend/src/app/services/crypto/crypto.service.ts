import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encrypt = ( inputString : string, password : string ) : string => {
    let encryptionPassword : string = password.trim();
    if ( encryptionPassword == "" ) return inputString.trim();
    return CryptoJS.AES.encrypt( inputString.trim(), encryptionPassword ).toString();
  }

  decrypt = ( inputString : string, password : string ) : string => {
    let encryptionPassword : string = password.trim();
    if ( encryptionPassword == "" ) return inputString.trim();
    return CryptoJS.AES.decrypt( inputString.trim() , encryptionPassword ).toString( CryptoJS.enc.Utf8 );
  }
}
