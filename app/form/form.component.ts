import {Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { Book, initialBooks } from '../book.data'
import { FORM_DIRECTIVES } from '@angular/common';


@Component({
  selector: 'form-component',
  templateUrl: 'app/form/form.component.html',
  styleUrls: ['app/form/form.component.css']
})

export class FormComponent implements OnInit{

  title:string;

  book: Book;

  active = true;

  @Output() onBookSave: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(){
      this.book = {
          bookIndex: -1,
          bookTitle: "",
          bookDescription: "",
          bookAuthor: ""
      }


  }

  cleanNewBook(){
      this.book = {
          bookIndex: -1,
          bookTitle: "",
          bookDescription: "",
          bookAuthor: ""
      }
      this.active = false;
      setTimeout(() => this.active = true, 0);
  }

  saveBook(){
      this.onBookSave.emit(this.book);
      this.cleanNewBook();
  }

  loadBook(load:Book){
      let newBook  = {
          bookIndex: load.bookIndex,
          bookTitle: load.bookTitle,
          bookDescription: load.bookDescription,
          bookAuthor: load.bookAuthor
      }
      this.book = newBook;
  }

}
