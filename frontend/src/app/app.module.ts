import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './components/compose-message/compose-message.component';
import { DisplayMessageComponent } from './components/display-message/display-message.component';
import { MessageBoardComponent } from './pages/message-board/message-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    DisplayMessageComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
