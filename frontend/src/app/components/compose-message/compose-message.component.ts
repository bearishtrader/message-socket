import { Component, Input, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ImageData } from 'src/app/models/image-data';
import { Message } from 'src/app/models/message';
import { CryptoService } from 'src/app/services/crypto/crypto.service';
import { FileService } from 'src/app/services/file/file.service';
import { SocketService } from 'src/app/services/websocket/socket.service';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  @Input ()
    encryptionPassword: string = "";

  @Input()
    author: string = "";  

  messageInput : string = "";

  previewImageUrl : SafeUrl = "";

  message : Message = { author: "", message: "", base64ImageStr: "" };

  messageImageData : ImageData = { fileName: "", data: "" };
  
  constructor( private fileServ: FileService, private socketServ: SocketService, private cryptoServ : CryptoService) { }

  ngOnInit(): void {    
    this.messageInput = "";
    this.previewImageUrl = "";
    this.message = { author: this.author, message: "", base64ImageStr: "" };
    this.messageImageData = { fileName: "", data: "" };
  }

    uploadMessageImage = (event : any) : void => {
		this.previewImageUrl = this.fileServ.getPreviewUrl ( event.target.files [0] );
		
		this.fileServ.getImageData (event.target.files [0], (imageData : ImageData) : void => {
			this.messageImageData = imageData;      
		});
	};

  composeMessage = () : void => {
    this.encryptionPassword = this.encryptionPassword.trim();
    this.message.author = this.cryptoServ.encrypt( this.author, this.encryptionPassword );
    this.message.message = this.cryptoServ.encrypt( this.messageInput, this.encryptionPassword );
    this.message.base64ImageStr = this.cryptoServ.encrypt( this.messageImageData.data, this.encryptionPassword );
    this.socketServ.sendMessage( this.message );
    // Reset fields
    this.messageInput = "";
    this.previewImageUrl = "";
    this.message = { author: this.author, message: "", base64ImageStr: "" };
    this.messageImageData = { fileName: "", data: "" };
  };
}