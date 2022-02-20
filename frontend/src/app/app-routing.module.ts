import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageBoardComponent } from './pages/message-board/message-board.component';

const routes: Routes = [
  { path: "**", component: MessageBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
