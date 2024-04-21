import { Injectable } from '@angular/core';
import { BookType } from './book-type';
import { Book } from './book';
import { BookInterface } from './book-interface';
import { PhysicalBookInterface } from './physical-book-interface';
import { EBookInterface } from './e-book-interface';
import { AudioBookInterface } from './audio-book-interface';
import { PhysicalBookBuilder } from './physical-book-builder';
import { EBookBuilder } from './e-book-builder';
import { AudioBookBuilder } from './audio-book-builder';
import { publish } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private goodList: Book[];

  constructor() {
    this.goodList = this.rawBooks.map((book: BookInterface) => {
      switch (book.type) {
        case BookType.PHYSICAL:
          var Pbuilder = new PhysicalBookBuilder();
          Pbuilder.addAuthor(book.author);
          Pbuilder.addDate(book.date);
          Pbuilder.addDescription(book.description);
          Pbuilder.addGenres(book.genres);
          Pbuilder.addImageUrl(book.imageUrl);
          Pbuilder.addPrice(book.price);
          Pbuilder.addTitle(book.title);
          Pbuilder.addPublisher(book.publisher);
          Pbuilder.addPages((book as PhysicalBookInterface).pages);
          Pbuilder.addStock((book as PhysicalBookInterface).stock);
          return Pbuilder.make();
        case BookType.EBOOK:
          var Ebuilder = new EBookBuilder();
          Ebuilder.addAuthor(book.author);
          Ebuilder.addDate(book.date);
          Ebuilder.addDescription(book.description);
          Ebuilder.addGenres(book.genres);
          Ebuilder.addImageUrl(book.imageUrl);
          Ebuilder.addPrice(book.price);
          Ebuilder.addTitle(book.title);
          Ebuilder.addPublisher(book.publisher);
          Ebuilder.addPages((book as EBookInterface).pages);
          return Ebuilder.make();
        case BookType.AUDIO:
          var Abuilder = new AudioBookBuilder();
          Abuilder.addAuthor(book.author);
          Abuilder.addDate(book.date);
          Abuilder.addDescription(book.description);
          Abuilder.addGenres(book.genres);
          Abuilder.addImageUrl(book.imageUrl);
          Abuilder.addPrice(book.price);
          Abuilder.addTitle(book.title);
          Abuilder.addPublisher(book.publisher);
          Abuilder.addLengthSeconds((book as AudioBookInterface).lengthSeconds);
          Abuilder.addNarrator((book as AudioBookInterface).narrator);
          return Abuilder.make();
      }
    });
    this.goodList.sort((a, b) => {
      if(a.type == BookType.PHYSICAL && b.type != BookType.PHYSICAL) {
        return -1;
      }
      else if(a.type == BookType.EBOOK && b.type == BookType.AUDIO) {
        return -1;
      }
      else if(a.type == BookType.EBOOK && b.type == BookType.PHYSICAL) {
        return 1;
      }
      else if(a.type == BookType.AUDIO && b.type != BookType.AUDIO) {
        return 1;
      }
      else if (a.type == b.type) {
        return a.id - b.id;
      }
      return 0;
    });
  }

  private rawBooks = [
      {
        type: BookType.PHYSICAL,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        id: 1,
        description: 'The story follows the adventures of a noble (hidalgo) named Alonso Quixano who reads so many chivalric romances that he loses his sanity and decides to set out to revive chivalry, undo wrongs, and bring justice to the world, under the name Don Quixote.',
        price: 10,
        rating: 4.5,
        date: '1605-01-01',
        genres: ['Adventure', 'Comedy', 'Satire'],
        imageUrl: 'assets/donquixote.png',
        pages: 863,
        stock: 3,
        publisher: 'Francisco de Robles',
      },
      {
        type: BookType.EBOOK,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        id: 1,
        description: 'The story follows the adventures of a noble (hidalgo) named Alonso Quixano who reads so many chivalric romances that he loses his sanity and decides to set out to revive chivalry, undo wrongs, and bring justice to the world, under the name Don Quixote.',
        price: 10,
        rating: 4.5,
        genres: ['Adventure', 'Comedy', 'Satire'],
        date: '1605-01-01',
        imageUrl: 'assets/donquixote.png',
        pages: 863,
        publisher: 'Francisco de Robles',
      },
      {
        type: BookType.AUDIO,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        id: 1,
        description: 'The story follows the adventures of a noble (hidalgo) named Alonso Quixano who reads so many chivalric romances that he loses his sanity and decides to set out to revive chivalry, undo wrongs, and bring justice to the world, under the name Don Quixote.',
        price: 10,
        rating: 4.5,
        genres: ['Adventure', 'Comedy', 'Satire'],
        date: '1605-01-01',
        imageUrl: 'assets/donquixote.png',
        lengthSeconds: 863,
        narrator: 'Shakira',
        publisher: 'Francisco de Robles',
      },
      {
        type: BookType.PHYSICAL,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        id: 2,
        description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared.',
        price: 15,
        rating: 4.8,
        genres: ['Tragedy', 'Modernism'],
        date: '1925-04-10',
        imageUrl: 'assets/gatsby.png',
        pages: 218,
        stock: 5,
        publisher: 'Charles Scribner\'s Sons',
      },
      {
        type: BookType.EBOOK,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        id: 2,
        description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared.',
        price: 15,
        rating: 4.8,
        genres: ['Tragedy', 'Modernism'],
        date: '1925-04-10',
        imageUrl: 'assets/gatsby.png',
        pages: 218,
        publisher: 'Charles Scribner\'s Sons',
      },
      {
        type: BookType.AUDIO,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        id: 2,
        description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared.',
        price: 15,
        rating: 4.8,
        genres: ['Tragedy', 'Modernism'],
        date: '1925-04-10',
        imageUrl: 'assets/gatsby.png',
        lengthSeconds: 218,
        narrator: 'Nick Carraway',
        publisher: 'Charles Scribner\'s Sons',
      },
      {
        type: BookType.PHYSICAL,
        title: 'All Quiet on the Western Front',
        author: 'Erich Maria Remarque',
        id: 3,
        description: 'The book tells the story of Paul Bäumer, a German soldier who volunteered for the army along with his classmates after being persuaded by a teacher who glorified the war. The novel is narrated by Paul, who has become a soldier.',
        price: 12,
        rating: 4.7,
        genres: ['War', 'Historical'],
        date: '1929-01-29',
        imageUrl: 'assets/allquiet.png',
        pages: 296,
        stock: 2,
        publisher: 'Propyläen Verlag',
      },
      {
        type: BookType.EBOOK,
        title: 'All Quiet on the Western Front',
        author: 'Erich Maria Remarque',
        id: 3,
        description: 'The book tells the story of Paul Bäumer, a German soldier who volunteered for the army along with his classmates after being persuaded by a teacher who glorified the war. The novel is narrated by Paul, who has become a soldier.',
        price: 12,
        rating: 4.7,
        genres: ['War', 'Historical'],
        date: '1929-01-29',
        imageUrl: 'assets/allquiet.png',
        pages: 296,
        publisher: 'Propyläen Verlag',
      },
      {
        type: BookType.AUDIO,
        title: 'All Quiet on the Western Front',
        author: 'Erich Maria Remarque',
        id: 3,
        description: 'The book tells the story of Paul Bäumer, a German soldier who volunteered for the army along with his classmates after being persuaded by a teacher who glorified the war. The novel is narrated by Paul, who has become a soldier.',
        price: 12,
        rating: 4.7,
        genres: ['War', 'Historical'],
        date: '1929-01-29',
        imageUrl: 'assets/allquiet.png',
        lengthSeconds: 296,
        narrator: 'Franz Ferdinand',
        publisher: 'Propyläen Verlag',
      },
      {
        type: BookType.PHYSICAL,
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        id: 4,
        description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
        price: 20,
        rating: 4.9,
        genres: ['Fantasy', 'Young Adult'],
        date: '1997-06-26',
        imageUrl: 'assets/harrypotter.png',
        pages: 223,
        stock: 7,
        publisher: 'Bloomsbury',
      },
      {
        type: BookType.EBOOK,
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        id: 4,
        description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
        price: 20,
        rating: 4.9,
        genres: ['Fantasy', 'Young Adult'],
        date: '1997-06-26',
        imageUrl: 'assets/harrypotter.png',
        pages: 223,
        publisher: 'Bloomsbury',
      },
      {
        type: BookType.PHYSICAL,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        id: 5,
        description: 'The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, he searches for truth and rails against the "phoniness" of the adult world.',
        price: 18,
        rating: 4.6,
        genres: ['Coming-of-Age', 'Realism'],
        date: '1951-07-16',
        imageUrl: 'assets/catcher.png',
        pages: 234,
        stock: 4,
        publisher: 'Little, Brown and Company',
      },
      {
        type: BookType.EBOOK,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        id: 5,
        description: 'The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, he searches for truth and rails against the "phoniness" of the adult world.',
        price: 18,
        rating: 4.6,
        genres: ['Coming-of-Age', 'Realism'],
        date: '1951-07-16',
        imageUrl: 'assets/catcher.png',
        pages: 234,
        publisher: 'Little, Brown and Company',
      },
      {
        type: BookType.PHYSICAL,
        title: 'Hamlet',
        author: 'William Shakespeare',
        id: 6,
        description: 'The play vividly charts the course of real and feigned madness—from overwhelming grief to seething rage—and explores themes of treachery, revenge, incest, and moral corruption.',
        price: 14,
        rating: 4.7,
        genres: ['Tragedy', 'Drama'],
        date: '1603-01-01',
        imageUrl: 'assets/hamlet.png',
        pages: 289,
        stock: 6,
        publisher: 'Simon & Schuster',
      },
      {
        type: BookType.PHYSICAL,
        title: 'JoJo\'s Bizarre Adventure: Stardust Crusaders',
        author: 'Hirohiko Araki',
        id: 7,
        description: 'The story of Stardust Crusaders follows Jotaro Kujo and his companions as they embark on a quest to save Holly from an awakened Stand possessing her.',
        price: 25,
        rating: 4.9,
        genres: ['Adventure', 'Fantasy'],
        date: '1989-01-01',
        imageUrl: 'assets/jojo.png',
        pages: 3045,
        stock: 1,
        publisher: 'Shueisha',
      },
    ];

    getBooks(): Book[] {
      return this.goodList;
    }
}
