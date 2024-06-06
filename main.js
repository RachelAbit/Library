const book = document.querySelector('.book');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages')
const button = document.querySelector('button');
const contents = document.querySelector('.contents');

const library = []

function Book(book, author, pages){
  this.book = book
  this.author = author
  this.pages = pages
}

// const book1 = new Book('Harry Potter', 'JK Rowling')
// const book2 = new Book('Lord of the Rings',  'J.E Tolkien')

const cards = (card) => {
  let getbook = book.value;
  let getAuthor = author.value;
  let getPages = pages.value;

  const books = new Book(getbook, getAuthor, pages);

   if(card > 10){
    alert('You reach maximum of 10');
   } else {
      for (let i = 0; i < 1; i++){

        let tiny_cards = document.createElement('div');
        let book_title = document.createElement('h3');
        let author_name = document.createElement('p');
        let pages_num = document.createElement('p');
        let remove_btn = document.createElement('button');
        let checkbox = document.createElement('input')
        tiny_cards.style.marginTop = '20px';
        tiny_cards.style.padding = '10px'
        tiny_cards.style.display = 'flex';
        tiny_cards.style.flexDirection = 'column';
        tiny_cards.style.gap = '10px'
        tiny_cards.style.width = '250px';
        tiny_cards.style.height = '250px';
        tiny_cards.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.15)'
        tiny_cards.style.borderRadius = '10px';
        tiny_cards.style.backgroundColor = 'white';
        book_title.style.fontSize = '17px';
        author_name.style.fontSize = '15px';
        pages_num.style.fontSize = '15px';
        remove_btn.innerText = 'Remove';
        remove_btn.style.marginTop = '80px';
        remove_btn.style.padding = '10px';
        remove_btn.style.backgroundColor = 'orangered';
        remove_btn.style.border = 'none';
        remove_btn.style.color = 'White'
        remove_btn.style.fontWeight = 'bold';
        remove_btn.style.cursor = 'pointer'
        checkbox.type = 'checkbox';
        //there's a problem in checkbox position and text
        // checkbox.innerText = `Read`;
        // checkbox.display = 'flex'
        contents.style.display = 'flex';

        book_title.textContent = `Book title: ${getbook}`;
        author_name.textContent = `Author name: ${getAuthor}`;
        pages_num.textContent = `Pages: ${getPages}`;

        tiny_cards.append(book_title);
        tiny_cards.append(author_name);
        tiny_cards.append(pages_num);
        tiny_cards.append(checkbox);
        tiny_cards.append(remove_btn)
        
        

        contents.append(tiny_cards);
        library.push(contents)

        console.log(library)
      }
   }
}

function addToBook(){
   cards();
}