import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { FetchtodoComponent } from './fetchtodo/fetchtodo.component';
import { TodoRepositoryService } from './todo-repository.service';
import { AddtodoComponent } from './addtodo/addtodo.component';


@NgModule({
  declarations: [
    AppComponent,
    FetchtodoComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
