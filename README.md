# message-socket
Web chat app with image support and AES encryption of messages implemented using websockets. 

# Front-End
The front-end was created with Angular 13 and was generated as follows with given dependencies:

ng new frontend --routing true --style css <br/>
cd frontend <br/>
npm install crypto-js <br/>
npm install --save-dev @types/crypto-js <br/>
npm install stompjs <br/>
npm install --save-dev @types/stompjs <br/>
npm install net -S <br/>
npm install sockjs-client <br/>
npm install --save-dev @types/sockjs-client <br/>

The following line needs to be added to the end of frontend/polyfill.ts
or STOMP and SockJS will get errors:

(window as any).global = window

# Back-End
The back-end is a maven project using Spring Boot and STOMP websocket messaging based on the Spring example: <br/>

[Using WebSocket to build an interactive web application] (https://spring.io/guides/gs/messaging-stomp-websocket/#initial)
