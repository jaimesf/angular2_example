import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component'
import { ListComponent } from './list/list.component'
import { FormsModule }   from '@angular/forms';





@NgModule({
  imports: [
      BrowserModule,
      FormsModule
  ],
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],
  bootstrap : [AppComponent]

})
export class AppModule { }
