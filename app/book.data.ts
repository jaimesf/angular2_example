export interface Book {
    bookIndex?: number,
    bookTitle: string,
    bookDescription: string,
    bookAuthor: string
}


export let initialBooks: Book[] = [
    {
      bookTitle: 'Ready Player One',
      bookDescription: 'The best book for older geeks',
      bookAuthor: 'Ernest Cline'
    }, {
      bookTitle: 'The lord of the rings',
      bookDescription: 'A child with hair on his feets is addicted to a toy',
      bookAuthor: 'J.R.R. Tolkien'
    }, {
      bookTitle: 'Game of thrones',
      bookDescription: 'Everybody dies',
      bookAuthor: 'George R. Martin'
    }
  ];
