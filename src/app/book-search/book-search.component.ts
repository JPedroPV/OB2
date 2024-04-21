import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book/book';
import { BooksService } from '../book/books.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {
  private searchParams: string;
  books: Book[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
  ) {
    this.searchParams = '';
    this.books = this.booksService.getBooks();

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.recalcsearch();
      }
    });
  }

  ngOnInit() {
    this.recalcsearch();
  }

  ngOnChanges() {
    this.recalcsearch();
  }

  private recalcsearch() {
    const routeParams = this.route.snapshot.paramMap;
    const searchInput = routeParams.get('searchInput');
    this.searchParams = (searchInput != null)?decodeURI(searchInput):'';
    this.books = this.booksService.getBooks();
    if(this.searchParams != ''){
      this.books = this.books.filter(book => {
        var splitParams = this.searchParams.split(' ');
        for(var i = 0; i < splitParams.length; i++){
          if(!book.title.toUpperCase().includes(splitParams[i].toUpperCase()))
            return false;
        }
        return true;
      });
    }
  }
}
