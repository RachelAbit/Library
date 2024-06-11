const book_ = document.querySelector('.book');
const author_ = document.querySelector('.author');
const pages_ = document.querySelector('.pages')
const button = document.querySelector('button');
const contents = document.querySelector('.contents');

const library = [] // I need to push all the card on the library array

function Book(book, author, pages){
  this.book = book
  this.author = author
  this.pages = pages
}

const card = (book, author, pages) => {
   const books = new Book (book, author, pages)

   books.book = book_.value;
   books.author = author_.value;
   books.pages = pages_.value;

   book_.value = ''
   author_.value = ''
   pages_.value = ''
   
    let cards = document.createElement('div');
    let book_title = document.createElement('h3');
    let author_name = document.createElement('p');
    let pages_num = document.createElement('p');
    let remove_btn = document.createElement('button');
    let checkbox = document.createElement('input')
    let checkbox_container = document.createElement('div');
    let check_label = document.createElement('label');

    cards.style.width = '250px';
    cards.style.height = '250px';
    cards.style.marginTop = '20px';
    cards.style.padding = '10px';
    cards.style.display = 'flex'
    cards.style.flexDirection = 'column';
    cards.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.15)'
    cards.style.borderRadius = '10px';

    book_title.style.fontSize = '15px';
    author_name.style.fontSize = '15px';
    pages_num.style.fontSize = '15px';

    remove_btn.innerText = 'Remove';
    remove_btn.style.marginTop = '90px';
    remove_btn.style.padding = '10px';
    remove_btn.style.backgroundColor = 'orangered';
    remove_btn.style.border = 'none';
    remove_btn.style.color = 'White'
    remove_btn.style.fontWeight = 'bold';
    remove_btn.style.cursor = 'pointer';

    checkbox.type = 'checkbox';
    checkbox_container.style.width = '100%';
    checkbox_container.style.display = 'flex';
    checkbox_container.style.alignItems = 'center';
    checkbox_container.style.gap = '10px';
    check_label.innerText = 'Read';

    contents.style.display = 'flex';

    book_title.textContent = `Book Title: ${books.book}`;
    author_name.textContent = `Author name: ${books.author}`;
    pages_num.textContent = `Pages: ${books.pages}`;

    cards.append(book_title);
    cards.append(author_name);
    cards.append(pages_num);
    cards.append(checkbox_container);
    cards.append(remove_btn)
    checkbox_container.append(checkbox);
    checkbox_container.append(check_label);

    contents.append(cards);
    library.push(books);
    console.log(library)
   
}

function addToBook(){
  card();
}