import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { SocketService } from 'src/app/services/websocket/socket.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  authorInput : string = "";
  encryptionPasswordInput : string = "";

  constructor(private socketServ:SocketService, public dataServ:DataService) { }

  ngOnInit(): void {
    this.socketServ.initConnection();
  }

}
