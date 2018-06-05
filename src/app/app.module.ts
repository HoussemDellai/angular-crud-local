import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FetchtodoComponent } from './fetchtodo/fetchtodo.component';
import { TodoRepositoryService } from './todo-repository.service';


@NgModule({
  declarations: [
    AppComponent,
    FetchtodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
