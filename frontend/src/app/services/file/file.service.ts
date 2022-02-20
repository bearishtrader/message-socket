import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
//import { base64StringToBlob } from 'blob-util';

@Injectable({
  providedIn: 'root'
})

export class FileService {
	constructor (private sanitizer : DomSanitizer) {}
	
	getPreviewUrl = (file : File) : SafeUrl => {
		return this.sanitizer.bypassSecurityTrustUrl (URL.createObjectURL (file));
	};

  //getMessageUrlFromBase64 = (base64ImageStr : string, contentType?: string) : SafeUrl => {
  //  let blob : Blob = base64StringToBlob(base64ImageStr, contentType);    
  //  return this.sanitizer.bypassSecurityTrustUrl (URL.createObjectURL (blob));    
  //}
	
	getImageData = (file : File, callback : Function) : void => {
		//convert image to base64 string
		const fileReader = new FileReader ();
		
		fileReader.onloadend = () => {
			callback ({
				fileName: file.name,
				//data: (<string> fileReader.result).split (",") [1]
        // Note that data can be for example directly assigned as a binding variable string to <img [src]=... for this use case don't even need to convert to blob
        data: <string>fileReader.result
			});
		};
		
		fileReader.readAsDataURL (file);
	};  
}