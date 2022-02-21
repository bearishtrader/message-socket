import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/models/message';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { DataService } from '../data/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private stompClient: any;

  constructor(public dataServ:DataService, private route: ActivatedRoute, private router: Router) { }  

  // Helpful STOMP JS docs: https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_4
  initConnection = () => {
        let webSocket = new SockJS(environment.socketBaseUrl+"message-socket");
        let that = this;
        this.stompClient = Stomp.over(webSocket);
        this.stompClient.reconnect_delay = 5000;  // Default is 0 don't reconnect
          this.stompClient.connect({}, 
            (frame: any) => { // Callback called on successful connection
              that.stompClient.subscribe("/subscription/message", 
                (message: any) => { // Callback which is called whenever we get a message from the websocket
                  if (message.body) {
                    that.dataServ.messages.unshift(<Message>JSON.parse(message.body));
                    //console.log(message.body);
                  }
                })
            },
            (frame: any) => { // Callback called on error occuring
              alert("An error has occurred with the STOMP websocket, click OK to reload the page...");
              this.reloadPage();
            });
  }

  sendMessage = (message: Message) => {
    this.stompClient.send("/app/send/message", {}, JSON.stringify(message));
  }
  
  reloadPage = () => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.route });
  }
}
