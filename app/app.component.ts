import {Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { FormComponent } from './form/form.component'
import { ListComponent } from './list/list.component'
import { Book } from './book.data'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit{

  title:string;

  @ViewChild('form')
  form:FormComponent;

  @ViewChild('list')
  list:ListComponent;

  constructor(){}

  ngOnInit(){
      this.title = 'Angular 2 example';
  }

  saveBook(book){
      this.list.saveBook(book);
  }

  loadBook(book:Book){
      console.log(book);
      this.form.loadBook(book);
  }

}
