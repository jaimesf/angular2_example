import {Component, OnInit, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { Book, initialBooks } from '../book.data'

@Component({
  selector: 'list-component',
  templateUrl: 'app/list/list.component.html',
  styleUrls: ['app/list/list.component.css']
})

export class ListComponent implements OnInit{

  title:string;
  content: string;

  @Output() onEditBook: EventEmitter<any> = new EventEmitter();

  books:Book[];

  constructor(){}

  ngOnInit(){
      this.books = initialBooks;
  }

  editBook(book:Book, index:number){
      book.bookIndex = index;
      this.onEditBook.emit(book);
  }

  deleteBook(index:number){
      this.books.splice(index, 1)
  }

  saveBook(book:Book){
      if(book.bookIndex!=-1){
      this.books[book.bookIndex] = book;
    }else{
      this.books.push(book);
    }
  }

}
