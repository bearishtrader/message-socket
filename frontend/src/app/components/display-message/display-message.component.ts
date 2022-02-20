import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {

  @Input ()
		message : Message = <Message> {};

  @Input ()
		encryptionPassword : string = "";

  constructor(private cryptoServ : CryptoService) { }
    
  authorD : string = "";
  messageD : string = "";
  base64Url : string = "";
  todayDate : Date = new Date();

  ngOnInit(): void {    
    this.authorD = this.cryptoServ.decrypt( this.message.author, this.encryptionPassword );
    this.messageD = this.cryptoServ.decrypt( this.message.message, this.encryptionPassword );
    this.base64Url = this.cryptoServ.decrypt( this.message.base64ImageStr, this.encryptionPassword );
    this.todayDate = new Date();
  }  
}
